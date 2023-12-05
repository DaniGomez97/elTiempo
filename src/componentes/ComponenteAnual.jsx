import { useEffect, useState } from "react";
import recibDatosMes from "../funciones/recibDatosMes";

function ComponenteAnual() {
  const [data, setData] = useState([]);
  useEffect(() => {
    recibDatosMes(setData);
  }, []);

  const meses = {
    "2022-1": "Enero",
    "2022-2": "Febrero",
    "2022-3": "Marzo",
    "2022-4": "Abril",
    "2022-5": "Mayo",
    "2022-6": "Junio",
    "2022-7": "Julio",
    "2022-8": "Agosto",
    "2022-9": "Septiembre",
    "2022-10": "Octubre",
    "2022-11": "Noviembre",
    "2022-12": "Diciembre",
  };

  return (
    <>
      <h1>Datos del año 2022</h1>
      {data != null ? (
        data.map((date) => (
          <div key={date.dmax}>
            <h3>{meses[date.fecha]}</h3>

            <h4>Temperatura media del mes: {date.tm_mes}°C</h4>
            <h4>Temperatura máxima media del mes: {date.tm_max}°C</h4>
            <p>Máximas:{date.ta_max}°C</p>
            <p>Minimas:{date.tm_min}°C</p>

            <p>Media de precipitaciones: {date.q_med}mm.</p>
            <p>Precipitaciones acumuladas en el mes: {date.p_mes}mm.</p>
            <p>Cantidad mínima de precipitación en el mes: {date.q_min}mm.</p>
            <br></br>
          </div>
        ))
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
}

export default ComponenteAnual;
