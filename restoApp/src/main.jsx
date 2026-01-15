import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './assets/styles/GlobalStyle.js'

createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <App />
  </>
)
