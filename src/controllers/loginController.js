import {userByEmailModel} from '../models/usersmodel.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendErrorResponse from '../../utils/utils.js';

const loginUser = async (req, res) => {
    const {user} = req.body;

    try {
        const finduser = await userByEmailModel(user)
        console.log(finduser);
        if (!finduser){
            return await sendErrorResponse(res, 'log_01');
        }
        const isPassValid = bcrypt.compareSync(
            user.password,
            finduser.password
        )
        if(!isPassValid){
            return await sendErrorResponse(res, 'log_02')
        }

        const {email, rol, lenguage} = finduser
        const token = await createToken(email)
        res.status(200).json({
            message: `Bienvenid@ ${email}, has iniciado sesión satisfactoriamente.\\n\\ ${rol} en ${lenguage}`,
            code: 200,
            token
        })

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//funcion para crear el token
const createToken = async(email) => {
    const token = jwt.sign({email}, process.env.JWT_SECRET, {
        expiresIn: '60s'
    });
    return token;
};



export default loginUser;