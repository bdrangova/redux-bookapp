import React from 'react';
import style from './style.module.css';

function Book({ book, handleRemove }) {
  const { id, title, category } = book;
  return (
    <div key={id} className={style.card}>
      <span className={style.category}>{category}</span>
      <span className={style.title}>{title}</span>
      <span className={style.link}>
        <a onClick={() => handleRemove(book)}>Remove</a>
      </span>
    </div>
  );
}

export default Book;
