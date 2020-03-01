import React from 'react';
import { connect } from 'react-redux';
import { removeBook, filterBooks } from '../../actions';
import Book from '../../components/book';
import CategoryFilter from '../../components/category-filter';

function BookList({ books, bookCategories, removeBook, filterBooks }) {
  const handleRemove = book => {
    removeBook(book);
  };

  // const handleFilter = filter => {
  //   filterBooks(filter);
  // };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <Book book={book} key={book.id} handleRemove={handleRemove} />
          ))}
        </tbody>
      </table>
      <CategoryFilter
        bookCategories={bookCategories}
        handleFilter={filterBooks}
      />
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    books: state.books.filter(
      book => book.category === state.filter || state.filter === 'all',
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
