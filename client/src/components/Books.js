const user = {
  id: 22222,
  username: "cathy123"
}

const Books = (props) => {
  return (
    <div>
      <h2>{user.username}'s Favorite Books</h2>
      <ul>
        { props.books.map((book) => 
          <li key={book.id}>{book.title}</li>
        ) }
      </ul>
    </div>
  );
}

export default Books;