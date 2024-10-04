import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const BookDetailsPage = () => {
  const { books, addToLibrary } = useContext(BookContext);
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <p>{book.description}</p>
      <p>Published: {book.publication_year}</p>
      <button onClick={() => addToLibrary(book)}>Add to My Library</button>
    </div>
  );
};

export default BookDetailsPage;
