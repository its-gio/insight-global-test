import React, { Component } from "react";
import "./App.css";
import Hour from "./components/Hour";
import Min from "./components/Min";
import Sec from "./components/Sec";

class App extends Component {
  constructor() {
    super();

    this.state = {
      time: new Date(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
      secondsDegrees: (new Date().getHours().seconds / 60) * 360 + 90,
      minutesDegrees: (new Date().getHours().minutes / 60) * 360 + 90,
      hoursDegrees: (new Date().getHours().hours / 12) * 360 + 90
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          time: new Date(),
          hours: this.state.time.getHours(),
          minutes: this.state.time.getMinutes(),
          seconds: this.state.time.getSeconds(),
          secondsDegrees: (this.state.seconds / 60) * 360 + 90,
          minutesDegrees: (this.state.minutes / 60) * 360 + 90,
          hoursDegrees: (this.state.hours / 12) * 360 + 90
        }),
      1000
    );
  }

  componentWillMount() {
    clearInterval(this.interval, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock-face">
          <Hour hoursDeg={this.state.hoursDegrees} hours={this.state.hours} />
          <Min
            minutesDeg={this.state.minutesDegrees}
            minutes={this.props.minutes}
          />
          <Sec
            secondsDeg={this.state.secondsDegrees}
            seconds={this.state.seconds}
          />
        </div>
      </div>
    );
  }
}

export default App;
