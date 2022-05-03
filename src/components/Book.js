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
          <span>
            {book.title}
            {' '}
            by
            {' '}
            {book.author}
          </span>
          <button type="button">Remove</button>
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
      id: PropTypes.number.isRequired,
    },
  )),
};
