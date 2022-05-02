import React from 'react';
import BookList from '../components/BookList';
import Add from '../components/Add';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookArray: [
        {
          title: 'Title',
          author: 'Author',
          id: '1',
        },
      ],
    };
  }

  render() {
    const { bookArray } = this.state;
    return (
      <div>
        <BookList bookArray={bookArray} />
        <Add />
      </div>
    );
  }
}

export default Home;