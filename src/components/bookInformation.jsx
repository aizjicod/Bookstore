const BookInformation = ({ genre, title, author }) => {
  return (
    <>
      <div className="book-information">
        <p className="book-genre">{genre}</p>
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <div>
          <button className="book-btns">Comments</button>
          <button className="book-btns">Remove</button>
          <button className="book-btns">Edit</button>
        </div>
      </div>
    </>
  )
}

export default BookInformation