import React, { Component } from "react";

class Hour extends Component {
  render() {
    let style = {
      transform: `rotate(${this.props.hours}deg)`
    };

    return <div style={style} className="hand hour-hand" />;
  }
}

export default Hour;
