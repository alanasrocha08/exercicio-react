import Cabecalho from "./components/Cabecalho";
import Home from "./components/Home";
import Rodape from "./components/Rodape";
import "../src/global.css";
import Giselle from "./components/Artigos/Giselle";
import DomQuixote from "./components/Artigos/DomQuixote";
import Cisnes from "./components/Artigos/Cisnes";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";

export default function App() {
  return (
    <>
      <Cabecalho />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Giselle" element={<Giselle />} />
        <Route path="/DomQuixote" element={<DomQuixote />} />
        <Route path="/Cisnes" element={<Cisnes />} />
      </Routes>

      <Rodape />
    </>
  );
}
