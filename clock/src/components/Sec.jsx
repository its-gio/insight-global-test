import React, { Component } from "react";

class Sec extends Component {
  render() {
    let style;

    if (this.props.seconds == 0) {
      style = {
        transition: `none`
      };
    } else {
      style = {
        transform: `rotate(${this.props.secondsDeg}deg)`
      };
    }

    return <div style={style} className="hand sec-hand" />;
  }
}

export default Sec;
