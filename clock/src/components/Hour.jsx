import React, { Component } from "react";

class Hour extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="hand hour-hand">{this.props.hour}</div>
      </React.Fragment>
    );
  }
}

export default Hour;
