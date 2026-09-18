# 🎬 Movie Explorer

A modern, responsive, and feature-rich web application for discovering world cinema, television series, and trending shows. Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router DOM 7**, powered by the open **TVMaze API**.

---

## ✨ Features

- **🍿 Featured Hero Showcase**: Interactive trending movie poster carousel featuring auto-play rotation, hover pause, star ratings, and thumbnail navigation.
- **🔍 Real-Time Search & Filtering**: Instant client-side show search with custom empty-state fallbacks and quick reset controls.
- **🎬 Detailed Show Modals**: Clickable show cards opening dynamic modal popups with show summaries, release years, language, runtime, and official site links.
- **📱 Fully Responsive Design**: Mobile-friendly navigation header with hamburger toggle, sticky glassmorphic navbar, and multi-column grid layouts (`1 to 5 columns`).
- **🎨 Glassmorphic UI & Smooth Animations**: Warm ambient glows, backdrop blur effects, rating badges, and card hover elevations.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Data Source**: [TVMaze REST API](https://www.tvmaze.com/api)

---

## 📁 Project Structure

```text
MovieExplorer/
├── public/
├── src/
│   ├── assets/             # Brand logos & static assets
│   ├── components/
│   │   ├── AboutUs.jsx     # Platform values & feature cards
│   │   ├── Error.jsx       # Error boundary fallback display
│   │   ├── Footer.jsx      # Footer links & copyright bar
│   │   ├── Hero.jsx        # Landing hero banner & poster carousel
│   │   ├── Loading.jsx     # Loading spinner component
│   │   ├── Logo.jsx        # Brand logo component
│   │   ├── MovieCard.jsx   # Reusable show card with hover overlays
│   │   ├── NavBar.jsx      # Responsive sticky navigation bar
│   │   └── SearchBar.jsx   # Input search bar with clear control
│   ├── pages/
│   │   ├── About.jsx       # About Us page view
│   │   ├── Home.jsx        # Home page combining Hero & AboutUs
│   │   ├── MovieDetails.jsx# Dynamic movie modal component
│   │   └── Movies.jsx      # Movies page grid & live search
│   ├── router/
│   │   └── router.jsx      # React Router browser routes definition
│   ├── index.css           # Tailwind v4 import & custom theme setup
│   ├── main.jsx            # React root mounting & RouterProvider
│   └── Root.jsx            # Root layout wrapper with Outlet & NavBar
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/noboKumar/MovieExplorer.git
   cd MovieExplorer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` to explore the application.

---

## 📦 Scripts

- `npm run dev` — Starts local Vite development server
- `npm run build` — Builds production-ready static bundle
- `npm run preview` — Previews production build locally
- `npm run lint` — Runs ESLint code quality checks

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
