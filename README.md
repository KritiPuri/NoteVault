# 📝 Hyper Notes

A modern note-taking application built with React and Vite. Create, organize, pin, and archive your notes with an intuitive interface.

![React](https://img.shields.io/badge/React-18+-blue?style=flat&logo=react) ![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat&logo=vite) ![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

- 📝 Create and manage notes
- 📌 Pin important notes
- 📦 Archive system for organization
- 🎨 Modern responsive UI
- ⚡ Fast performance with Vite

## � Quick Start

```bash
# Clone the repository
git clone https://github.com/KritiPuri/NoteVault.git
cd NoteVault/note-vault

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

## �️ Tech Stack

- React 19 + Vite 7
- Tailwind CSS 4
- React Router DOM
- Context API + useReducer
- Material Icons

## 📋 Usage

1. **Create Notes**: Enter title and content, click the + button
2. **Pin Notes**: Click the pin icon to keep notes at top
3. **Archive**: Click archive icon to organize notes
4. **Navigate**: Use sidebar to switch between Home and Archive

## � Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Main page components
├── context/       # State management
├── reducers/      # State logic
└── utils/         # Helper functions
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/name`)
5. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Kriti Puri](https://github.com/KritiPuri)+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
