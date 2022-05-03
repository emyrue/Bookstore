import React from 'react';
import { useSelector } from 'react-redux';
import BookList from '../components/BookList';
import Add from '../components/Add';

function Home() {
  const bookArray = useSelector((state) => state.books);
  return (
    <div>
      <BookList bookArray={bookArray} />
      <Add />
    </div>
  );
}

export default Home;
