import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../../actions';
import style from './style.module.css';

const CATEGORY = [
  'Category',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const INITIAL_STATE = {
  values: {},
  errors: {},
};

function BookForm({ createBook }) {
  const [formState, setFormState] = useState(INITIAL_STATE);

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let values = formState.values;
    let errors = formState.errors;
    values[name] = value;
    errors[name] = '';
    setFormState(prevState => {
      return { ...prevState, values, errors };
    });
  };

  const validate = formState => {
    let noErrors = true;
    let errors = {};
    debugger;
    const { values } = formState;
    if (values.title === undefined || values.title === '') {
      errors.title = 'Please enter a title.';
      noErrors = false;
    }
    if (
      values.category === undefined ||
      values.category === '' ||
      values.category === 'Category'
    ) {
      errors.category = 'Please pick a category.';
      noErrors = false;
    }
    setFormState(prevState => {
      return { ...prevState, errors };
    });
    return noErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate(formState)) {
      const book = {
        title: formState.values.title,
        category: formState.values.category,
      };
      createBook(book);
      setFormState({
        values: {},
        errors: {},
      });
      e.target.reset();
    } else {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.formGroupTitle}>
        <input
          type='text'
          name='title'
          onChange={handleChange}
          className={style.title}
          placeholder='Book title...'
        />
        <span className={style.errors} key='title'>
          {formState.errors.title}
        </span>
      </div>
      <div className={style.formGroupCategory}>
        <select
          name='category'
          onChange={handleChange}
          className={style.dropdown}
        >
          {CATEGORY.map(item => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <span className={style.errors} key='category'>
          {formState.errors.category}
        </span>
      </div>
      <div className={style.buttonGroup}>
        <input type='submit' value='Add Book' className={style.button} />
      </div>
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
