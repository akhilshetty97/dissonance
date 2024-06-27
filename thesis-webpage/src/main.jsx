import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import MobHome from './MobHome.jsx'
import './index.css'

const isMobile = window.innerWidth < 768;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isMobile ? <MobHome /> : null}
    {!isMobile ? <Home /> : null}
  </React.StrictMode>
);