import './App.css';
import React, { useState, useEffect, useRef } from 'react';

// props.countが更新されない限り、再レンダーされない。
const Child = React.memo(() => {
  console.log("render Child");
  return <p>Child</p>;
});

function App() {
  console.log("render App");

  const [timeLeft, setTimeLeft] = useState(100);
  const timerRef = useRef(null);
  const timeLeftRef = useRef(timeLeft);

  useEffect(()=>{
    timeLeftRef.current = timeLeft;
  }, [timeLeft])

  const tick = () => {
    if(timeLeftRef.current === 0) {
      clearInterval(timerRef.current);
      return;
    }
    setTimeLeft(prevTime => prevTime -1);
  }

  const start = () => {
    timerRef.current = setInterval(tick, 10);
  }

  const reset = () => {
    clearInterval(timerRef.current);
    setTimeLeft(100);
  };

  return(
    <>
      <button onClick={start}>start</button>
      <button onClick={reset}>reset</button>
      <p>App: {timeLeft}</p>
      <Child />
    </>
  );
}

export default App;
