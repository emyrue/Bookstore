import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import createAxios from '../createAxios';

function Add() {
  const dispatch = useDispatch();
  const [book, changeBook] = React.useState({
    title: '',
    author: '',
    id: uuidv4(),
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

  const newBook = async (event) => {
    event.preventDefault();
    const action = addBook(book)();
    const response = createAxios.post('', {
      ...book,
      item_id: book.id,
      category: 'Fiction',
    });
    response.then(() => {
      dispatch(action);
    });
    changeBook({
      title: '',
      author: '',
      id: uuidv4(),
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
