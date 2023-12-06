import { Contacts } from "../models/Contacts.js";

export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contacts.findAll();
    res.json(contacts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getContact = async (req, res, next) => {
  const { id } = req.params;
  try {
    const contact = await Contacts.findOne({
      where: {
        id,
      },
    });

    res.json(contact);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createContact = async (req, res, next) => {
  try {
    const { name, lastName, alias, email, phone, cellPhone, address, webSite } =
      req.body;

    const newContact = await Contacts.create({
      name,
      lastName,
      alias,
      email,
      phone,
      cellPhone,
      address,
      webSite,
    });

    res.json(newContact);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await Contacts.findOne({
      where: { id },
    });

    contact.set(req.body);
    await contact.save();
    return res.json(contact);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteContact = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await Contacts.destroy({
      where: { id },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
