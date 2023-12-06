import { Contacts } from "../models/Contacts.js";
import { Users } from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {SECRET_KEY} from "../config.js";

// Funcion para hashear una contraseña usando bcrypt
const hashPassword = async (password) => {
  // Definir el numero de rondas de saltos
  const saltRounds = 10;
  // Hashear la contraseña usando bcrypt
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  // Devolver la contraseña hasheada
  return hashedPassword;
};

// Funcion para permitir a un usuario iniciar sesion
export const loginUser = async (req, res, next) => {
  try {
    // Obtener el email y la contraseña del cuerpo de la solicitud
    const { email, password } = req.body;
    // Buscar al usuario por su email
    const user = await Users.findOne({ where: { email } });

    // Si el usuario no existe, devolver un mensaje de error
    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Si las contraseñas no coinciden, devolver un mensaje de error
    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Generar un token de autenticacion usando el email del usuario y la clave secreta
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    // Devolver el token como respuesta
    res.json({ token });
  } catch (error) {
    // Si ocurre un error, devolver un mensaje de error
    return res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await Users.findOne({
      where: {
        id,
      },
    });

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    const newUser = await Users.create({
      username,
      email,
      password: hashedPassword,
    });

    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserContacts = async (req, res) => {
  try {
    const { id } = req.params;

    const contacts = await Contacts.findAll({
      where: {
        userId: id,
      },
    });

    res.json(contacts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
