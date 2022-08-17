import { Link, Route, Routes } from 'react-router-dom';
import Books from './pages/books';
import Category from './pages/category';

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
        <Route path="/" element={<Books />} />
        <Route path="Category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
