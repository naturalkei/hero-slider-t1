export const ThemeMode = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export type ThemeModeType = (typeof ThemeMode)[keyof typeof ThemeMode]
