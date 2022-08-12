const BookProgress = ({ progress }) => (
  <div className="book-progress">
    <input type="range" max="100" min="0" value={progress} className="progress-range" readOnly />
    <h2 className="progress-h2">{`${progress}%`}</h2>
    <p className="progress-text">completed</p>
  </div>
)

export default BookProgress