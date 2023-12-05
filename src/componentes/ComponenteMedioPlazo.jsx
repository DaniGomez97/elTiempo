import React, { useEffect, useState } from "react";
import recibDatosMedioPlazo from "../funciones/recibDatosMedioPlazo";

function ComponenteMedioPlazo() {
  const [data, setData] = useState(""); // Inicializa data como una cadena vacía

  useEffect(() => {
    recibDatosMedioPlazo(setData);
  }, []);

  // Dividir el texto en párrafos
  const parrafos = data.split("\n");

  // Filtrar el párrafo que contiene "DÍA 13 (VIERNES):"
  const parrafoDeseado = parrafos.find((parrafo) =>
    parrafo.includes("DÍA 13 (VIERNES):")
  );

  return (
    <>
      <h1>Predicción del tiempo en Madrid</h1>
      {data ? (
        <div>
          <p>{data.substring(203, 709)}</p>
          <p>{data.substring(708, 1199)}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
}

export default ComponenteMedioPlazo;
