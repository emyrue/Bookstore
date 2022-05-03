import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Add() {
  const dispatch = useDispatch();
  const [book, changeBook] = React.useState({
    title: '',
    author: '',
  });

  const titleChange = (event) => {
    const object = {
      ...book,
      title: event.target.value,
    };
    changeBook(object);
  };

  const authorChange = (event) => {
    const object = {
      ...book,
      author: event.target.value,
    };
    changeBook(object);
  };

  const newBook = (event) => {
    event.preventDefault();
    const action = addBook(book);
    dispatch(action);
    changeBook({
      title: '',
      author: '',
    });
  };

  return (
    <form onSubmit={newBook}>
      <input name="title" value={book.title} onChange={titleChange} required />
      <input name="author" value={book.author} onChange={authorChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default Add;
