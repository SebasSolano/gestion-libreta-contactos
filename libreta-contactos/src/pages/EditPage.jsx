import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faIdCard,
  faUserTag,
  faEnvelope,
  faPhone,
  faMobileAlt,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import ViewContact from "./viewContact";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getContactRequest, updateContactRequest } from "../api/contacts.api";

export default function EditPage() {
  const params = useParams();
  const [contactData, setContactData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getContactRequest(params.id);
        setContactData(result.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const contact = {
      id: event.target.id.value,
      name: event.target.name.value,
      lastName: event.target.lastName.value,
      alias: event.target.alias.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      cellPhone: event.target.cellPhone.value,
      address: event.target.address.value,
      webSite: event.target.webSite.value,
    };
    console.log(contact);
    event.target.closest("dialog").close();
    window.location.reload();
    await updateContactRequest(params, contact);
  };

  return (
    <>
      <dialog id="my_modal_4" className="modal" open>
        <div className="modal-box">
          <form method="dialog">
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">edit contact</h3>
          <p className="py-4">Edit the contact information.</p>
          <div className="modal-action">
            <div className="container mx-auto">
              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-white p-6 rounded-md"
              >
                <div className="mb-4 flex items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-500 mr-3"
                  />
                  <input type="hidden" name="id" value={contactData.id} />
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={contactData.name || ""}
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <FontAwesomeIcon
                    icon={faIdCard}
                    className="text-gray-500 mr-2"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={contactData.lastName || ""}
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <FontAwesomeIcon
                    icon={faUserTag}
                    className="text-gray-500 mr-2"
                  />
                  <input
                    type="text"
                    name="alias"
                    placeholder="Alias"
                    value={contactData.alias || ""}
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-500 mr-3"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={contactData.email || ""}
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-gray-500 mr-3"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={contactData.phone || ""}
                    className="w-full border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <FontAwesomeIcon
                    icon={faMobileAlt}
                    className="text-gray-500 mr-4"
                  />
                  <input
                    type="text"
                    name="cellPhone"
                    placeholder="Cell Phone"
                    value={contactData.cellPhone || ""}
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-gray-500 mr-4"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={contactData.address || ""}
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-gray-500 mr-3"
                  />
                  <input
                    type="text"
                    name="webSite"
                    placeholder="Web Site"
                    value={contactData.webSite || ""}
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                >
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
      <ViewContact />
    </>
  );
}
