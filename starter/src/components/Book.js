import React from 'react'

export default function Book( {book, updateShelf} ) {
  return (
    <div className='book'>
        <div className="book-top">
    <div
      className="book-cover"
      style={{
      width: '100%',
      height: '100%',
      backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
      }}
    />
    <div className="book-shelf-changer">
      <select value={book.shelf} onChange={event => updateShelf(book.id, event)}>
        <option value="none" disabled>
          Move to...
        </option>
        <option hidden></option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  </div>
  <div className="book-title">
    {book.title}
  </div>
  <div className="book-authors">
    {book.authors &&
      <div className="book-authors">
        {book.authors[0]}
      </div>}
  </div>
  </div>
  )
}
