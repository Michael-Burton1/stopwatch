import React from "react";
import './App.css';

function App() {

  const [time, setTime] = React.useState(0)
  const [timerOn, setTimerOn] = React.useState(false)

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10) //makes time equal to previouse time and increas the interval every 10 milliseconds (accounts for 100th of a sec). while timer is on
      }, 10)
    } else {
      clearInterval(interval)// CLearInterval() = javascript method
    }

    // Clean-up function (not needed, but better code ) will stop the interval when the user leaves the page to "stop memory leaks"
    return () => clearInterval(interval)

  }, [timerOn])
  return (
    <div className="App">
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={() => setTimerOn(true)} >Start</button>
        <button onClick={() => setTimerOn(false)}  >Stop</button>
        <button onClick={() => setTimerOn(true)} >Resume</button>
        <button onClick={() => setTime(0)} >Reset</button>
      </div>
    </div>
  );
}

export default App;
