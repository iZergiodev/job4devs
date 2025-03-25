import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  );
};

export default App;
