/*
  Spinner.jsx - Enhanced loading spinner with better visual design.
  Features centered layout, book icon, and contextual loading message.
*/

import React from "react";
import { BookOpen } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 mb-16">
      {/* Enhanced Spinner with Book Icon */}
      <div className="relative mb-6">
        <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <BookOpen className="absolute inset-0 m-auto w-6 h-6 text-indigo-600" />
      </div>

      {/* Loading Message */}
      <p className="text-gray-600 font-medium text-lg mb-2">
        Searching for books...
      </p>
      <p className="text-gray-400 text-sm">This may take a few moments</p>
    </div>
  );
};

export default Spinner;
