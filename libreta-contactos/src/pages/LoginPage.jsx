import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <form className="bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Inicio de Sesión</h2>
      <div className="mb-4 flex items-center">
        <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
        <input
          type="email"
          placeholder="Correo Electrónico"
          className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-6 flex items-center">
        <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-300">
        Iniciar Sesión
      </button>
    </form>
  </div>
  )
}
