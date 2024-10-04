import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage';
import { BookProvider } from './context/BookContext';
import './App.css';

function App() {
  return (
    <BookProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetailsPage />} />
            <Route path="/my-library" element={<MyLibraryPage />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;
