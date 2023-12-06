import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faMobileAlt,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Button from '../components/Button'
import {useEffect } from "react";

export default function ViewContact() {

  useEffect(() => {
    console.log("View Contact")
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-61">
        
          <div className="m-10 bg-white rounded-md shadow-md ">
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
                
              </h2>
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-gray-500 mr-2"
                />
                <p></p>
              </div>
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-gray-500 mr-2"
                />
                <p></p>
              </div>
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  className="text-gray-500 mr-2"
                />
                <p></p>
              </div>
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-gray-500 mr-2"
                />
                <p></p>
              </div>
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-gray-500 mr-2"
                />
                <p></p>
              </div>
              {/* BOTON EDITAR */}
              <div className="flex justify-center">
                <Button action="edit"  />
                {/* BOTON ELIMINAR */}
                <Button action="delete"  />
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

