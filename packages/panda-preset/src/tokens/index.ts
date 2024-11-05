import primitiveColors from './data/primitive-colors.base.json' with { type: 'json' }
import semanticColorsDark from './data/semantic-colors.cerberus-dark-mode.json' with { type: 'json' }
import semanticColorsLight from './data/semantic-colors.cerberus-light-mode.json' with { type: 'json' }
import acheronDarkMode from './data/semantic-colors.acheron-dark-mode.json' with { type: 'json' }
import acheronLightMode from './data/semantic-colors.acheron-light-mode.json' with { type: 'json' }
import selfAssuredDarkMode from './data/semantic-colors.selfassured-dark-mode.json' with { type: 'json' }
import selfAssuredLightMode from './data/semantic-colors.selfassured-light-mode.json' with { type: 'json' }
import type { RawThemes, SemanticToken, Token } from '../theme'

/**
 * This module is a collection of raw tokens that are used to generate the theme.
 * @module rawTokens
 */

export interface RawTokens {
  primitives: {
    colors: typeof primitiveColors
  }
  semanticColors: {
    dark: typeof semanticColorsDark
    light: typeof semanticColorsLight
  }
}

export const rawTokens: RawTokens = {
  primitives: {
    colors: primitiveColors,
  },
  semanticColors: {
    dark: semanticColorsDark,
    light: semanticColorsLight,
  },
}

// used in the docs
export const semanticColors = rawTokens.semanticColors.dark
export const colors = rawTokens.primitives.colors

export const primitiveColorTokens = rawTokens.primitives.colors
export const darkTokens = semanticColorsDark
export const lightTokens = semanticColorsLight

// additional themes
export const acheronDarkTokens = acheronDarkMode
export const acheronLightTokens = acheronLightMode

// additional themes
export const selfAssuredDarkTokens = selfAssuredDarkMode
export const selfAssuredLightTokens = selfAssuredLightMode

export const themeTokens = {
  cerberus: {
    dark: darkTokens,
    light: lightTokens,
  },
  doodle: {
    dark: darkTokens,
    light: lightTokens,
  },
  acheron: {
    dark: acheronDarkTokens,
    light: acheronLightTokens,
  },
  selfAssured: {
    dark: selfAssuredDarkTokens,
    light: selfAssuredLightTokens,
  },
}

export const themeGradients = {
  acheron: {
    dark: {
      ...acheronDarkTokens.gradient,
    },
    light: {
      ...acheronLightTokens.gradient,
    },
  },
  cerberus: {
    dark: {
      ...darkTokens.gradient,
    },
    light: {
      ...lightTokens.gradient,
    },
  },
}

export type PrimitiveCollection = RawTokens['primitives']['colors']

// helpers

export type FigmaToken = {
  $type: 'color'
  $value: string
  $description: string
  $extensions: {
    'com.figma': {
      hiddenFromPublishing: boolean
      scopes: ['FRAME_FILL', 'SHAPE_FILL', 'STROKE_COLOR']
      codeSyntax: object
    }
  }
}

export type PandaColor = {
  [theme: string]: {
    [palette: string]: {
      [prominence: string | number]: {
        value: string
      }
    }
  }
}

export interface PandaGradientColor {
  [theme: string]: {
    [mode: string]: {
      [gradient: string]: {
        value: string
      }
    }
  }
}

export interface PandaGradient {
  [theme: string]: {
    [mode: string]: {
      [gradient: string]: {
        value: PandaGradientValue
      }
    }
  }
}

export interface PandaGradientValue {
  type: 'linear' | 'radial'
  placement: string | number
  stops:
    | Array<{
        color: string
        position: number
      }>
    | Array<string>
}

