import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBars,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faAddressBook}
            className="text-white text-3xl mr-2 hover:text-yellow-300 transition duration-300 ease-in-out"
          />
          <h1 className="text-white text-lg font-semibold">
            Libreta de Contactos
          </h1>
        </div>
        <div className="flex items-center">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition duration-300 ease-in-out mr-4"
          >
            <FontAwesomeIcon icon={faBars} className="text-lg" />
          </Link>

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
              <ContactForm />
            </div>
          </dialog>
        </div>
      </div>
    </nav>
  );
}
