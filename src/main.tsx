import './styles/root.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from './components/Navbar'
import ViteReact from './sample/vite'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <ViteReact />
  </StrictMode>,
)
