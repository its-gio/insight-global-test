import React, { Component } from "react";

class Hour extends Component {
  render() {
    let style;

    if (this.props.hours == 0) {
      style = {
        transition: `none`
      };
    } else {
      style = {
        transform: `rotate(${this.props.hoursDeg}deg)`
      };
    }

    return <div style={style} className="hand hour-hand" />;
  }
}

export default Hour;
