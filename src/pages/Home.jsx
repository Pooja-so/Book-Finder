/*
  Home.jsx - Enhanced main page of the Book Finder application.
  Features modern gradient design, glass-morphism header, and improved layout.
  Combines SearchBar for searching books and BookList for displaying results.
*/

import React from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Header with glass-morphism effect */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Book Finder
            </h1>
            <p className="mt-2 text-gray-600 text-lg">
              Discover millions of books from the Open Library
            </p>
          </div>
        </div>
      </header>

      {/* Search Section with enhanced spacing */}
      <SearchBar />

      {/* Main content area with improved styling */}
      <main>
        <BookList />
      </main>

      {/* Footer with glass-morphism effect */}
      <footer className="bg-white/80 backdrop-blur-lg border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>Powered by Open Library API • Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
