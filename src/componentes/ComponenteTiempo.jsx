import { useEffect, useState } from "react";
import recibDatosTiempo from "../funciones/recibDatosTiempo";
import "../hojas-de-estilo/componenteTiempo.css";
import {
  WiDaySunny,
  WiCloudy,
  WiDayCloudy,
  WiDayRainMix,
} from "react-icons/wi";

function ComponenteTiempo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    recibDatosTiempo(setData);
  }, []);

  const descripcion = {
    Despejado: <WiDaySunny className="icono" />,
    "Poco nuboso": <WiDayCloudy className="icono" />,
    Nuboso: <WiCloudy className="icono" />,
    Cubierto: <WiCloudy className="icono" />,
    "Nubes altas": <WiCloudy className="icono" />,
    Bruma: <WiCloudy className="icono" />,
    "Cubierto con lluvia escasa": <WiDayRainMix className="icono" />,
    "Cubierto con lluvia": <WiDayRainMix className="icono" />,
    "Muy nuboso": <WiCloudy className="icono" />,
    "Intervalos nubosos con lluvia escasa": <WiDayRainMix className="icono" />,
    "Muy nuboso con lluvia escasa": <WiDayRainMix className="icono" />,
    "Nuboso con lluvia escasa": <WiDayRainMix className="icono" />,
  };

  return (
    <>
      {data != null ? (
        data.map((date) => (
          <div key={date.id}>
            {date.prediccion.dia.map((dia, diaIndex) => (
              <div className="bloque" key={diaIndex}>
                <h3 className="fecha">{dia.fecha.substring(0, 10)}</h3>
                <div className="contenido">
                  {dia.estadoCielo.map((cielo, cieloIndex) => (
                    <p key={cieloIndex}>
                      {cielo.periodo}h<br></br>
                      {dia.temperatura && dia.temperatura[cieloIndex] ? (
                        <span>
                          {dia.temperatura[cieloIndex].value}ºC
                          <br></br>
                        </span>
                      ) : (
                        <span>
                          No disponible <br />
                        </span>
                      )}
                      {descripcion[cielo.descripcion]}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <br></br>
          </div>
        ))
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
}

export default ComponenteTiempo;
