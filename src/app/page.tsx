type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: string;
};



function Button(props: ButtonProps) {
  const {text, subtitle, color} = props;

  return (
    <button type="button">
      {text}
      <br />
      {subtitle}
      <br />
      {color}
    </button>
  )
}


const page = () => {
  return (
    <div>
      <Button text="hello word" subtitle="buttom"  color="#00ffff"/ >
    </div>
  )
}

export default page