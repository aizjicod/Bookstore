import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import AddNewBook from '../components/addnewbooks';
import BookProgress from '../components/bookCompleted';
import BookInformation from '../components/bookInformation';
import BookChapter from '../components/booksChapter';
import { getBooksDataAPI } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksDataAPI());
  }, []);
  const booksData = useSelector((state) => state.books);
  return (
    <>
      <ul className="books-list">
        {booksData.map((bookData) => (
          <li key={bookData.item_id}>
            <BookInformation
              title={bookData.title}
              author={bookData.author}
              genre={bookData.category}
              id={bookData.item_id}
            />
            <BookProgress />
            <BookChapter />
          </li>
        ))}
      </ul>
      <AddNewBook />
    </>
  );
};

export default Books;
