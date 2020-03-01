import React from 'react';

function CategoryFilter({ bookCategories, handleFilter }) {
  const categories = ['all'].concat(bookCategories);

  const handleChange = e => {
    e.preventDefault();
    handleFilter(e.target.value);
  };

  return (
    <select name='filter' id='category-filter' onChange={handleChange}>
      {categories.map(category => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
