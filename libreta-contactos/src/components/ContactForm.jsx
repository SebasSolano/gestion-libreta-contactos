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

export default function ContactForm() {
  return (
    <div className="container mx-auto">
      <form className="max-w-md mx-auto bg-white p-6 rounded-md">
        <div className="mb-4 flex items-center">
          <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FontAwesomeIcon icon={faIdCard} className="text-gray-500 mr-2" />
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FontAwesomeIcon icon={faUserTag} className="text-gray-500 mr-2" />
          <input
            type="text"
            id="alias"
            placeholder="Alias"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-3" />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-3" />
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            className="w-full border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FontAwesomeIcon icon={faMobileAlt} className="text-gray-500 mr-4" />
          <input
            type="text"
            id="cellPhone"
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
            id="address"
            placeholder="Address"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FontAwesomeIcon icon={faGlobe} className="text-gray-500 mr-3" />
          <input
            type="text"
            id="webSite"
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
  );
}
