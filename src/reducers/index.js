import { combineReducers } from 'redux';
import { booksReducer as books } from './books';
import { filterReducer as filter } from './filter';

const bookAppStore = combineReducers({
  books,
  filter,
});

export default bookAppStore;
