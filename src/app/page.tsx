type ButtonProps = {
  userAges: Record<"Pepito"|"Juanito"|"Fulanito", number>
};

function Button({}: ButtonProps) {
  return (
  <button>
    test
  </button>
  )
}

function Page() {
  return (
    <div>
      <Button  
        userAges={
          {
            Pepito: 10,
            Juanito: 30,
            Fulanito: 45
          }
        }
      / >    
    </div>
  )
}

export default Page