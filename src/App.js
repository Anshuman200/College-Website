import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
// import Service from "./Components/Service";
import Contact from "../src/Contact/Contact";
import MOU from "./Reach/MOU"
import Sign from "./Sign/Sign";
import Blogs from "./Blog/Blogs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Alumni from "./Components/Alumni";
import Login from "./Login/Login"
import Placement from "./Placement/Placement";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mou" element={<MOU />} />
        <Route path="/sign" element={<Sign />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
      </Routes>
      <Footer />
      {/* <Redirect to="/" /> */}
    </>
  );
};

export default App;



