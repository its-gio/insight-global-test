import React, { Component } from "react";

class Sec extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="hand sec-hand">{this.props.sec}</div>
      </React.Fragment>
    );
  }
}

export default Sec;
