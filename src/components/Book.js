import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { bookArray } = this.props;
    return (
      bookArray.map((book) => (
        <li key={book.id}>
          {book.title}
          {' '}
          by
          {' '}
          {book.author}
        </li>
      ))
    );
  }
}

export default Book;

Book.defaultProps = {
  bookArray: [],
};

Book.propTypes = {
  bookArray: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    },
  )),
};
