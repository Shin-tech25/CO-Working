import React, {useState} from 'react';
import './App.css';

export default function App() {
  // countというstateとsetCountというcountを更新する関数を定義。
  // 今回、useStateに10を渡しているため、countの初期値は10になる。
  const [count, setCount] = useState(10);

  const decrement = () => {
    // setCount に count - 1 を渡しているため、
    // decrement が実行される度に、count が 1 減る。
    setCount(count - 1);
  };

  const increment = () => {
    // setCount に count + 1 を渡しているため、
    // increment が実行される度に、count が 1 増える。
    setCount(count + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}
