import React from "react";
import { useState } from "react";
import Componente from './Componente'

function BtnComponente() {
  const [on, setOn] = useState(false);
  const handleClick = () => {
    setOn(!on);
  };

  return (
    <div>
    <button onClick={handleClick}>{on ? "Cerrar" : "Temperatura ahora"}</button>
  {
    on && <Componente />
  }
  </div>
  );
}

export default BtnComponente;
