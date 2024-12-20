import { baseTheme } from '../../theme'
import { defineTheme } from '../../theme-contract'
import { semanticTokens } from './semantic-tokens/config'

/**
 * This module contains the SelfAssured theme and configuration options.
 * @module
 */

export const selfAssuredTheme = defineTheme({
  ...baseTheme,
  semanticTokens,
})
