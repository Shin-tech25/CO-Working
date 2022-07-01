import './App.css';
import React, { useState, useEffect } from 'react';
// HTTP通信をするモジュール（外部APIなどと通信するときに利用する）
import axios from 'axios'

function App() {
  // APIから取得したデータ
  const [items, setItems] = useState([]);
  // ローディング状態
  const [isLoading, setIsLoading] = useState(false);

  // コンポーネントが初めてレンダーされた後に外部APIからデータを取得し、stateを更新する副作用。
  // useEffectの第2引数（今回は空の配列）を指定しないと、itemsやisLoadingが更新され、コンポーネントが再レンダーされる度にAPIとの通信が発生してしまう。
  // 今回はコンポーネントがレンダーされた後に、一度だけこの処理を実行したいため、第2引数に[]を渡している。

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=react"
      );

      setItems(result.data.hits);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {
        isLoading ? (
          <p>Loading</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        )
      }
    </>
  );
}

export default App;
