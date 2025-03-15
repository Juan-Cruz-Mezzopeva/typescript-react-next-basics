type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: string;
};


// 1RA FORMA DE ESCRIBIR FUNCIONES PASANDO PROPS USANDO TIPOS DE DATOS CON TYPE 



// function Button(props: ButtonProps) {
//   const {text, subtitle, color} = props;

//   return (
//     <button type="button">
//       {text}
//       <br />
//       {subtitle}
//       <br />
//       {color}
//     </button>
//   )
// }

// 2DA FORMA DE ESCRIBIR FUNCIONES PASANDO PROPS USANDO TIPOS DE DATOS CON TYPE 

// const Button = ({text}:ButtonProps) => {
//   return <button>{text}</button>
// }

// 3RA FORMA DE ESCRIBIR FUNCIONES PASANDO PROPS USANDO TIPOS DE DATOS CON TYPE 
// React.FC es "React funcional component" es 
const Button: React.FC<ButtonProps> = ({text, color, subtitle}) => {
  return <button>{text}</button>
}


const page = () => {
  return (
    <div>
      <Button text="hello word" subtitle="buttom"  color="#00ffff"/ >
    </div>
  )
}

export default page