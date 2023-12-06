import axios from "axios";

export const getContactsRequest = async () =>
  await axios.get("http://localhost:4000/api/contacts");

export const createContactRequest = async (contact) =>
  await axios.post("http://localhost:4000/api/contacts", contact);
