import React, { useState } from "react";
function ArrayHook() {
  const [itemaray, setItemaray] = useState([]);
  const handleClick = () => {
    setItemaray([
      ...itemaray,
      {
        id: itemaray.length,
        number: Math.floor(Math.random() * 10),
      },
    ]);
    // const numbs = {id: itemaray.length,number: Math.floor(Math.random() * 10),
  };

  return (
    <div>
      {itemaray.map((n) => (
        <h1 key={n.id}>{n.number}</h1>
      ))}
      <button onClick={handleClick}>add</button>
    </div>
  );
}

export default ArrayHook;
