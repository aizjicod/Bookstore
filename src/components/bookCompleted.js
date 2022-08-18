const BookProgress = () => (
  <div className="book-progress">
    <input type="range" max="100" min="0" value="0" className="progress-range" readOnly />
    <h2 className="progress-h2">0</h2>
    <p className="progress-text">completed</p>
  </div>
);

export default BookProgress;
