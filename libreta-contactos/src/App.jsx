import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ViewContact from "./pages/viewContact";
import Error404 from "./pages/Error404";



function App() {
  return (
  <>
    <Navbar />
        <Routes>
        <Route path="/" element={<ViewContact/>} />
        <Route path="*" element={<Error404/>}/>
      </Routes>
      
    
  </>);
}

export default App;
