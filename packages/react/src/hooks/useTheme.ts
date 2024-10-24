'use client'

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import {
  type ColorModes,
  type CustomThemes,
  type DefaultThemes,
  type ThemeContextValue,
} from '../context/theme'

/**
 * This module provides a hook for using the theme.
 * @module
 */

export const THEME_KEY = 'cerberus-theme'
export const MODE_KEY = 'cerberus-mode'

export interface UseThemeOptions<T extends string = DefaultThemes> {
  /**
   * Whether to cache the theme in local storage.
   */
  cache?: boolean
  /**
   * Called when the theme is updated.
   */
  updateTheme?: (theme: T) => void
  /**
   * Called when the color mode is updated.
   */
  updateMode?: (mode: ColorModes) => void
}

/**
 * Provides a hook for using the theme for a single instance of the application.
 * @see https://cerberus.digitalu.design/react/use-theme
 * @param defaultTheme The default theme.
 * @param defaultColorMode The default color mode.
 * @param options Additional options.
 */
export function useTheme<C extends string = DefaultThemes>(
  defaultTheme: CustomThemes<C> = 'cerberus',
  defaultColorMode: ColorModes = 'light',
  options: UseThemeOptions<C> = {},
): ThemeContextValue<C> {
  const { updateMode, updateTheme, cache } = options
  const [theme, setTheme] = useState<CustomThemes<C>>(defaultTheme)
  const [colorMode, setColorMode] = useState<ColorModes>(defaultColorMode)

  const handleThemeChange = useCallback(
    (newTheme: C) => {
      setTheme(newTheme)
      updateTheme?.(newTheme)
    },
    [updateTheme],
  )

  const handleColorModeChange = useCallback(
    (newMode: ColorModes) => {
      setColorMode(newMode)
      updateMode?.(newMode)
    },
    [updateMode],
  )

  useLayoutEffect(() => {
    const theme = localStorage.getItem(THEME_KEY)
    if (theme) {
      setTheme(theme as CustomThemes<C>)
    }
  }, [])

  useLayoutEffect(() => {
    const mode = localStorage.getItem(MODE_KEY)
    if (mode) {
      setColorMode(mode as ColorModes)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.dataset.pandaTheme = theme

    if (cache) {
      localStorage.setItem(THEME_KEY, theme)
    }
  }, [theme, cache])

  useEffect(() => {
    const root = document.documentElement

    if (colorMode === 'system') {
      root.dataset.colorMode = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
    } else {
      root.dataset.colorMode = colorMode
    }

    if (cache) {
      localStorage.setItem(MODE_KEY, colorMode)
    }
  }, [colorMode, cache])

  return useMemo(
    () => ({
      theme,
      mode: colorMode,
      updateTheme: handleThemeChange,
      updateMode: handleColorModeChange,
    }),
    [theme, colorMode, handleThemeChange, handleColorModeChange],
  )
}
