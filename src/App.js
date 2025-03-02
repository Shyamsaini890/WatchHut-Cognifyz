import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Login from "./components/Login";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import { ReactDOM } from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
