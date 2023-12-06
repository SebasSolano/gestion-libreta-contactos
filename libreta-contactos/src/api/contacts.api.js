import axios from "axios";

export const getContactsRequest = async () =>
  await axios.get("http://localhost:4000/api/contacts");

  export const getContactRequest = async (id) =>
  await axios.get(`http://localhost:4000/api/contacts/${id}`);

export const createContactRequest = async (contact) =>
  await axios.post("http://localhost:4000/api/contacts", contact);

export const updateContactRequest = async (id, contact) => 
    await axios.put(`http://localhost:4000/api/contacts/${id}`, contact)

export const deleteContactRequest = async (id) => {
    await axios.delete(`http://localhost:4000/api/contacts/${id}`);
}

