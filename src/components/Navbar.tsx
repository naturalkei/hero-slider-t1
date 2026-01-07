import clsx from 'clsx'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { ThemeMode } from '../constants/theme'

const { LIGHT, DARK } = ThemeMode

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    // 초기값: localStorage와 현재 DOM 상태 모두 확인하여 정확한 상태 반환
    if (typeof window === 'undefined') return false

    const saved = localStorage.getItem('theme')
    const hasDarkClass = document.documentElement.classList.contains('dark')

    // localStorage에 저장된 값이 있으면 그것을 우선 사용
    if (saved === DARK || saved === LIGHT) {
      return saved === DARK
    }

    // 저장된 값이 없으면 현재 DOM 상태 확인
    return hasDarkClass
  })

  useEffect(() => {
    // 다크모드 상태에 따라 html 클래스 및 localStorage 업데이트
    const htmlElement = document.documentElement

    // 항상 React 상태에 맞춰 DOM을 업데이트 (초기 렌더링 포함)
    if (isDark) {
      htmlElement.classList.add(DARK)
    } else {
      htmlElement.classList.remove(DARK)
    }
    const theme = isDark ? DARK : LIGHT
    localStorage.setItem('theme', theme)
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div className={clsx([
      'fixed top-0 left-0 right-0 z-50',
      'bg-bg-light dark:bg-bg-dark',
      'border-b border-border-light dark:border-border-dark',
      'shadow-sm',
    ])}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold text-body-light dark:text-[rgba(255,255,255,0.87)]">
              Hero Slider
            </h1>
          </div>
          <button
            onClick={toggleDarkMode}
            className={clsx([
              'flex items-center justify-center w-10 h-10 rounded-lg',
              'cursor-pointer',
              'bg-button-light dark:bg-button-dark',
              'hover:bg-button-hover-light dark:hover:bg-button-hover-dark',
              'transition-colors duration-200',
            ])}
            aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-icon-dark" />
            ) : (
              <Moon className="w-5 h-5 text-icon-light" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
