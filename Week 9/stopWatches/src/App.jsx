import  { useEffect, useState } from 'react'

export default function App() {
  //  store timer value
  const [time, setTime] = useState(0);

  // Start/Stop state(Checks timer running or stopped.)
  const [running, setRunning] = useState(false);

  //Because dependency changed:
  //setInterval is side effect
  useEffect(() => {
    let interval;

      // If running is true
      if(running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 1 );
        },1000);
      }
      // Cleanup
      // Without cleanup : multiple intervals start
      return () => {
        clearInterval(interval);
      };
    },[running]);


    //Start Timer

    const startTimer = () => {
      setRunning(true);
    };

    //StopTimer

      const stopTimer = () => {
      setRunning(false);
    };

    ///Reset Timer
      const resetTimer = () => {
      setRunning(false);
      setTime(0);
    };

  return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Stop Watch</h1>
      <h2>{time}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}
