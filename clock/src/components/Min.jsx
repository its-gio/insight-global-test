import React, { Component } from "react";

class Min extends Component {
  render() {
    let style = {
      transform: `rotate(${this.props.minutes}deg)`
    };

    return <div style={style} className="hand min-hand" />;
  }
}

export default Min;
