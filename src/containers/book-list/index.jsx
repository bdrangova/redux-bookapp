import React from 'react';
import { connect } from 'react-redux';
import { removeBook, filterBooks } from '../../actions';
import Book from '../../components/book';
import CategoryFilter from '../../components/category-filter';
import style from './style.module.css';

function BookList({ books, bookCategories, removeBook, filterBooks }) {
  const handleRemove = book => {
    removeBook(book);
  };

  return (
    <div className={style.container}>
      <CategoryFilter
        bookCategories={bookCategories}
        handleFilter={filterBooks}
      />
      {books.map(book => (
        <Book book={book} key={book.id} handleRemove={handleRemove} />
      ))}
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    books: state.books.filter(
      book => book.category === state.filter || state.filter === 'All',
    ),
    bookCategories: [...new Set(state.books.map(book => book.category))],
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeBook: book => {
      dispatch(removeBook(book));
    },
    filterBooks: filter => {
      dispatch(filterBooks(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
