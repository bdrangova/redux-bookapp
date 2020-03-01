import React from 'react';
import style from './style.module.css';

function CategoryFilter({ bookCategories, handleFilter }) {
  const categories = ['All'].concat(bookCategories);

  const handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    handleFilter(e.target.value);
  };

  return (
    <div className={style.container}>
      <span className={style.text}>FILTER:</span>
      {categories.map(category => (
        <input
          name='category'
          type='button'
          key={category}
          onClick={handleChange}
          value={category}
        />
      ))}
      {/* </select> */}
    </div>
  );
}

export default CategoryFilter;
