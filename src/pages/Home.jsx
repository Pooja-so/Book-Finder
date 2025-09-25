/*
  Home.jsx - Main page of the Book Finder application.
  Combines SearchBar for searching books and BookList for displaying results.
  Provides a clean layout with responsive design and header for app branding.
*/

import React from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      {/* Header section displaying app title */}
      <header className="bg-blue-600 text-white py-6 shadow">
        <h1 className="text-center text-3xl font-bold">Book Finder</h1>
      </header>

      {/* Search Section: includes main search input and optional filters */}
      <SearchBar />

      {/* Main content area to display fetched book results in a grid */}
      <main className="max-w-7xl mx-auto">
        <BookList />
      </main>
    </div>
  );
};

export default Home;
