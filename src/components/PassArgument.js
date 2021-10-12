import React, { Component } from "react";

class PassArgument extends Component {
  handle(id) {
    console.log(id);
  }
  handle2(id) {
    console.log(id);
  }
  render() {
    return (
      <div>
        <button onClick={this.handle.bind(this, 2)}>onclick</button>
        <button onClick={() => this.handle2(2)}>onclick</button>
      </div>
    );
  }
}

export default PassArgument;
