import React from 'react'
import Book from "./book.js"
function RenderingLists() {
  const booklist = [
    "To kill a mockingbird",
    "The great Gatsby",
    "The catcher in the rye"
  ]
  const Books = [
  {
    title: "To kill a mockingbird",
    Author: "Harper Lee",
    Pages: "286"
  },
  {
    title: "The great Gatsby",
    Author: "Scott fitzgerald",
    Pages: "218"
  },
  {
    title: "The catcher in the rye",
    Author: "J.D Salinger",
    Pages: "234"
  }
  ]
  return (
    <div>
        {booklist.map(book =>{
            return <h2 key={book}>{book}</h2>
        })}
        <hr />
        {Books.map( book =>{
          return <Book key={book.title} book={book} />
        })}
    </div>
  )
}

export default RenderingLists