import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Registro from "./pages/Registro";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
};

export default App;
