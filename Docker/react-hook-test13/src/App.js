import './App.css';
import React, { useState } from 'react';
import './styles.css'

function App() {
  // countの初期値として、1-10までのランダムな数値を生成
  const initialState = Math.floor(Math.random() * 10) + 1

  // countという名前のstate変数を宣言、初期値 initialStateをセット
  const [count, setCount] = useState(initialState)

  // openという名前のstate変数を宣言、初期値trueをセット
  const [open, setOpen] = useState(true)

  // toggleの関数を宣言
  const toggle = () => setOpen(!open)

  return (
    <>
      <button onClick={toggle}>{open ? 'close' : 'open'}</button>
      <div className={open ? 'isOpen' : 'isClose'}>
        <p>現在の数字は{count}です</p>
        {/* setCount()は、countを更新するための関数。countを引数で受け取ることも出来る。 */}
        <button onClick={() => setCount(prevState => prevState + 1)}>+1</button>
        <button onClick={() => setCount(0)}>0</button>
        <button onClick={() => setCount(initialState)}>最初の数値に戻す</button>
      </div>
    </>
  );
}

export default App;
