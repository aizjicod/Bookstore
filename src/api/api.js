import axios from 'axios';

const APP_ID = 'O5gyPaCNevfQ23r2WSNB';
const http = axios.create({
  baseURL: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}`,
  headers: {
    'Content-type': 'application/json',
  },
});

const getAll = () => http.get('/books');

const create = (data) => http.post('/books', data);

const remove = (id) => http.delete(`/books/${id}`);

const apiService = {
  getAll,
  create,
  remove,
};

export default apiService;
