import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book() {
  const bookArray = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const deleteBook = (index) => {
    const action = removeBook(index);
    dispatch(action);
  };
  return (
    bookArray.map((book, i) => (
      <li key={book.id}>
        <span>
          {book.title}
          {' '}
          by
          {' '}
          {book.author}
        </span>
        <button type="button" onClick={() => deleteBook(i)}>Remove</button>
      </li>
    ))
  );
}

export default Book;
