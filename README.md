# 📝 Hyper Notes

A modern note-taking application built with React

## 🚀 Live Demo
👉 [View Live Site](https://note-vault-eight.vercel.app)

## 📁 Project Structure

```
note-vault/
├── public/
│   └── vite.svg                  # Vite logo
├── src/
│   ├── assets/
│   │   ├── logo.jpeg            # App logo
│   │   └── react.svg            # React logo
│   ├── components/
│   │   ├── Navbar/
│   │   │   └── index.jsx        # Top navigation bar
│   │   ├── NotesCard/
│   │   │   └── index.jsx        # Individual note card component
│   │   └── SideBar/
│   │       └── index.jsx        # Left navigation sidebar
│   ├── context/
│   │   └── notes-context.js     # Global state management
│   ├── pages/
│   │   ├── Archive/
│   │   │   └── index.js         # Archived notes view
│   │   ├── Bin/
│   │   │   └── index.js         # Deleted notes with restore
│   │   ├── Home/
│   │   │   └── index.js         # Main notes dashboard
│   │   └── Important/
│   │       └── index.js         # Important/starred notes
│   ├── reducers/
│   │   └── notesReducer.js      # State update logic
│   ├── utils/
│   │   ├── App.css              # Global styles
│   │   ├── App.js               # Main app component
│   │   ├── findNotesInArchive.js # Archive utility functions
│   │   └── index.js             # Utility exports
│   ├── index.css                # Global CSS styles
│   └── main.jsx                 # App entry point
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── README.md                    # Project documentation
└── vite.config.js              # Vite build configuration
```

### Key Components
- **NotesCard**: Displays individual notes with action buttons
- **Navbar**: Contains app branding and top-level navigation
- **SideBar**: Main navigation between different note views
- **Context**: Manages global state using React Context + useReducer
- **Reducers**: Handles all state mutations (create, update, delete, etc.). Create, organize, pin, and archive your notes with an intuitive interface.


## ✨ Features

### Core Functionality
- 📝 **Create & Edit Notes**: Add notes with title and content
- 📌 **Pin Notes**: Keep important notes at the top of your list
- ⭐ **Mark Important**: Star notes to highlight them as important
- 🗑️ **Delete & Restore**: Move notes to bin with restore functionality
- 📦 **Archive System**: Organize completed or old notes

### User Experience
- 🎨 **Modern UI**: Clean, professional design with gradients and shadows
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- 🔍 **Easy Navigation**: Intuitive sidebar navigation between sections
- ⚡ **Fast Performance**: Optimized with Vite for quick loading
- 🎯 **Smart Organization**: Separate views for Home, Important, Archive, and Bin

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

### Navigation
- **Home**: View all your active notes in a grid layout
- **Important**: See all notes marked with a star
- **Archive**: Access archived notes for reference
- **Bin**: View deleted notes with restore options

### Note Management
1. **Create Notes**: Enter title and content in the input area, click the + button
2. **Pin Notes**: Click the pin icon (📌) to keep notes at the top
3. **Mark Important**: Click the star icon (⭐) to highlight important notes
4. **Archive**: Click archive icon (📦) to organize completed notes
5. **Delete**: Click delete icon (🗑️) to move notes to bin
6. **Restore**: From bin, use restore icon to bring notes back

### Additional Actions
- **Restore All**: Bulk restore all notes from bin
- **Empty Bin**: Permanently delete all notes in bin
- **Responsive Grid**: Notes automatically adjust to screen size

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




