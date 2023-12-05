import React from "react";
import { useState } from "react";
import ComponenteMedioPlazo from "./ComponenteMedioPlazo";

function BtnComponenteMedioPlazo() {
  const [on, setOn] = useState(false);
  const handleClick = () => {
    setOn(!on);
  };

  return (
    <div>
    <button onClick={handleClick}>{on ? "Cerrar" : "Prediccion del tiempo"}</button>
  {
    on && <ComponenteMedioPlazo />
  }
  </div>
  );
}

export default BtnComponenteMedioPlazo;
