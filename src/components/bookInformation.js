import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBookApi } from '../redux/books/books';

const BookInformation = ({
  genre, title, author, id,
}) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(deleteBookApi(id));
  };

  return (
    <>
      <div className="book-information">
        <p className="book-genre">{genre}</p>
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <div className="buttons-div">
          <button type="button" className="book-btns">Comments</button>
          <button type="button" className="book-btns" onClick={handleOnClick}>Remove</button>
          <button type="button" className="book-btns">Edit</button>
        </div>
      </div>
    </>
  );
};

BookInformation.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookInformation;
