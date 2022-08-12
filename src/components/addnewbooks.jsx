const AddNewBook = () => (
  <>
    <h2>Add New Book</h2>
    <form>
      <input type="text" placeholder="enter new book" className="name-input" />
      <input type="text" placeholder="enter the author" className="author-input" />
      <input type="submit" value="add new book" />
    </form>
  </>
)

export default AddNewBook