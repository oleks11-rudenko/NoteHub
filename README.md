# 📝 NoteHub

**NoteHub** is a clean and intuitive web application for managing your personal notes. The project
allows users to create, organize, and store their thoughts, tasks, and ideas in one place with ease
and efficiency.

🔗 **Live Demo:** https://note-hub-olive.vercel.app/

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [Author](#-author)

---

## 📖 About

This application is designed to help users keep their digital workspace organized. The main goal is
to provide a distraction-free environment where users can quickly jot down ideas, edit existing
notes, and manage their daily tasks.

The project is built using modern frontend technologies, demonstrating proficiency in state
management, component-based architecture, and responsive design.

---

## ✨ Features

### 🏠 Dashboard

- **Note Overview:** A card layout displaying all current notes.
- **Search & Filter:** Real-time filtering with debounce of notes by title or content keywords.

### 📝 Note Management

- **Create:** Quickly add new notes with a title, body text and tag.
- **Delete:** Remove unwanted notes to keep the workspace clean.

### ❤️ Persistence

- **Local Storage:** All data is persisted locally, so your notes remain safe even after refreshing
  the page.

### 🌓 UI/UX

- **Responsive Design:** Optimized for mobile, tablet, and desktop screens.
- **Interactive UI:** Smooth transitions and hover effects for better user experience.

---

## 🛠 Tech Stack

The project is built on **Next.js** using **TypeScript**.

- **Core:** Next.js 14+, React
- **Language:** TypeScript
- **State Management:** Zustand (with `persist` middleware for favorites)
- **Backend / API:** GoIT (custom Backend)
- **Styling:** CSS Modules
- **Forms:** Default forms
- **HTTP Client:** Axios
- **UI Components:** Custom reusable components, SVG icons
- **Deployment:** Vercel

---

## 🚀 Installation & Setup

To run the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/oleks11-rudenko/NoteHub.git
```

2. **Navigate to the project directory:**

```bash
cd travel-trucks
```

3. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

4. **Create .env file in root directory next to the /app folder and specify there:**

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

5. **Start the development server:**

```bash
npm run dev
```

6. **Open in browser:**

Visit [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```bash
NoteHub/
├── app/        # Next.js App Router (pages and layouts)
├── components/ # UI components
├── lib/        # Utility functions (API requests, formatting) and Zustand store (state management)
├── partials/   # Static image for OpenGraph
├── types/      # TypeScript interfaces and types
└── utils/      # Other utilities
```

---

## 👨‍💻 Author

**Oleksii Rudenko**

- GitHub: [https://github.com/oleks11-rudenko](https://github.com/oleks11-rudenko)

---

⭐️ Thank you for checking out the project! If you like it, please give it a star on GitHub.
