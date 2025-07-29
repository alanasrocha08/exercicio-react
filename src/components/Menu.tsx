import { Link } from "react-router-dom";
import "../global.css";

export default function Menu() {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/Giselle">Giselle </Link>
      <Link to="/DomQuixote">Dom Quixote </Link>
      <Link to="/Cisnes">O Lago dos Cisnes </Link>
    </nav>
  );
}
