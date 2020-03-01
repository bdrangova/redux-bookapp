import React from 'react';

function Book({ book, handleRemove }) {
  const { id, title, category } = book;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button onClick={() => handleRemove(book)}>X</button>
      </td>
    </tr>
  );
}

export default Book;
