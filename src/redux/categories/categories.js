const CHECK_STATUS = 'Bookstore/books/CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});
const checkStatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default checkStatusReducer;
