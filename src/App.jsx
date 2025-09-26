// Root component of the app.
// Provides global context via BookProvider, renders Home page, and includes Toast notifications.

import React from "react";
import Home from "./pages/Home"; // Main page of the app
import { BookProvider } from "./context/BookContext"; // Context provider for global state
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    // Wrap entire app with BookProvider to share book state across components
    <BookProvider>
      <Home /> {/* Render the Home page UI */}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        className="toast-container"
      />
    </BookProvider>
  );
};

export default App;
