import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import index from "./components/products/index";
import Products from "./components/products/index";
// import Hook from "./components/hook/index";
// import ClassState from "./components/classstate/index";
// import UpdateInput from "./components/updateInput";
// import ArrayHooks from "./components/hook/arrayHook";
// import PassArgument from "./components/PassArgument";
import "./style.css";
const App = () => {
  const [products, setProducts] = useState([
    { name: "react", price: "99$", id: 1, quantity: 25 },
    { name: "next", price: "109$", id: 2, quantity: 2 },
    { name: "js", price: "105$", id: 3, quantity: 5 },
  ]);
  const removeHandler = (id) => {
    console.log(id);
    const delFilter = products.filter((m) => {
      return m.id !== id;
    });
    setProducts(delFilter);
  };
  const handleIncreament = (id) => {
    // 1.id => ok
    //2.index =>find
    const find = products.findIndex((m) => m.id === id);
    console.log(find);
    //3.clone update qty
    const product = { ...products[find] };
    product.quantity++;
    //4.update products
    const updateProducts = [...products];
    updateProducts[find] = product;
    console.log(product);
    setProducts(updateProducts);
  };
  //
  const handleonDecreament = (id) => {
    // 1.id => find
    // 2.find
    const find = products.findIndex((m) => m.id === id);
    // 3.clone
    const product = { ...products[find] };
    // 4.update products
    if (product.quantity === 1) {
      const filterProducts = products.filter((p) => {
        return p.id !== id;
      });
      setProducts(filterProducts);
    } else {
      const updateProducts = [...products];
      product.quantity--;
      updateProducts[find] = product;
      setProducts(updateProducts);
    }
  };

  return (
    <div>
      <Navbar totalItem={products.filter((n) => n.quantity > 0).length} />
      <Products
        products={products}
        onDelete={removeHandler}
        onIncreament={handleIncreament}
        onDecreament={handleonDecreament}
      />
      {/* <Hook />
      <ClassState />
      <UpdateInput />
      <ArrayHooks/>
      <PassArgument/> */}
    </div>
  );
};

export default App;
