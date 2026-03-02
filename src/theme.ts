// src/theme.ts
export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme' // localStorage key

export function getSavedTheme(): Theme | null {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw === 'light' || raw === 'dark') return raw
  return null
}

export function getSystemTheme(): Theme {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getInitialTheme(): Theme {
  return getSavedTheme() ?? getSystemTheme()
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement // <html>
  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch (e) {
    
  }
}