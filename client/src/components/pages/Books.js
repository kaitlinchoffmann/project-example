import { useContext } from "react";
import UserContext from "../../context/userContext.js";


const Books = (props) => {
  const { user } = useContext(UserContext);

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