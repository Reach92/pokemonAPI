import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Variable from './components/Variable.jsx'
import Contador from './components/Contador.jsx'
import PeticionApi from './components/PeticionApi.jsx'
import Pokemon from './components/Pokemon.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pokemon />
  </React.StrictMode>,
)
