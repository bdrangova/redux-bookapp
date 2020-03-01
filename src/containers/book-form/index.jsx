import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../../actions';

const CATEGORY = [
  '',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const INITIAL_STATE = {
  values: {
    title: '',
    category: '',
  },
};

function BookForm({ createBook }) {
  const [formState, setFormState] = useState(INITIAL_STATE);

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let newState = formState;
    newState.values[name] = value;
    setFormState(newState);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const book = {
      title: formState.values.title,
      category: formState.values.category,
    };
    createBook(book);
    setFormState(INITIAL_STATE);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' onChange={handleChange} />
      <select name='category' onChange={handleChange}>
        {CATEGORY.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <input type='submit' value='Add Book' />
    </form>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createBook: book => {
      dispatch(createBook(book));
    },
  };
};

export default connect(null, mapDispatchToProps)(BookForm);
