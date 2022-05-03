import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const mainReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(mainReducer);

export default store;
