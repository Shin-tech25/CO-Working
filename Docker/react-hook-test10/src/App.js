import './App.css';
import React, { useState } from 'react';


// Appコンポーネントが再レンダーする度に再レンダーされる。

// props.countが更新されない限り、再レンダーされない。
const Child = React.memo(({ count }) => {
  console.log("render Child");
  return <p>Child: {count}</p>
});
// レンダーコストが高いコンポーネントをメモ化することで、パフォーマンスの向上が期待できる。

function App() {
  console.log("render App");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>countup App Count</button>
      <button onClick={() => setCount2(count2 + 1)}>countup Child Count</button>
      <p>App: {count1}</p>
      <Child count={count2} />
    </>
  );
}

export default App;
