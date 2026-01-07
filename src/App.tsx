import viteLogo from '/vite.svg'
import { useState } from 'react'

import reactLogo from './assets/react.svg'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-[1280px] mx-auto p-8 text-center">
      <div className='flex items-center justify-center mb-14'>
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-24 px-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 px-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite] motion-reduce:animate-none"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="my-8">Vite + React</h1>
      <div className="p-8">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="my-8">
          Edit <code className="font-mono bg-[#1a1a1a] dark:bg-[#1a1a1a] px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
