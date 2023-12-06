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
import { useNavigate } from "react-router-dom";

export default function EditPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [contactData, setContactData] = useState({});

  useEffect(() => {
    document.getElementById("my_modal_4").showModal();
    const fetchData = async () => {
      try {
        if (params.id) {
          const result = await getContactRequest(params.id);
          setContactData(result.data);
        }
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
    //window.location.reload();
    navigate("/");
    const result = await updateContactRequest(params.id, contact);
    console.log(result);
  };

  return (
    <>
      <dialog id="my_modal_4" className="modal">
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
                    defaultValue={contactData.name}
                    onChange={(e) =>
                      setContactData({ ...contactData, name: e.target.value })
                    }
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
                    defaultValue={contactData.lastName || ""}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        lastName: e.target.value,
                      })
                    }
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
                    defaultValue={contactData.alias || ""}
                    onChange={(e) =>
                      setContactData({ ...contactData, alias: e.target.value })
                    }
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
                    defaultValue={contactData.email || ""}
                    onChange={(e) =>
                      setContactData({ ...contactData, email: e.target.value })
                    }
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
                    defaultValue={contactData.phone || ""}
                    onChange={(e) =>
                      setContactData({ ...contactData, phone: e.target.value })
                    }
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
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        cellPhone: e.target.value,
                      })
                    }
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
                    defaultValue={contactData.address || ""}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        address: e.target.value,
                      })
                    }
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
                    defaultValue={contactData.webSite || ""}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        webSite: e.target.value,
                      })
                    }
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
