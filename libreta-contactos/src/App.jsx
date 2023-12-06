import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ViewContact from "./pages/viewContact";
import Error404 from "./pages/Error404";
import EditPage from "./pages/EditPage";



function App() {
  return (
  <>
    <Navbar />
        <Routes>
        <Route path="/" element={<ViewContact/>} />
        <Route path="/edit/:id" element={<EditPage/>} />
        <Route path="*" element={<Error404/>}/>
      </Routes>
      
    
  </>);
}

export default App;
