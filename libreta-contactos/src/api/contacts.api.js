import axios from 'axios';

export const createContactRequest = async (contact) => 
    await axios.post('http://localhost:4000/api/contacts', contact);


