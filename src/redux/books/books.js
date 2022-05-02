// Actions
const ADD = 'ADD';
const REMOVE = 'REMOVE';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE:
      return state.splice(action.index, 1);
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
