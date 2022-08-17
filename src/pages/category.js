import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
      >
        Check status
      </button>
      <h2>{status}</h2>
    </>
  );
};

export default Category;
