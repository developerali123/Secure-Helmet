import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
    <Routes>
      <Route path="/Secure-Helmet" element={<Home />} />
      <Route path="/Secure-Helmet/contact" element={<Contact />} />
    </Routes>
    </>
  );
}
export default App;
