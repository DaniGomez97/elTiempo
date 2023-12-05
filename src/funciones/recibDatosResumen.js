import axios from "axios";

const recibDatosResumen = async (state) => {
  try {
    // Realiza la primera solicitud para obtener la URL de los datos
    const primeraRespuesta = await axios.get('https://opendata.aemet.es/opendata/api/prediccion/ccaa/manana/mad/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW55Z3g5N0BnbWFpbC5jb20iLCJqdGkiOiJhNjAxZmIyMS0xMGRjLTRlZTItYjgwMS01ZjhhNjBjMDQ0NjkiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTY5Njk0Njg0MiwidXNlcklkIjoiYTYwMWZiMjEtMTBkYy00ZWUyLWI4MDEtNWY4YTYwYzA0NDY5Iiwicm9sZSI6IiJ9.P4gq15QRLKxU5gjDEIuuGglxz973ewNqbmjrDPVfOqM');
    const urlDatos = primeraRespuesta.data.datos;

    // Realiza una segunda solicitud a la URL de los datos reales
    const segundaRespuesta = await axios.get(urlDatos);
    state(segundaRespuesta.data)

  } catch (error) {
    console.error(error);
  }
};

export default recibDatosResumen;
