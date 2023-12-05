import { useEffect, useState } from "react";
import recibDatos from "../funciones/recibDatos";
import "../hojas-de-estilo/componente.css";

function Componente() {
  const [data, setData] = useState(null);
  useEffect(() => {
    recibDatos(setData);
  }, []);

  return (
    <div className="contenedor">
      <h1>Widgets</h1>
      {data != null ? (
        /* data.slice(1,2) lo que hace es seleccionar el segundo array (Ya que 0 es el primero que es una hora antes) */
        data.slice(1, 2).map((date) => (
          <div className="componente-web" key={date.dmax}>
            <h2 className="tituloComp">{date.ubi}</h2>
            <h3 className="subtituloComp"> Temperatura: {date.ta}°C</h3>
            <p>Fecha: {date.fint.substring(0, 10)}</p>
            <p>Hora: {date.fint.substring(11, 16)}h</p>
            <p>Posibilidad de precipitación: {date.prec}mm.</p>
            <ul>
              <li>Máximas: {date.tamax}°C</li>
              <li>Minimas: {date.tamin}°C</li>
            </ul>
            <p>Humedad: {date.hr}%</p>
          </div>
        ))
      ) : (
        <p>Cargando datos...</p>
      )}

      {data != null ? (
        /* data.slice(1: Inicio , 2: Final, el exlcuido) lo que hace es seleccionar el segundo array (Ya que 0 es el primero que es una hora antes) */
        data.slice(1, 2).map((date) => (
          <div className="componente-movil" key={date.dmax}>
            <h4 className="titulo-movil">{date.ubi.substring(0, 6)}</h4>
            <h2 className="temp-movil">{date.ta}°C</h2>
            <h5 className="maxmin-movil">
              Máx. {date.tamax}° Mín. {date.tamin}°
            </h5>
            <p>% Lluvias: {date.prec}mm</p>
            <p>Humedad: {date.hr}%</p>
          </div>
        ))
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default Componente;
