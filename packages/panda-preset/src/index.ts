import {
  defineConfig,
  definePreset,
  type Config,
  type Preset,
} from '@pandacss/dev'
import { globalCss } from './globalCss'
import { conditions } from './conditions'
import { utilities } from './utilities'
import { patterns } from './patterns'
import { baseTheme, type RawThemes } from './theme'
import { archesTheme } from './themes/arches'
import { selfAssuredTheme } from './themes/selfassured'
import { lifeAwesomeTheme } from './themes/lifeawesome'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

export const supportedThemes: RawThemes[] = [
  'doodleui',
  'arches',
  'selfAssured',
  'lifeAwesome',
]

export const cerberusPreset: Preset = definePreset({
  name: 'cerberus',

  globalCss,
  conditions,
  utilities,
  patterns,

  // default theme: cerberus
  theme: baseTheme,

  // optional themes
  themes: {
    cerberus: baseTheme,
    arches: archesTheme,
    selfassured: selfAssuredTheme,
    lifeawesome: lifeAwesomeTheme,
  },

  // opt-into additional theme variants
  staticCss: {
    themes: ['cerberus', 'arches', 'selfAssured', 'lifeAwesome'],
  },
})

export const cerberusConfig: Config = defineConfig({
  preflight: true,
  prefix: 'cerberus',

  jsxFramework: 'react',
  jsxFactory: 'cerberus',

  outdir: 'styled-system',
  importMap: '@cerberus/styled-system',
})

export * from './conditions'
export * from './patterns'
export * from './utilities'
export * from './theme/keyframes'
export * from './theme/textStyles'
export * from './theme/tokens'
export * from './recipes'
export * from './theme-contract'
export * from './types'

export * from './recipes/shared/helpers'
export * from './recipes/shared/palettes'
export * from './recipes/shared/states'

export * from './theme/semantic-tokens/index'
export * as acheronTheme from './themes/arches/semantic-tokens/index'
export * as selfAssuredTheme from './themes/selfassured/semantic-tokens/index'
export * as lifeAwesomeTheme from './themes/lifeawesome/semantic-tokens/index'

export * from './tokens'
