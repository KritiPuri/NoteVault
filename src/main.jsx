import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { NotesProvider } from './context/notes-context'
import './index.css'
import App from './utils/App.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NotesProvider>
        <App />
      </NotesProvider>
    </BrowserRouter>
  </StrictMode>,
)
