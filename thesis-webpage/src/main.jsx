import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import MobHome from './MobHome.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="hidden md:block">
      <Home />
    </div>
    <div className="block md:hidden">
      <MobHome />
    </div>
  </React.StrictMode>,
)
