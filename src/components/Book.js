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
      <li className="listed-book" key={book.id}>
        <div className="flex">
          <div>
            <div className="category">{book.category}</div>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
            <ul className="options">
              <li className="option">Comments</li>
              <li>|</li>
              <li><button type="button" className="remove" onClick={() => deleteBook(i, book.id)}>Remove</button></li>
              <li>|</li>
              <li>Edit</li>
            </ul>
          </div>
          <div className="progress">
            <div className="Oval-2" />
            <div className="progress-percentage">
              <div className="percentage">64%</div>
              <div className="completed">Completed</div>
            </div>
          </div>
        </div>
        <div className="line" />
        <div className="right-side">
          <div className="current">CURRENT CHAPTER</div>
          <div className="chapter">Chapter 1</div>
          <button type="button" className="update">Update Progress</button>
        </div>
      </li>
    ))
  );
}

export default Book;
