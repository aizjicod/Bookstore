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

const initialState = [
  {
    id: '0',
    title: 'book 1',
    author: 'author 1',
    genre: 'action',
    progress: 68,
    chapter: 18,
  },
  {
    id: '1',
    title: 'book 2',
    author: 'author 2',
    genre: 'fantasy',
    progress: 100,
    chapter: 0,
  },
  {
    id: '2',
    title: 'book 3',
    author: 'author 3',
    genre: 'romance',
    progress: 0,
    chapter: 'prologue',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
