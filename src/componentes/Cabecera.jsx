import React, { useState } from "react";
import Button from "@mui/material/Button";
import Componente from "./Componente";
import ComponenteAnual from "./ComponenteAnual";
import ComponenteAnual2023 from "./ComponenteAnual2023";
import "../hojas-de-estilo/cabecera.css";

function Cabecera() {
  const [showComponente, setShowComponente] = useState(false);
  const [showComponenteAnual, setShowComponenteAnual] = useState(false);
  const [showComponenteAnual2023, setShowComponenteAnual2023] = useState(false);

  const handleClickComponente = () => {
    setShowComponente(!showComponente);
    setShowComponenteAnual(false);
    setShowComponenteAnual2023(false);
  };

  const handleClickComponenteAnual = () => {
    setShowComponenteAnual(!showComponenteAnual);
    setShowComponente(false);
    setShowComponenteAnual2023(false);
  };

  const handleClickComponenteAnual2023 = () => {
    setShowComponenteAnual2023(!showComponenteAnual2023);
    setShowComponente(false);
    setShowComponenteAnual(false);
  };

  return (
    <div className="header">
      <div className="button-container">
        <Button onClick={handleClickComponente}>
          {showComponente ? "Temperatura actual" : "Temperatura actual"}
        </Button>
        {showComponente && <Componente />}
      </div>

      <div className="button-container">
        <Button onClick={handleClickComponenteAnual}>
          {showComponenteAnual ? "Datos del 2022" : "Datos del 2022"}
        </Button>
        {showComponenteAnual && <ComponenteAnual />}
      </div>

      <div className="button-container">
        <Button onClick={handleClickComponenteAnual2023}>
          {showComponenteAnual2023 ? "Datos del 2023" : "Datos del 2023"}
        </Button>
        {showComponenteAnual2023 && <ComponenteAnual2023 />}
      </div>
    </div>
  );
}

export default Cabecera;
