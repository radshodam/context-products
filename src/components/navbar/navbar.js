import React from "react";

function Navbar(props) {
  return (
    <div>
      <h1>products list</h1>
      <p className={"red"}>{props.totalItem}</p>
    </div>
  );
}

export default Navbar;
