import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookList from '../components/BookList';

const MyLibraryPage = () => {
  const { myLibrary, removeFromLibrary } = useContext(BookContext);

  return (
    <div>
      <h1>My Library</h1>
      {myLibrary.length === 0 ? (
        <p>Your library is empty</p>
      ) : (
        <div>
          {myLibrary.map(book => (
            <div key={book.id}>
              <h2>{book.title}</h2>
              <button onClick={() => removeFromLibrary(book.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLibraryPage;
