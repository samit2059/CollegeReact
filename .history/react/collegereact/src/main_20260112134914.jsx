import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import './index.css'
import App from './App.jsx'
import Navbar from './navbar.jsx'
// import Home from './Home.jsx'
// import { Second } from './Home.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar
    <App />
    {/* <Second /> */}
    {/* <Home />   */}
  </StrictMode>,
)
