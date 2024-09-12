import Navbar from "./componentes/Navbar";
import Services from "./componentes/Services";
import Welcome from "./componentes/Welcome";

function App() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      {/* Seccion Bienvenida component */}
      <Welcome />
      {/* Services component */}
      <Services/>
    </>
  );
}

export default App;