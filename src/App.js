import { Link, Route, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Books from './pages/books';
import Category from './pages/category';

const booksData = [
  {
    id: uuid(),
    title: 'book 1',
    author: 'author 1',
    genre: 'action',
    progress: 68,
    chapter: 18,
  },
  {
    id: uuid(),
    title: 'book 2',
    author: 'author 2',
    genre: 'fantasy',
    progress: 100,
    chapter: 0,
  },
  {
    id: uuid(),
    title: 'book 3',
    author: 'author 3',
    genre: 'romance',
    progress: 0,
    chapter: 'prologue',
  },
];

function App() {
  return (
    <div className="App">
      <header>
        Book&apos;s store
        <nav>
          <Link to="/">Books</Link>
          <Link to="Category">Category</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Books booksData={booksData} />} />
        <Route path="Category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
