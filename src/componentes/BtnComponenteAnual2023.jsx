import React from "react";
import { useState } from "react";
import ComponenteAnual2023 from "./ComponenteAnual2023";

function BtnComponenteAnual2023() {
  const [on, setOn] = useState(false);
  const handleClick = () => {
    setOn(!on);
  };

  return (
    <div>
    <button onClick={handleClick}>{on ? "Cerrar" : "Datos del año 2023"}</button>
  {
    on && <ComponenteAnual2023 />
  }
  </div>
  );
}

export default BtnComponenteAnual2023;
