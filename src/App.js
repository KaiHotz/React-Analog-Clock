import React, { useState } from 'react';
import { useInterval } from './hooks'
import { ClockBase, Center, SecondHand, MinuteHand, HourHand } from './components'

const App = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  useInterval(() => {
    let date = new Date();
    setSeconds(date.getSeconds())
    setMinutes(date.getMinutes())
    setHours(date.getHours() % 12 || 12)
  }, 1000)

  return(
    <ClockBase>
      <Center />
      <SecondHand fraction={seconds} />
      <MinuteHand fraction={minutes} />
      <HourHand fraction={hours} />
    </ClockBase>
  )
}

export default App;
