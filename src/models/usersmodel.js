import pool from "../../dbase/config.js";
import bcrypt from 'bcryptjs';

const createUserModel = async ({ email, password, role, language}) => {
    const hashedPasword = bcrypt.hashSync(password);
    const SQLQuery = {
        text: 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [email, hashedPasword, role, language],
    };
    const response = await pool.query(SQLQuery);
    return response.rows[0]
}

const userByEmailModel = async ({email}) => {
    console.log(email);
    const SQLQuery = {
        text: 'SELECT * FROM usuarios WHERE email = $1',
        values: [email]
    };
    console.log(SQLQuery);
    const response = await pool.query(SQLQuery);
    console.log(response.rows[0]);
    return response.rows[0];
}

export {createUserModel, userByEmailModel}