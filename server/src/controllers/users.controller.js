import { Contacts } from "../models/Contacts.js";
import { Users } from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import SECRET_KEY from "../config.js";

// Funcion para hashear una contraseña usando bcrypt
const hashPassword = async (password) => {
  // Definir el numero de rondas de saltos
  const saltRounds = 10;
  // Hashear la contraseña usando bcrypt
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  // Devolver la contraseña hasheada
  return hashedPassword;
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "User no found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Password incorrect" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
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
