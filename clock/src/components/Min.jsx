import React, { Component } from "react";

class Min extends Component {
  render() {
    let style;

    if (this.props.minutes === 0) {
      style = {
        transition: `none`
      };
    } else {
      style = {
        transform: `rotate(${this.props.minutesDeg}deg)`
      };
    }

    return <div style={style} className="hand min-hand" />;
  }
}

export default Min;
