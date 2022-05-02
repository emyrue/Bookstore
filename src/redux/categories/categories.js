// Action
const CHECK = 'CHECK';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case CHECK:
      return 'Under Construction';
    default:
      return state;
  }
}

// Action Creators
export function checkStatus() {
  return {
    type: CHECK,
  };
}
