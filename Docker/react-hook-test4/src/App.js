import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // useEffectの第２引数を指定しないため、コンポーネント（この場合ではAppコンポーネント）がレンダーされた後、毎回実行されている。
  useEffect(() => {
    console.log(document.getElementById("effectHook").innerText);
  });

  return (
    <>
      <p id="effectHook">You clicked { count } times</p>
      <button onClick={ ()=> setCount(count+1) }></button>
    </>
  )
}

export default App;
