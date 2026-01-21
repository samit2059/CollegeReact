import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './navbar.jsx'
import Nav1 from './nav1.jsx'
// import Home from './Home.jsx'
// import { Second } from './Home.jsx'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    {/* <Navbar /> */}
    <Nav1 />,
    // <App />
    {/* <Second /> */}
    {/* <Home />   */}
  // </StrictMode>,
)
