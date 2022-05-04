import { v4 as uuidv4 } from 'uuid';
import createAxios from '../../createAxios';

// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH = 'bookstore/books/FETCH';

// Get initial state
export const getBooks = async () => {
  const response = await createAxios.get();
  const array = [];
  const entries = Object.entries(response.data);
  entries.forEach((entry) => {
    array[array.length] = {
      ...entry[1][0],
      id: entry[0],
    };
  });
  return array;
};

// Reducer
// async function reducer() {
//   const myBooks = await getBooks();
//   return (state = myBooks, action) => {
//     switch (action.type) {
//       case ADD:
//         return [
//           ...state,
//           {
//             title: action.title,
//             author: action.author,
//             category: 'Fiction',
//             id: uuidv4(),
//           },
//         ];
//       case REMOVE:
//         return [
//           ...state.slice(0, action.index),
//           ...state.slice(action.index + 1),
//         ];
//       default:
//         return state;
//     }
//   };
// }

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          category: 'Fiction',
          id: uuidv4(),
        },
      ];
    case REMOVE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case FETCH:
      return action.array;
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

export function allBooks(array) {
  return {
    type: FETCH,
    array,
  };
}
