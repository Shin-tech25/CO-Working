import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const Child = React.memo(({ handleClick }) => {
  console.log('render Child');
  return <button onClick={handleClick}>Child</button>;
});

function App() {
  console.log('render App');

  const [count, setCount] = useState(0);
  // 関数はコンポーネントが再レンダーされる度に再生成されるため、関数の内容が同じでも、新しいhandleClickと前回のhandleClickは
  // 異なるオブジェクトなので、等価ではない。
  // そのため、コンポーネントが再レンダーされる。

  const handleClick = () => {
    console.log('click');
  };

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleClick={handleClick} />
    </>
  );
}

export default App;
