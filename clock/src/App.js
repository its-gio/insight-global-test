import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="clock">
        <div class="clock-face">
          <div class="hand hour-hand" />
          <div class="hand min-hand" />
          <div class="hand second-hand" />
        </div>
      </div>
    );
  }
}

export default App;
