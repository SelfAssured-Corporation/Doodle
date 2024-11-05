import type { Metadata } from 'next'
import { Poppins, Recursive } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { type PropsWithChildren } from 'react'
import {
  ThemeProvider,
  type ColorModes,
  type DefaultThemes,
} from '@cerberus-design/react'
import { css, cx } from '@cerberus/styled-system/css'
import { getTheme } from '@/styled-system/themes'
import { base, openGraph } from './shared-metadata'
import { Nav } from './components/Nav'

import './globals.css'
import { setCookie } from './actions/cookies'
import { getCachedTheme } from './actions/theme'

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})
const recursive = Recursive({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-recursive',
})

export const metadata: Metadata = {
  title: 'Cerberus Design System',
  ...base,
  openGraph,
}

interface RootProps {}

export default async function RootLayout(props: PropsWithChildren<RootProps>) {
  const { themeName, colorModeName } = await getCachedTheme()
  const defaultThemeName = themeName || 'cerberus'
  const defaultColorModeName = colorModeName || 'light'
  const theme = defaultThemeName && (await getTheme(defaultThemeName))

  const handleUpdateTheme = async (theme: DefaultThemes) => {
    'use server'
    setCookie('theme', theme)
  }

  const handleUpdateMode = async (mode: ColorModes) => {
    'use server'
    setCookie('colorMode', mode)
  }

  return (
    <html
      className={cx(poppins.variable, recursive.variable)}
      lang="en"
      data-panda-theme={defaultThemeName}
      data-color-mode={defaultColorModeName}
    >
      <Analytics />
      {defaultThemeName && (
        <head>
          <style
            type="text/css"
            id={theme.id}
            dangerouslySetInnerHTML={{ __html: theme.css }}
          />
        </head>
      )}

      <body
        className={css({
          minW: '18.75rem',
          h: 'full',
        })}
      >
        <ThemeProvider
          defaultTheme={defaultThemeName as DefaultThemes}
          defaultColorMode={defaultColorModeName}
          updateTheme={handleUpdateTheme}
          updateMode={handleUpdateMode}
        >
          <Nav />
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  )
}
