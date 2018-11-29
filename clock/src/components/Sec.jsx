import React, { Component } from "react";

class Sec extends Component {
  render() {
    console.log(this.props.seconds);

    let style = {
      transform: `rotate(${this.props.seconds}deg)`
    };
    return <div style={style} className="hand sec-hand" />;
  }
}

export default Sec;
