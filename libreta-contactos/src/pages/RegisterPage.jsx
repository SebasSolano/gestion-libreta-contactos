import { Link } from "react-router-dom"; // Si estás usando React Router
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {createUserRequest} from "../api/contacts.api"
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
          username: event.target.username.value,
          email: event.target.email.value,
          password: event.target.password.value,
        };
        console.log(user);
        await createUserRequest(user);
        navigate(`/`);
        
      };

  return (
    <div className="flex flex-col items-center justify-center h-96">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
        <Link
          to="/"
          className=" top-4 left-4 text-indigo-500 hover:text-indigo-600 focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
        </Link>
        <h2 className="text-2xl font-semibold mb-4 text-center">Registro</h2>

        <div className="mb-4 flex items-center">
          <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Nombre de Usuario"
            name="username"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
          <input
            type="email"
            placeholder="Correo Electrónico"
            name="email"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-6 flex items-center">
          <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-300">
          Registrarse
        </button>
      </form>
    </div>
  );
}
