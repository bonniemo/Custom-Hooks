import { ReactNode } from "react";

type Btn = {
    children: ReactNode;
    onClick: () => void;
}

const Button = ({onClick, children}:Btn) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};

export default Button;
