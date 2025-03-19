  "use client"

import { ComponentPropsWithoutRef } from "react";


  type ButtonProps = ComponentPropsWithoutRef<"button"> ;

  function Button({onClick, ...rest}: ButtonProps) {
    
    const handleClick = () => {
      if(onClick) {
        alert('Cliked')
      }
    }

    return (
      <button 
      onClick={handleClick} {...rest}>
        Button        
      </button>
    );
  }
  
  function Page() {

    return (
      <div>
        <Button 
        style={{
          color: "transparent"
        }}
        onClick={() => {
          alert("hello world!!")
        }}
        disabled={true}>
          Mi Botón
        </Button>
      </div>
    );
  }
  // 
  export default Page;