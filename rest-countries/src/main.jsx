import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { CountriesContextProvider } from './contexts/CountriesContext'

import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountriesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountriesContextProvider>
  </React.StrictMode>,
)


