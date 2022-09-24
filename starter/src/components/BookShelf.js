import React from 'react';
import Book from './Book';

export default function BookShelf({ books, shelfTitle, updateShelf }) {
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">
          {shelfTitle}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter((selectedbook)=>(selectedbook.imageLinks)).map(selectedbook =>
              <li key={selectedbook.id}>
                <Book book={selectedbook} updateShelf={updateShelf}/>
              </li>
            )}
          </ol>
        </div>
      </div>
    )
}
