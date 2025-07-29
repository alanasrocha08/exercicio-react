import type { ReactNode, CSSProperties } from "react";

const container: CSSProperties = {
  display: "flex",
  gap: "2rem",
  padding: "2rem",
  maxWidth: "1000px",
  margin: "0 auto",
};

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <main style={container}>{children}</main>;
}
