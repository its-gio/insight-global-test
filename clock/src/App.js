import React, { Component } from "react";
import "./App.css";
import Hour from "./components/Hour";
import Min from "./components/Min";
import Sec from "./components/Sec";

class App extends Component {
  render() {
    return (
      <div className="clock">
        <div className="clock-face">
          <Hour />
          <Min />
          <Sec />
        </div>
      </div>
    );
  }
}

export default App;
