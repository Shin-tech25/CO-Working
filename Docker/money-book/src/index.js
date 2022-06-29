import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 処理
const MoneyBook = () => {
  const books = [
    { date: "1/1", item: "お年玉", amount: 10000 },
    { date: "1/3", item: "ケーキ", amount: -500 },
    { date: "2/1", item: "小遣い", amount: 3000 },
    { date: "2/5", item: "マンガ", amount: -600 },
  ]
  return (
    <div>
      <h1>小遣い帳</h1>
      <table className='book'>
        <thead>
          <tr><th>日付</th><th>項目</th><th>入金</th><th>出金</th></tr>
        </thead>
        <tbody>
          <tr><td>{books[0].date}</td><td>{books[0].item}</td><td>{books[0].amount}</td><td></td></tr>
          <tr><td>{books[1].date}</td><td>{books[1].item}</td><td>{books[1].amount}</td><td></td></tr>
          <tr><td>{books[2].date}</td><td>{books[2].item}</td><td>{books[2].amount}</td><td></td></tr>
          <tr><td>{books[3].date}</td><td>{books[3].item}</td><td>{books[3].amount}</td><td></td></tr>
        </tbody>
      </table>
    </div>
  )
}

// 表示
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoneyBook />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
