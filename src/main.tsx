import './styles/root.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import { AirpodsPro3 } from './sample/airpods-pro-3'
import { MacBookPro } from './sample/macbook-pro'
import { ViteReact } from './sample/vite'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ViteReact />} />
        <Route path="/airpods-pro-3" element={<AirpodsPro3 />} />
        <Route path="/macbook-pro" element={<MacBookPro />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
