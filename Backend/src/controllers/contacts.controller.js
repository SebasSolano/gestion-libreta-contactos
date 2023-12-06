import {Contacts} from "../models/Contacts.js"

export const getContacts = async (req, res, next) => {
    try {
        const contacts = await Contacts.findAll();
        res.json(contacts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}