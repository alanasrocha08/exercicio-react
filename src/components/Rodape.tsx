import type { CSSProperties } from "react";

const estilosRodape: CSSProperties = {
  backgroundColor: "#222",
  color: "#fffff",
  textAlign: "center",
  padding: "1rem",
};

export default function Rodape() {
  return (
    <footer style={estilosRodape}>
      <h2>Pequeno site criado com React</h2>
      <p>
        Desenvolvido por <b>Alana</b> &copy; 2025
      </p>
    </footer>
  );
}
