import './App.css';
import React, { useState, useEffect } from 'react';

const LIMIT = 60;

// カウントダウンをする（60から0を表示する）コンポーネント
function Timer() {
  // カウント
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  // timeLeftをリセット（60に戻す）
  const reset = () => {
    setTimeLeft(LIMIT);
  }

  // timeLeftを更新する。
  const tick = () => {
    console.log("tick");
    setTimeLeft((prevTime) => (prevTime === 0 ? LIMIT : prevTime - 1));
  };

  // setIntervalで1秒ごとにtickを実行するタイマーを作成する副作用。
  // 第二引数に[]を渡しているため、この副作用はレンダー後の1度しか実行されない。
  useEffect(() => {
    console.log("create Timer");
    const timerId = setInterval(tick, 1000);

    // クリーンアップ関数はコンポーネントがアンマウント、もしくは副作用が再度実行された時に呼ばれる。
    // ↑で作成したタイマー(timerId)は削除しない限り、コンポーネントがアンマウントされた後も延々と実行され続けてしまう。
    // そのため、コンポーネントがアンマウント、もしくは副作用が再度実行された時にclearIntervalでタイマーを削除する。

    return () => {
      console.log("cleanup Timer");
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <p>time: {timeLeft}</p>
      <button onClick={reset}>reset</button>
    </>
  );
}

function App() {
  // コンポーネントをレンダーするかどうかのフラグ
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>toggle Timer</button>

      {/* visible が trueであれば、Timerコンポーネントをレンダーする falseにすれば何もレンダーされない（Timerコンポーネントがアンマウントされる）ため、
      Timer コンポーネントのconsole.log('cleanup Timer'); などが実行される。 */}

      {visible ? <Timer /> : ""}
    </>
  );
}

export default App;
