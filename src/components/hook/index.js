import React, { useState } from "react";
function Index() {
  const [counter, setCounter] = useState(1);
  const handleClick = () => {
    setCounter((pervState) => {
      return pervState + 1;
    });
  };
  const handleClickNativ = () => {
    setCounter((pervState) => pervState - 5);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickNativ}> -</button>
    </div>
  );
}

export default Index;
