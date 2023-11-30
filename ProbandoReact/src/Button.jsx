import React, { useState } from "react";

function MyButton() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {

    setContador(contador + 1);
  };

  return <button onClick={handleClick}>Contador {contador}</button>;
}

export default MyButton;
