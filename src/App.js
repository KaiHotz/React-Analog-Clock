import React, { Component } from 'react';
import { ClockBase, Center, SecondHand, MinuteHand, HourHand } from './components'

class App extends Component {

  state = {
    seconds: 0,
    minutes: 0,
    hours: 0
  }

  componentDidMount() {
    setInterval(() => {
      let date = new Date();
      this.setState(() => ({
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours() % 12 || 12
      }))
    }, 1000)
  }

  render() {
    const {
      seconds,
      minutes,
      hours,
    } = this.state;

    return (
      <ClockBase>
        <Center />
        <SecondHand fraction={seconds} />
        <MinuteHand fraction={minutes} />
        <HourHand fraction={hours} />
      </ClockBase>
    )
  }
}

export default App;
