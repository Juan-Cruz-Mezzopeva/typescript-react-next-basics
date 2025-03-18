  "use client"

import { Dispatch, useState, SetStateAction } from "react";

  type ButtonProps = {
    setCount: Dispatch<SetStateAction<number>>
  };

 
  function Button({setCount}: ButtonProps) {
    return (
    <button onClick={() => setCount((contador) => contador + 1)}> Incrementar </button>
    )
  }

//el boton espera el evento setCount
// se ejecuta el evento setCount en onClick el cual recibe el evento 

  function Page() {

    const [count, setCount] = useState(0)

    return (
      <div>
        <h1>{count}</h1>
        <Button 
          setCount={setCount}
        />
      </div>
    )
  }

export default Page