  "use client"

import { JSX, ReactNode } from "react";

  type ButtonProps = {
    children: JSX.Element | JSX.Element[] | string | React.ReactNode;
  };

  // ReactNode especifica casi cualquier tipo de dato ya sea un JSX o un numero string, etc
  // 

  function Button({children}: ButtonProps) {
    return (
    <button>{children}</button>
    )
  }

  function Page() {
    return (
      <div>
        <Button>
          <div>div 1</div>
          <div>div 2</div>
          <div>div 3</div>
        </Button>
      </div>
    )
  }

export default Page