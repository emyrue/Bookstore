import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

// Reducer
export default function reducer(state = [
  {
    title: 'Title1',
    author: 'Author1',
    id: uuidv4(),
  },
  {
    title: 'Title2',
    author: 'Author2',
    id: uuidv4(),
  },
], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          id: uuidv4(),
        },
      ];
    case REMOVE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}

// Action Creators
export function addBook(book) {
  return {
    type: ADD,
    title: book.title,
    author: book.author,
  };
}

export function removeBook(index) {
  return {
    type: REMOVE,
    index,
  };
}
