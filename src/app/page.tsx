  "use client"

  type ButtonProps = {
    onClick:  (text: string) => void;
  };

  function Button({onClick}: ButtonProps) {
    return (
    <button onClick={() => {return (
      onClick("hello word")
    )}}>
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