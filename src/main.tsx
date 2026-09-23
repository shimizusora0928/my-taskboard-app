/**
 * Reactを画面に配置＋CSSの読み込み
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'; // スタイルを一括読み込み

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);