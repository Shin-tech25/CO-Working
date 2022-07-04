import './App.css';
import React, { useRef, useState } from 'react';

function App() {
  const inputEl = useRef(null);
  const [text, setText] = useState("");
  const handleClick = () => {
    setText(inputEl.current.value);
  }
  console.log("レンダリング！");
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>set text</button>
      <p>テキスト：{text}</p>
    </>
  );
}

export default App;
