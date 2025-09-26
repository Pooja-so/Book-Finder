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
- **Book Search:** Search by **title** or **author** using real-time results.
- **Advanced Filters:**
  - Filter by **First Publish Year**
  - Search by **Language** (e.g.,  English, French, Germany)
  - Option to display only **Full-Text Available** books
- **Book List Display:**
  - Responsive grid with book cover, title, authors, language, and publication year
  - Graceful fallback for missing cover images
- **Responsive UI:** Optimized for desktop and mobile devices
- **Error Handling:** Toast notifications for empty queries, network issues, or no results

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

