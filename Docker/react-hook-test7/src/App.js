import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(10);
  // useRefに0を渡しているため、prevCountRef.currentの初期値は0
  const prevCountRef = useRef(0);

  useEffect(() => {
    // refオブジェクトが更新されてもコンポーネントは再レンダーされない。
    prevCountRef.current = count;
  });

  return (
    <>
      <p>現在のcount: {count}, 前回のcount: {prevCountRef.current}</p>
      <p>前回のcountより{prevCountRef.current > count ? "小さい" : "大きい"}</p>
      <button onClick={() => setCount(Math.floor(Math.random() * 11))}>update</button>
    </>
  );
}

export default App;
