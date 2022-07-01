import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  // 初回レンダーかどうかのフラグ
  const isInitialRender = useRef(true);
  // isInitialRender.current を更新する副作用
  useEffect(() => {
    if (isInitialRender.current) {
      // refオブジェクトが更新されてもコンポーネントは再レンダーされない。
      isInitialRender.current = false;
    }
  });

  return (
    <>
      {/* countが更新されるまで、「初回レンダー」が表示される。 */}
      <p>{isInitialRender.current ? "初回レンダー" : "再レンダー"}</p>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>

    </>
  );
}

export default App;
