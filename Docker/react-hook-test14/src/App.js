import './App.css';
import React, { useState, useEffect } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button } from '@material-ui/core';

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count}回クリックされました`
  })

  return (
    <>
      <p>{`${count}回クリックされました`}</p>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={()=>setCount((prev) => prev+1)}>ボタン</Button>
        <Button onClick={() => setCount(0)}>リセット</Button>
      </ButtonGroup>
    </>
  );
}

export default App;
