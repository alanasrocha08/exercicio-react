import type { CSSProperties } from "react";

const estilosRodape: CSSProperties = {
  backgroundColor: "#222",
  textAlign: "center",
  padding: "1rem",
};

export default function Rodape() {
  return (
    <footer style={estilosRodape}>
      <h2 style={{ color: "white", fontWeight: "bold" }}>
        Pequeno site criado com React
      </h2>
      <p style={{ color: "grey", fontWeight: "bold" }}>
        Desenvolvido por <b>Alana</b> &copy; 2025
      </p>
    </footer>
  );
}
