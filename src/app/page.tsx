"use client";

import { useState } from "react";

interface ButtonProps {
  texto: string;
  color: "red" | "blue" | "green";
  deshabilitado?: boolean;
}

type BotonPersonalizadoProps = Partial<Omit<ButtonProps, "color">> & {
  color?: string;
};

function BotonPersonalizado({ texto, color = "gray", deshabilitado = false }: BotonPersonalizadoProps) {
  const [clics, setClics] = useState(0);

  const handleClick = () => {
    if (!deshabilitado) {
      setClics(clics + 1);
    }
  };

  return (
    <button
      style={{ backgroundColor: color, padding: "10px", color: "white", border: "none" }}
      onClick={handleClick}
      disabled={deshabilitado}
    >
      {texto} (Clics: {clics})
    </button>
  );
}

function Page() {
  return (
    <div>
      <BotonPersonalizado texto="Clic aquí" color="blue" />
      <BotonPersonalizado texto="Deshabilitado" deshabilitado={true} />
      <BotonPersonalizado texto="Personalizado" color="purple" />
    </div>
  );
}

export default Page;