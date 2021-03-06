import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const mainReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
