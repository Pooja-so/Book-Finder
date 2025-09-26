# 📚 Book Finder

**Book Finder** is a modern, responsive **book search web application** built with React and Tailwind CSS.  
It allows users to explore the Open Library database, search for books by **title** or **author**, and refine results with **advanced filters** such as **publish year**, **language**, and **full-text availability**.  
The app provides a clean UI, smooth interactions, and an intuitive browsing experience.

---

## 🌐 Deployed Link
[🔗 Live Demo](https://your-deployed-link.com)  
*(Replace with your actual deployed URL once hosted)*

---

## 🛠 Tech Stack
- **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (with utility-first classes)
- **State Management:** React Context API
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API:** [Open Library Search API](https://openlibrary.org/developers/api)

---

## ✨ Main Features
- 🔎 **Search Books:** Find books by **title** or **author** using the Open Library API.  
- 🧩 **Advanced Filters:**  
  - Filter results by **First Publish Year**  
  - Search by **Language Code** (e.g., `eng` for English, `fre` for French)  
  - Option to show **Full-Text Available** books only  
- 📖 **Book List Display:**  
  - Responsive grid layout displaying book cover, title, authors, language, and publication year.  
  - Graceful fallback when cover images are missing.  
- ⚡ **Responsive UI:** Optimized for both mobile and desktop devices.
- 🔔 **Error Handling:** Toast notifications for empty queries, network errors, or no results.

---

## ⚡ Installation and Setup

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

