const ADD_BOOK = 'Bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'Bookstore/books/REMOVE_BOOK';

export const addBookAction = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.map((book) => (book.id === action.id
        ? book : null));
    default:
      return state;
  }
};

export default bookReducer;
