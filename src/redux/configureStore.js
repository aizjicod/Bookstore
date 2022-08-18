import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import checkStatusReducer from './categories/categories';

const middleware = [thunk];

const rootReducer = combineReducers({
  books: bookReducer,
  status: checkStatusReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(...middleware));
export default store;
