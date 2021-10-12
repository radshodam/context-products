import React from "react";

function Item({ price, name, quantity, onDelete, children, onIncreament,onDecreament }) {
  return (
    <div>
      <p>product name:{name}</p>
      <p>product price :{price}</p>
      <p>quantity:{quantity}</p>
      <span>{children}</span>

      <button onClick={onIncreament}>+</button>
      <button className={`${"bg-green"} ${quantity===1?"red":null}`} onClick={onDecreament}>{quantity===1?"حذف":"-"}</button>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}

export default Item;
