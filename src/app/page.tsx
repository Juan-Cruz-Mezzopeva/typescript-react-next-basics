type Color = "red" | "blue" | "green" | "yellow" | "black" | "white" | "gray";

type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: Color;
  backgruondColor?: Color ;
  sizes: 30 | 40 | 50
};


// 1RA FORMA DE ESCRIBIR FUNCIONES PASANDO PROPS USANDO TIPOS DE DATOS CON TYPE 

function Button(props: ButtonProps) {
  const {text, subtitle, color} = props;

  return (<button type="button">{text}</button>
  )
}

const page = () => {
  return (
    <div>
      <Button text="hello word" 
      backgruondColor="blue"
      color="red"
      / >

    </div>
  )
}

export default page