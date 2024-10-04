import React, { createContext, useState } from 'react';
import bookData from '../services/bookData';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books] = useState(bookData.books);
  const [myLibrary, setMyLibrary] = useState([]);

  const addToLibrary = (book) => {
    if (!myLibrary.find(b => b.id === book.id)) {
      setMyLibrary([...myLibrary, book]);
    }
  };

  const removeFromLibrary = (id) => {
    setMyLibrary(myLibrary.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, myLibrary, addToLibrary, removeFromLibrary }}>
      {children}
    </BookContext.Provider>
  );
};
