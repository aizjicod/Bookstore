import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBookAction } from '../redux/books/books';

const AddNewBook = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputText.name.trim() === '' && inputText.author.trim() === '') {
      alert('please enter something...');
    } else {
      // dispatch book
      dispatch(addBookAction({
        id: uuid(),
        title: inputText.name,
        author: inputText.author,
        genre: 'action',
        progress: 0,
        chapter: 18,
      }));

      // clear inputs and values from state
      setInputText({
        name: '',
        author: '',
      });
      document.querySelector('.name-input').value = '';
      document.querySelector('.author-input').value = '';
    }
  };

  const handleOnChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>Add New Book</h2>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" onChange={handleOnChange} placeholder="enter new book" className="name-input" />
        <input type="text" name="author" onChange={handleOnChange} placeholder="enter the author" className="author-input" />
        <input type="submit" value="add new book" />
      </form>
    </>
  );
};

export default AddNewBook;
