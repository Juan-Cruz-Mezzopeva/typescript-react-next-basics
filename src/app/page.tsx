  "use client"


  type ButtonProps = {
    title: string
  };

 
  function Button({title = "Text Here!!"}: ButtonProps) {
    return (
    <button> {title }</button>
    )
  }

  function Page() {


    return (
      <div>
        <Button 
        />
      </div>
    )
  }

export default Page