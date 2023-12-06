import "./App.css";
import { Route, Routes } from "react-router-dom";

import ViewContact from "./pages/viewContact";
import Error404 from "./pages/Error404";
import EditPage from "./pages/EditPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";



function App() {

  
  return (
  <>
    
        <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/main" element={<ViewContact/>} />
        <Route path="/edit/:id" element={<EditPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="*" element={<Error404/>}/>
      </Routes>
      
    
  </>);
}

export default App;
