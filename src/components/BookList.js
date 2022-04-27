import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { bookArray } = this.props;
    return (
      <ul>
        <Book bookArray={bookArray} />
      </ul>
    );
  }
}

export default BookList;

BookList.defaultProps = {
  bookArray: [],
};

BookList.propTypes = {
  bookArray: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    },
  )),
};
