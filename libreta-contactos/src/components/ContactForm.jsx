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
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { createContactRequest } from "../api/contacts.api.js";

export default function ContactForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const contact = {
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
    event.target.closest('dialog').close();
    window.location.reload();
    await createContactRequest(contact);
  };

  return (
    <>
      <button
        className="text-white hover:text-yellow-300 transition duration-300 ease-in-out"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <FontAwesomeIcon icon={faPlus} className="text-lg" />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add contact</h3>
          <p className="py-4">Enter the contact information.</p>
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
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
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
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
