  "use client"

import { ComponentPropsWithoutRef } from "react";


  type ButtonProps = ComponentPropsWithoutRef<"button"> ;

  function Button(rest: ButtonProps) {
    return (
      <button 
       {...rest}>Button</button>
    );
  }
  
  function Page() {

    return (
      <div>
        <Button 
        style={{
          background: "black"
        }}
        onClick={() => {
          alert('hello world!!')
        }}
        disabled={false}>
        </Button>
      </div>
    );
  }
  // 
  export default Page;