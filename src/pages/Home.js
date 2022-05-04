import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/BookList';
import Add from '../components/Add';
import { getBooks, allBooks } from '../redux/books/books';

function Home() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const fetchData = async () => {
      getBooks().then((response) => {
        const action = allBooks(response)();
        dispatch(action);
      });
    };
    fetchData();
  }, []);
  const bookArray = useSelector((state) => state.books);
  return (
    <div>
      <BookList bookArray={bookArray} />
      <Add />
    </div>
  );
}

export default Home;
