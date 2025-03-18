"use client"

type ButtonProps = {
  onClick:  ( ) => void;
};

function Button({onClick}: ButtonProps) {
  return (
  <button onClick={onClick }>
    test
  </button>
  )
}

function Page() {
  return (
    <div>
      <Button 
      onClick={() => {
        alert("Works!!")
      }} / >    
    </div>
  )
}

export default Page