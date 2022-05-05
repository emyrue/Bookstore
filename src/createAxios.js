import axios from 'axios';

const id = 'zUHG8aGWBOR3slrQe3SJ';
export default axios.create({
  baseURL: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`,
  headers: {
    'Content-type': 'application/json',
  },
});
