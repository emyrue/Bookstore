import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import createAxios from '../createAxios';

function Book() {
  const bookArray = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const deleteBook = (index, id) => {
    const action = removeBook(index)();
    dispatch(action);
    createAxios.delete(`/${id}`, {
      item_id: id,
    });
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
        <button type="button" onClick={() => deleteBook(i, book.id)}>Remove</button>
      </li>
    ))
  );
}

export default Book;
