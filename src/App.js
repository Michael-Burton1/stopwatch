import React, { useEffect, useState } from "react";
import './App.css';
import prettyPrintTime from './util/prettyPrintTime.js'

function App() {

  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [laps, setLaps] = useState([])


  const recordLap = () => {
    const previousLapsTotal = laps.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    const currentLap = time - previousLapsTotal;
    const newLaps = [...laps, currentLap]
    setLaps(newLaps)
  }

  useEffect(() => {
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
  let lapCounter = 1;
  const lapDisplay = () => {
    let string = "Lap " + lapCounter;
    lapCounter++;
    return string;
  }
  return (
    <div className="App">
      <div>
        <h2> Michael's Stopwatch</h2>
        <span>
          {
            prettyPrintTime(time)
          }

        </span>
      </div>
      <div>
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)} >Start</button>
        )}
        {timerOn && (
          <>
            <button onClick={() => setTimerOn(false)}  >Stop</button>
            <button onClick={() => recordLap()}  >Lap</button>
          </>
        )}
        {!timerOn && time !== 0 && (
          <button onClick={() => setTimerOn(true)} >Resume</button>
        )}
        {!timerOn && time > 0 && (
          <>
            <button onClick={() => setTime(0)} >Reset</button>
            <button onClick={() => recordLap()} >Lap</button>
          </>
        )}
        <br></br>
        <ul>
          { //map(lap)
            laps.map(lap => {
              return (
                <li>{lapDisplay()} : {prettyPrintTime(lap)}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;


