import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./components/pages/Books.js";
import About from "./components/pages/About.js";
import Navbar from './components/pages/Navbar.js';
import Register from './components/pages/Register.js'
import { UserProvider } from './context/userContext';

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
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route index element={<About />}/>
              <Route path="books" element={<Books books={books}/>}/>
              <Route path="register" element={<Register />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>

    </div>
  );
}

export default App;
