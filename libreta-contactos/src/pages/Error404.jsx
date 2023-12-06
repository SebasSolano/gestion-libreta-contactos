import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-red-300 to-pink-500">
    <div className="text-center">
      <h1 className="text-9xl text-white font-bold mb-4">404</h1>
      <p className="text-white text-3xl font-semibold mb-8">Página no encontrada</p>
      <Link to="/main" className="text-white bg-indigo-500 hover:bg-indigo-600 py-2 px-6 rounded-md text-xl font-semibold">Volver al inicio</Link>
    </div>
  </div>
  )
}
