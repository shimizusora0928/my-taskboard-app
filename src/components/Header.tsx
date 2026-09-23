/**
 * UIパーツ（ヘッダー領域）
 */
import React from 'react';
export const Header: React.FC = () => {
  return (
    <header className="header">
    <div className="header-inner">
      <h1 className="header-title">タスクボード</h1>
      <p className="header-subtitle">TypeScript 総合演習</p>
    </div>
  </header>
  );
};