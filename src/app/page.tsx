type ButtonProps = {
  style: React.CSSProperties;
};

function Button({style}: ButtonProps) {
  return (
  <button 
    style={style}
  >
    test
  </button>
  )
}

function Page() {
  return (
    <div>
      <Button style={{
        backgroundColor: "gold",
        color: "black",
        fontSize: "30px",
        padding: "100px"
      }}
      
      / >    
    </div>
  )
}

export default Page