import React, { useEffect, useState } from "react";
import recibDatosResumen from "../funciones/recibDatosResumen";
import '../hojas-de-estilo/componente-resumen.css'

function ComponenteResumen() {
  const [data, setData] = useState(""); // Inicializa data como una cadena vacía

  useEffect(() => {
    recibDatosResumen(setData);
  }, []);

  return (
    <>
      <h2 className='titulo-inicial'>Predicción del tiempo en Madrid</h2>
      {data ? (
        <div>
          <p className="resumen">{data}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
}

export default ComponenteResumen;
