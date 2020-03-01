/*
 * action types
 */
export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
/*
 * action creators
 */
export function createBook(book) {
  return { type: CREATE_BOOK, book };
}
export function removeBook(book) {
  return { type: REMOVE_BOOK, book };
}

export function filterBooks(filter) {
  return { type: CHANGE_FILTER, filter: filter };
}