export function formatPrimitiveColors(): PandaColor {
  // primitive colors includes "spacing"
  const { acheron, cerberus } = primitiveColors
  const onlyThemePrimitiveColors = { acheron, cerberus }

  // format the primitive colors to match the Panda CSS format
  return Object.entries(onlyThemePrimitiveColors).reduce(
    (acc, [theme, palette]) => {
      acc[theme] = Object.entries(palette).reduce(
        (acc, [palette, prominence]) => {
          acc[palette] = Object.entries(prominence).reduce(
            (acc, [prominence, value]) => {
              acc[prominence] = { value: value.$value }
              return acc
            },
            {} as PandaColor[string][string],
          )
          return acc
        },
        {} as PandaColor[string],
      )
      return acc
    },
    {} as PandaColor,
  )
}

export function formatPrimitiveGradients(): PandaGradient {
  // gradient tokens are nested in the semantic-tokens
  const { acheron, cerberus } = themeGradients
  const onlyThemePrimitiveGradients = { acheron, cerberus }

  // format the primitive colors to match the Panda CSS format
  return Object.entries(onlyThemePrimitiveGradients).reduce(
    (acc, [theme, palette]) => {
      acc[theme] = Object.entries(palette).reduce(
        (acc, [mode, gradients]) => {
          acc[mode] = Object.entries(gradients).reduce(
            (acc, [gradient, tokens]) => {
              acc[gradient] = {
                value: {
                  type: 'linear',
                  placement: 'to left bottom',
                  stops: [
                    getSemanticToken(tokens.start.$value),
                    getSemanticToken(tokens.end.$value),
                  ],
                },
              }
              return acc
            },
            {} as PandaGradient[string][string],
          )
          return acc
        },
        {} as PandaGradient[string],
      )
      return acc
    },
    {} as PandaGradient,
  )
}

/**
 * This function loops through each of our supported themes and returns the expected Panda CSS theme token format for each token.
 * @param path `background.neutral.initial`
 * @returns
 * ```typescript
 * {
 *  description: string
 *  value: {
 *   _cerberusTheme: {
 *    base: string
 *    darkMode: string
 *    lightMode: string
 *   }
 * }
 * ```
 */
export function formatSemanticTokenValue(
  path: string,
  theme?: RawThemes,
): SemanticToken {
  return {
    description: getNestedProperty(
      themeTokens.doodle,
      `dark.${path}.$description`,
    ),
    value: getThemeTokenByPath(path, theme),
  }
}

export function getThemeTokenByPath(
  path: string,
  theme?: RawThemes,
): SemanticToken['value'] {
  const darkPath = `dark.${path}.$value`
  const lightPath = `light.${path}.$value`
  return getThemeSelector(darkPath, lightPath, theme)
}

/**
 * This function returns the value of a token for a specific theme.
 * @param theme
 * @param darkPath
 * @param lightPath
 * @returns
 * ```typescript
 * {
 * _cerberusTheme: {
 *   base: string
 *   darkMode: string
 *   lightMode: string
 * }
 */
function getThemeSelector(
  darkPath: string,
  lightPath: string,
  theme?: RawThemes,
): Token {
  const themeKey = theme ?? 'cerberus'
  const darkToken = getSemanticToken(
    getNestedProperty(themeTokens[themeKey], darkPath),
  )
  const lightToken = getSemanticToken(
    getNestedProperty(themeTokens[themeKey], lightPath),
  )

  const tokenValue: Token = {
    base: darkToken,
    _darkMode: darkToken,
    _lightMode: lightToken,
  }

  return tokenValue
}

export type TokenObj =
  | (typeof themeTokens)['acheron']
  | (typeof themeTokens)['cerberus']

/**
 * This function returns the value of a nested property from an Object.
 * @param obj - The object to search
 * @param path -
 **/
function getNestedProperty(obj: TokenObj, path: string): string {
  const splitPath = path.split('.')
  return splitPath.reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return acc[key as keyof typeof acc]
    }
    return ''
  }, obj) as string
}

/**
 * This function updates the raw Figma $value to match the format which
 * PandaCSS expects for mapping to primitive colors.
 * @param path
 * @returns ```{colors.cerberus.success.70}```
 */
export function getSemanticToken(path: string): string {
  return `{colors.${path}}`
}
