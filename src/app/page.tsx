  "use client"


  // type ButtonProps = {
  //   title?: string
  // };

  
  const botonX: ButtonProps = {
    color: { color: "blue"},
    title: "",
    count: 0,  
  }

  type Animal = {
    nombre: string;
  };
  
  // Esto daría error:
  // type Animal = {
  //   edad: number;
  // };
 
 
  type ResultadoOperacion = number | "error";

  function dividir(a: number, b: number): ResultadoOperacion {
    if (b === 0) {
      return "error";
    }
    return a / b;
  }

  type Coordenadas = [number, number];

  const ubicacion: Coordenadas = [10, 20];


  console.log(botonX)
  console.log(dividir(12,0))
  console.log(ubicacion)
  

  interface Color {
    color: "red" | "blue" | "green";
  }
 interface ButtonProps {
  count?: number
 }

  interface ButtonProps {
    title?: string
    color: Color
  }

  function Button({title, color}: ButtonProps) {
    return (
    <button style={{backgroundColor: color.color}}> {title }</button>
    )
  }

  function Page() {


    return (
      <div>
        <Button title="i'm Here" color={{color: "green"}}/>
      </div>
    )
  }

export default Page