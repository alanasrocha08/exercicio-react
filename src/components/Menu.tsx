import { Link } from "react-router-dom";
import "../global.css";
import Home from "./Cabecalho";
import Gisele from "./Artigos/Giselle";
import DomQuixote from "./Artigos/DomQuixote";
import Cisnes from "./Artigos/Cisnes";

export default function Menu() {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/Giselle">Giselle </Link>
      <Link to="/DomQuixote">DomQuixote </Link>
      <Link to="/Cisnes">Lago dos Cisnes </Link>
    </nav>
  );
}
