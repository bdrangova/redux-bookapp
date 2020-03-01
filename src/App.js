import React from 'react';
import './App.css';

import BookList from './containers/book-list';
import BookForm from './containers/book-form';

function App() {
  return (
    <div className='App'>
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
