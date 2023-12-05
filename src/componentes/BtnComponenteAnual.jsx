import React from "react";
import { useState } from "react";
import ComponenteAnual from "./ComponenteAnual";

function BtnComponenteAnual() {
  const [on, setOn] = useState(false);
  const handleClick = () => {
    setOn(!on);
  };

  return (
    <div>
    <button onClick={handleClick}>{on ? "Cerrar" : "Datos del año 2022"}</button>
  {
    on && <ComponenteAnual />
  }
  </div>
  );
}

export default BtnComponenteAnual;
