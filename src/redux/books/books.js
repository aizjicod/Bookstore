import apiService from '../../api/api';

const ADD_BOOK = 'Bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'Bookstore/books/REMOVE_BOOK';
const GET_BOOKS_DATA = 'Bookstore/books/GET_BOOK_DATA';

export const addNewBookApi = (bookData) => async (dispatch) => {
  try {
    const res = await apiService.create(bookData);
    dispatch({
      type: ADD_BOOK,
      book: bookData,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getBooksDataAPI = () => async (dispatch) => {
  try {
    const res = await apiService.getAll();
    const { data } = res;
    const books = [];
    Object.keys(data).forEach((e) => {
      books.push({ ...data[e][0], item_id: e });
    });
    dispatch({
      type: GET_BOOKS_DATA,
      booksData: books,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteBookApi = (id) => async (dispatch) => {
  try {
    await apiService.remove(id);
    const res = await apiService.getAll();
    const { data } = res;
    const books = [];
    Object.keys(data).forEach((e) => {
      books.push({ ...data[e][0], item_id: e });
    });
    dispatch({
      type: REMOVE_BOOK,
      data: books,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const initialState = [
  {
    category: 'Fiction',
    author: 'John Smith',
    title: 'The Great Gatsby',
    item_id: 'item1',
  },
  {
    category: 'Fiction',
    author: 'John Smith',
    title: 'The Great Gatsby',
    item_id: 'item2',
  },
  {
    category: 'Fiction',
    author: 'John Smith',
    title: 'The Great Gatsby',
    item_id: 'item3',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_DATA:
      return action.booksData;
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return [...action.data];
    default:
      return state;
  }
};

export default bookReducer;
