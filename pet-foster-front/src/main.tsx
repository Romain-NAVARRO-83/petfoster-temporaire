
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/css/bulma-no-dark-mode.css';
import './assets/css/petfoster.css'
import './assets/js/header.js'

createRoot(document.getElementById('root')!).render(
    <App />
)
