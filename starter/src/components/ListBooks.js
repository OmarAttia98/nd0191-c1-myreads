import React from 'react'
import BookShelf from './BookShelf'

export default function ListBooks( { fetchedBooks, updateShelf } ) {
  return (
<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={fetchedBooks.filter(book => book.shelf === "currentlyReading")}
            updateShelf={updateShelf}
            shelfTitle="Currently Reading"
          />
          <BookShelf
            books={fetchedBooks.filter(book => book.shelf === "wantToRead")}
            updateShelf={updateShelf}
            shelfTitle="Want to Read"
          />
          <BookShelf
            books={fetchedBooks.filter(book => book.shelf === "read")}
            updateShelf={updateShelf}
            shelfTitle="Read"
          />
        </div>
      </div>  )


}
