import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contenedor from './Componentes/contenedor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contenedor />
  </StrictMode>,
)
