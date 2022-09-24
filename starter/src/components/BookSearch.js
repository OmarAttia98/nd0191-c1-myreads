import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI';


export default function BookSearch({ MB, S, SS, SB }) {
    const result = MB;
    const search = S;
    const setSearch = SS;
    const setBooks = SB;

    const updateBooks = (book, event) => {
        let current = result;
        const bookToUpdate = current.filter(cBook => cBook.id === book)[0];
        BooksAPI.update(bookToUpdate, event.target.value).then(response => {
            setBooks(current)
        });
    }


    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">

                    <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {result.map(b => (
                        <li key={b.id}>
                            <Book book={b} updateShelf={updateBooks} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>)
}
