import PropTypes from 'prop-types';
import AddNewBook from '../components/addnewbooks';
import BookProgress from '../components/bookCompleted';
import BookInformation from '../components/bookInformation';
import BookChapter from '../components/booksChapter';

const Books = ({ booksData }) => (
  <>
    <ul>
      {booksData.map((bookData) => (
        <li key={bookData.id}>
          <BookInformation
            title={bookData.title}
            author={bookData.author}
            genre={bookData.genre}
          />
          <BookProgress progress={bookData.progress} />
          <BookChapter chapter={bookData.chapter} />
        </li>
      ))}
    </ul>
    <AddNewBook booksData={booksData} />
  </>
);

Books.propTypes = {
  booksData: PropTypes.isRequired,
};

export default Books;