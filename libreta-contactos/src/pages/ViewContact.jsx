import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faMobileAlt,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { getContactsRequest } from "../api/contacts.api.js";
import Navbar from "../components/Navbar";

export default function ViewContact() {
  const [contacts, setContact] = useState([]);

  useEffect(() => {
    async function loadContacts() {
      const response = await getContactsRequest();
      setContact(response.data);
    }
    loadContacts();
  }, []);
  return (
    <>
    <Navbar />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-61">
      {contacts.map((contact) => (
        <div key={contact.id} className="m-10 bg-white rounded-md shadow-md ">
          <div className="p-4 flex justify-center">
            <div className="bg-gray-200 rounded-full p-4">
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-500 text-4xl"
              />
            </div>
          </div>
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">
              {contact.name} {contact.lastName}
            </h2>
            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-500 mr-2"
              />
              <p>{contact.email}</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-2" />
              <p>{contact.phone}</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="text-gray-500 mr-2"
              />
              <p>{contact.cellPhone}</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-gray-500 mr-2"
              />
              <p>{contact.address}</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faGlobe} className="text-gray-500 mr-2" />
              <p>{contact.webSite}</p>
            </div>
            {/* BOTON EDITAR */}
            <div className="flex justify-center">
              <Button action="edit" id={contact.id}/>
              {/* BOTON ELIMINAR */}
              <Button action="delete" id={contact.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
