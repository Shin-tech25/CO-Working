import './App.css';
import React, { useRef } from 'react';

function App() {
  const inputEl = useRef(null);
  const handleClick = () => {
    inputEl.current.focus();
    console.log("inputEl.current: ", inputEl.current);
    //inputEl.current: <input type="text">
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>入力エリアをフォーカスする</button>
    </>
  );
}

export default App;
