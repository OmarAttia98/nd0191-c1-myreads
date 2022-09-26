import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from './BooksAPI';
import ListBooks from "./components/ListBooks";
import BookSearch from "./components/BookSearch";
import useSearch from './hook/useSearch'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("");
  const [searchBooks] = useSearch(search);
  const [result, setResult] = useState([]);



  const updateShelf = (bookId, event) => {
    let fetchedBooks = books;
    const book = fetchedBooks.filter(book => book.id === bookId)[0];
    BooksAPI.update(book, event.target.value);
  };

  useEffect(() => {
    const result = searchBooks.map(book => {
        return book;
    })
    setResult(result);
  }, [searchBooks])

  useEffect(() => {
    BooksAPI.getAll()
      .then(data => {
        setBooks(data)
      }
      );
  }, [books])


  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <BookSearch MB={result} SS={setSearch} S={search} SB={setBooks} B={books} /></Route>
          <div>
            <Route path="/">
              <ListBooks fetchedBooks={books} updateShelf={updateShelf} />
              <div className="open-search">
                <Link to="/search">
                  <a></a>
                </Link>
              </div>
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
