import React from "react";
import { Link } from "react-router";

const Registro: React.FC = () => {
  return (
    <div>
      <h1>Pantalla de registro</h1>
      <p>Esta es la página de registro.</p>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
};

export default Registro;
