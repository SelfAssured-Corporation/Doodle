import type { SemanticToken } from '../../../theme/semantic-tokens/types'
import { formatSemanticTokenValue } from '../../../tokens'

/**
 * This module is a collection of action tokens that are used to generate the theme.
 * @module secondaryActionTokens
 */

export type SecondaryActionProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly active: SemanticToken
}
export type SecondaryActionNavProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly visited: SemanticToken
}

export interface ContractSecondaryActionTokens {
  readonly secondaryAction: {
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly border: {
      readonly initial: object
      readonly 100: object
    }
    readonly ghost: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly navigation: {
      readonly initial: object
      readonly hover: object
      readonly visited: object
    }
    readonly text: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
      readonly static: object
    }
  }
}

export const contractSecondaryActionTokens: ContractSecondaryActionTokens = {
  secondaryAction: {
    bg: {
      initial: {},
      hover: {},
      active: {},
    },

    border: {
      initial: {},
      100: {},
    },

    ghost: {
      initial: {},
      hover: {},
      active: {},
    },

    navigation: {
      initial: {},
      hover: {},
      visited: {},
    },

    text: {
      initial: {},
      100: {},
      200: {},
      static: {},
    },
  },
}

export interface SecondaryActionTokens {
  readonly secondaryAction: {
    readonly bg: SecondaryActionProminences
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
    }
    readonly ghost: SecondaryActionProminences
    readonly navigation: SecondaryActionNavProminences
    readonly text: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
      readonly static: SemanticToken
    }
  }
}

export const secondaryActionTokens: SecondaryActionTokens = {
  secondaryAction: {
    bg: {
      initial: formatSemanticTokenValue(
        'background.secondary-action.initial',
        'selfAssured',
      ),
      hover: formatSemanticTokenValue(
        'background.secondary-action.hover',
        'selfAssured',
      ),
      active: formatSemanticTokenValue(
        'background.secondary-action.active',
        'selfAssured',
      ),
    },

    border: {
      initial: formatSemanticTokenValue(
        'border.secondary-action.initial',
        'selfAssured',
      ),
      100: formatSemanticTokenValue(
        'border.secondary-action.100',
        'selfAssured',
      ),
    },

    ghost: {
      initial: formatSemanticTokenValue(
        'ghost.secondary-action.initial',
        'selfAssured',
      ),
      hover: formatSemanticTokenValue(
        'ghost.secondary-action.hover',
        'selfAssured',
      ),
      active: formatSemanticTokenValue(
        'ghost.secondary-action.active',
        'selfAssured',
      ),
    },

    navigation: {
      initial: formatSemanticTokenValue(
        'text.secondary-action.navigation.initial',
        'selfAssured',
      ),
      hover: formatSemanticTokenValue('text.secondary-action.navigation.hover'),
      visited: formatSemanticTokenValue(
        'text.secondary-action.navigation.visited',
        'selfAssured',
      ),
    },

    text: {
      initial: formatSemanticTokenValue(
        'text.secondary-action.initial',
        'selfAssured',
      ),
      100: formatSemanticTokenValue('text.secondary-action.100', 'selfAssured'),
      200: formatSemanticTokenValue('text.secondary-action.200', 'selfAssured'),
      static: formatSemanticTokenValue(
        'text.secondary-action.static',
        'selfAssured',
      ),
    },
  },
}