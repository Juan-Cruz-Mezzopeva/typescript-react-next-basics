  "use client"

import { ComponentPropsWithoutRef } from "react";


  type ButtonProps = ComponentPropsWithoutRef<"button"> ;

  //con ComponenProps (que puede ser simple con o sin ref) podemos pasar 
  // todos los props que vienen a partir de etiquetas sin la necesidad de escribirlas todas, por ejemplo ese onClick
  // tener en cuenta que hay que escribir de que etiqueta quiero los atributos como props
  
  function Button(props: ButtonProps) {
    return (
      <button {...props}>
        {props.children || "Haz clic aquí"}
      </button>
    );
  }
  
  function Page() {
    const handleClick = () => {
      alert("¡Botón clickeado!");
    };
  
    return (
      <div>
        <Button onClick={handleClick} disabled={false}>
          Mi Botón
        </Button>
      </div>
    );
  }
  
  export default Page;