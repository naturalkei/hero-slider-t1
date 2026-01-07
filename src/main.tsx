import './styles/root.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import { ViteReact } from './sample/vite'

const AirpodsPro3 = () => <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 text-2xl font-semibold">Airpods Pro 3</div>
const MacBookPro = () => <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 text-2xl font-semibold">MacBook Pro</div>

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
