import './App.css';
import React, { useRef } from 'react';

function App() {
  const inputEl = useRef(null);
  const onClick = () => {
    if (!inputEl.current) return;
    inputEl.current.focus();
  }
  return (
    <>
      {/* ref属性にinputElを指定することで、inputEl.current でDOMにアクセス出来る */}
      <input ref={inputEl} type="text" />
      <button onClick={onClick}>input要素をフォーカスする</button>
    </>
  );
}

export default App;
