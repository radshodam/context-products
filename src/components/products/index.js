import React, { Component } from "react";
import Item from "./item";

class index extends Component {


  render() {
    if (this.props.products.length === 0) {
      return <h1>سبد شما خالی است</h1>;
    }
    return (
      <div>
        {this.props.products.map((n) => {
          return (
            <Item
              key={n.id}
              name={n.name}
              price={n.price}
              quantity={n.quantity}
              onDelete={() => this.props.onDelete(n.id)}
              onIncreament={()=> this.props.onIncreament(n.id)}
              onDecreament={() => this.props.onDecreament(n.id)}
            />
          );
        })}
      </div>
    );
  }
}
export default index;
