import "./App.css";
import Especialidades from "./components/Especialidades";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Servicios from "./components/Servicios";
import Paquetes from "./components/Paquetes";
import PizzaInfo from "./components/PizzaInfo";

function App() {
  return (
    <div className="contenedor">
      <Header />
      <Servicios />
      <Routes>
        <Route path="/especialidades" element={<Especialidades />} />
        {/* <Route path="/" element={<Paquetes />} /> */}
        <Route path="/mis-pedidos" element={<PizzaInfo />} />
      </Routes>
    </div>
  );
}

export default App;
