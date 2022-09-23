import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from './BooksAPI';
import ListBooks from "./components/ListBooks";
import BookSearch from "./components/BookSearch";
import useSearch from './hook/useSearch'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


function App() {
  const [books, setBooks] = useState([])
  const [BookIDMap, setBookIDMap] = useState(new Map());
  const [search, setSearch] = useState("");
  const [searchBooks] = useSearch(search);
  const [mergedBooks, setMergedBooks] = useState([]);


  const BookMap = (books) => {
    const map = new Map();
    books.map(book => map.set(book.id, book));
    return map;
  }

  const updateShelf = (bookId, event) => {
    let fetchedBooks = books;
    const book = fetchedBooks.filter(book => book.id === bookId)[0];
    BooksAPI.update(book, event.target.value).then(response => {
      setBooks(fetchedBooks)
    });
  };


  useEffect(() => {

    const result = searchBooks.map(book => {
      if (BookIDMap.has(book.id)) {
        return BookIDMap.get(book.id);
      } else {
        return book;
      }
    })
    setMergedBooks(result);
  }, [searchBooks, BookIDMap])


  useEffect(() => {

    BooksAPI.getAll()
      .then(data => {
        setBooks(data)
        setBookIDMap(BookMap(data))
      }
      );
  }, [books])


  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <BookSearch MB={mergedBooks} SS={setSearch} S={search} SB={setBooks} /></Route>
          <div>
            <Route path="/">
              <ListBooks fetchedBooks={books} updateShelf={updateShelf} />
              <div className="open-search">
                <Link to="/search">
                  <a>Add a Book</a>
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
