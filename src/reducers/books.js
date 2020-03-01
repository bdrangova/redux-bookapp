import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = [
  {
    id: '1234',
    title: 'Book Title',
    category: 'Horror',
  },
];

function booksReducer(state = initialState, action) {
  const { book, type } = action;

  switch (type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: Math.round(Math.random() * 10),
          title: book.title,
          category: book.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(({ id }) => id !== book.id);
    default:
      return state;
  }
}

export { booksReducer, initialState };
