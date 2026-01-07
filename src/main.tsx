import './styles/root.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ViteReact from './sample/vite'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ViteReact />
  </StrictMode>,
)
