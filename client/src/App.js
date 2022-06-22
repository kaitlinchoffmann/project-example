import './App.css';
import Books from "./components/Books.js";
import About from "./components/About.js";
import Navbar from './components/Navbar.js';

const books = [
  {
    id: 12334,
    title: "Interview With the Vampire"
  },
  {
    id: 34553,
    title: "The Lovely Bones"
  },
  {
    id: 55555,
    title: "On a Pale Horse"
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <h1>Book App</h1>
      <Books books={books}/>
    </div>
  );
}

export default App;
