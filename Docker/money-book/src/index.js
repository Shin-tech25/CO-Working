import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 処理
const MoneyBook = () => {
  return (
    <div>
      <h1>小遣い帳</h1>
      <table className='book'>
        <thead>
          <tr><th>日付</th><th>項目</th><th>入金</th><th>出勤</th></tr>
        </thead>
        <tbody>
          <tr><td>1/1</td><td>お年玉</td><td>10000</td><td></td></tr>
          <tr><td>1/3</td><td>ケーキ</td><td>500</td><td></td></tr>
          <tr><td>2/1</td><td>小遣い</td><td>3000</td><td></td></tr>
          <tr><td>1/1</td><td>お年玉</td><td>600</td><td></td></tr>
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
