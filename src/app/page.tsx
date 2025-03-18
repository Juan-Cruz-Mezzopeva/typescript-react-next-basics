type ButtonProps = {
  padding: ["top", "right", "bottom", "left"]
};

function Button({}: ButtonProps) {
  return (<button type="button" >test</button>
  )
}

function Page() {
  return (
    <div>
      <Button padding={["top", "right", "bottom", "left"]}/ >    
    </div>
  )
}

export default Page