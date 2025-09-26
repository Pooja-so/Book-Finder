# Book Finder

Book Finder is a **modern and responsive book search web application** built with [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/).  
It allows users to explore the **Open Library** database, search books by **title** or **author**, and refine results using **advanced filters** like publish year, language, and full-text availability.

---

## 🌐 Live Demo
[Book Finder – Try It Here](https://lvzv6f-5173.csb.app/)

---

## 🚀 Tech Stack
- **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Context API
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API:** [Open Library Search API](https://openlibrary.org/developers/api) *(no API key required)*

---

## ✨ Features

- **Smart Book Search:**  
  Search for books by **title** or **author** with instant results powered by the Open Library API.

- **Dynamic Filters:**  
  Refine search results with multiple filter options:
  - **First Publish Year:** Narrow results by a specific publication year.
  - **Language Selection:** Choose from a curated dropdown of popular languages (e.g., English, French, German).
  - **Full-Text Availability:** Toggle to display only books with full online text.

- **Interactive Book Display:**  
  - Responsive card-based grid showing **cover image**, **title**, **authors**, **language**, and **publish year**.  
  - Hover effects reveal subtle highlights for improved interactivity.  
  - Automatic fallback for books without cover images.

- **Responsive & Accessible UI:**  
  Optimized layouts for desktop, tablet, and mobile devices to ensure a seamless browsing experience.

- **Robust State Management:**  
  Centralized global state using **React Context API** to manage search results, filters, loading states, and error handling.

- **Real-Time Feedback:**  
  Toast notifications (via **React Toastify**) for empty inputs, network errors, or no matching results to keep users informed.

- **Fast & Lightweight:**  
  Built with **Vite** and **React**, ensuring quick load times and smooth interactions.

---
## Folder Structure
```bash
Book-Finder/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── context/
│   │   └── BookContext.jsx
│   ├── hooks/
│   │   └── useBookSearch.js
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── BookList.jsx
│   │   ├── BookCard.jsx
│   │   └── Spinner.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── utils/
│   │   └── constants.js
│   └── styles/
│       └── (if you have custom CSS or tailwind config overrides)
├── README.md
├── package.json
├── tailwind.config.js
├── vite.config.js
└── node_modules/
```
---

## ⚡ Getting Started

Follow these steps to run the app locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/book-finder.git
cd book-finder
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Start the Development Server
```bash
npm run dev
```
### The app will be available at:
👉 http://localhost:5173 (default for Vite projects)

### 4️⃣ Build for Production
```bash
npm run build
```
### 5️⃣ Preview Production Build
```bash
npm run preview
```
---
### Tip:  
This app uses the [Open Library Search API](https://openlibrary.org/developers/api),  
which does not require an API key, so no additional configuration is needed.

