import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
  <>
    <Navbar/>
        <Routes>
        <Route path="/" />
        <Route path="/delete"  />
        <Route path="*"  />
      </Routes>
  </>);
}

export default App;
