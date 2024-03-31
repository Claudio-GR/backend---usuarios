import {createUserModel, userByEmailModel} from "../models/usersmodel.js";

const createNewUser = async (req, res) => {
    try {
      const { user } = req.body;
      const newUser = await createUserModel(user);
      return res.status(201).json(newUser);
    } catch (error) {
      console.error(`Error al crear un nuevo Usuario:`, error);
      return res.status(400).json({ message: "Error interno del servidor" });
    }
};

const getUserByID = async (req, res) => {
  try {
    const email = req.params;
    console.log(email);
    const user = await userByEmailModel(email)
    console.log('user: ', user);
    return res.status(200).json(user);
  } catch (error) {
    console.error(`Error al buscar el usuario:`, error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

export {createNewUser, getUserByID}