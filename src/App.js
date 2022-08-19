import { Link, Route, Routes } from 'react-router-dom';
import Books from './pages/books';
import Category from './pages/category';
import './css/app.css';

function App() {
  return (
    <div className="App">
      <header id="header">
        <h1 className="Bookstore-CMS">
          Book&apos;s store
        </h1>
        <nav className="navbar">
          <Link to="/" className="navbar-links">Books</Link>
          <Link to="Category" className="navbar-links">Category</Link>
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
