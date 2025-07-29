import Cabecalho from "./components/Cabecalho";
import Home from "./components/Pages/Home";
import Rodape from "./components/Rodape";
import "../src/global.css";
import Giselle from "./components/Pages/Giselle";
import DomQuixote from "./components/Pages/DomQuixote";
import Cisnes from "./components/Pages/Cisnes";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Container from "./components/Container";

export default function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Giselle" element={<Giselle />} />
          <Route path="/DomQuixote" element={<DomQuixote />} />
          <Route path="/Cisnes" element={<Cisnes />} />
        </Routes>
      </Container>

      <Rodape />
    </>
  );
}
