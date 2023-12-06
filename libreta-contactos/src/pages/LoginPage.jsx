import { Link } from "react-router-dom"; // Si estás usando React Router
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import {loginUserRequest} from "../api/contacts.api"
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
          email: event.target.email.value,
          password: event.target.password.value,
        };
        console.log(user);
        await loginUserRequest(user);
        navigate(`/main`);
        
      };

  return (
    <div className="flex flex-col items-center justify-center h-96">
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
        
      <h2 className="text-2xl font-semibold mb-4 text-center">Inicio de Sesión</h2>
      <div className="mb-4 flex items-center">
        <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-6 flex items-center">
        <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <button type="submit" className="w-full mb-5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-300">
        Iniciar Sesión
      </button>

      <Link
  to="/register"
  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 flex items-center justify-center"
>
  Registrarse
</Link>
    </form>
  </div>
  )
}
