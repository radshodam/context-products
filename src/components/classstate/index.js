import React, { Component } from "react";

export class index extends Component {
  state = {
    counter: 1,
  };
  pluse = () => {
    this.setState((pervState) => {
      return { counter: pervState.counter + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.pluse}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}

export default index;
