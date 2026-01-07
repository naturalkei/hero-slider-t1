import './vite.css'

import viteLogo from '/vite.svg'
import clsx from 'clsx'
import React, { useState } from 'react'

import reactLogo from '../assets/react.svg'

const CustomLink = ({ href, target, className, children }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a href={href} target={target} className={clsx([
      'font-medium no-underline text-[#646cff]',
      'hover:text-[#535bf2]',
      'dark:hover:text-[#535bf2]',
      '[@media(prefers-color-scheme:light)]:hover:text-[#747bff]',
      className
    ])}>
      {children}
    </a>
  )
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-[1280px] mx-auto p-8 text-center">
        <div className='flex items-center justify-center mb-14'>
          <CustomLink
            href="https://vite.dev"
            target="_blank"
            className="app-link"
          >
            <img
              src={viteLogo}
              className="h-24 px-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
              alt="Vite logo"
            />
          </CustomLink>
          <CustomLink
            href="https://react.dev"
            target="_blank"
            className="app-link"
          >
            <img
              src={reactLogo}
              className={clsx([
                'h-24 px-6',
                'will-change-[filter] transition-[filter]',
                'duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]',
                'animate-[spin_20s_linear_infinite] motion-reduce:animate-none'
              ])}
              alt="React logo"
            />
          </CustomLink>
        </div>
        <h1 className="my-8 text-[3.2em] leading-[1.1]">Vite + React</h1>
        <div className="p-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className={clsx([
              'app-button',
              'rounded-lg border border-transparent',
              'px-[1.2em] py-[0.6em]',
              'text-base font-medium font-sans',
              'bg-[#1a1a1a]',
              'cursor-pointer',
              'transition-[border-color] duration-[0.25s]',
              'hover:border-[#646cff]'
            ])}
          >
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
    </>
  )
}
