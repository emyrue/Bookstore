import { combineReducers, createStore } from 'react-redux';
import * as books from './books/books';
import * as categories from './categories/categories';

const mainReducer = combineReducers({
  books: books.reducer,
  categories: categories.reducer,
});

const store = createStore(mainReducer);

export default store;
