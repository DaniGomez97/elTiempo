import ComponenteResumen from "./componentes/ComponenteResumen";
import ComponenteTiempo from "./componentes/ComponenteTiempo";
import Cabecera from "./componentes/Cabecera";
import Componente from "./componentes/Componente";

function App() {
  return (
    <div className="App">
      <ComponenteResumen />
      <ComponenteTiempo />
      <Componente />
    </div>
  );
}

export default App;
