import type {
  ActionNavProminences,
  ActionProminences,
} from '../../../theme/semantic-tokens/action'
import type { SemanticToken } from '../../../theme/semantic-tokens/types'
import { formatSemanticTokenValue } from '../../../tokens'

/**
 * This module is a collection of action tokens that are used to generate the theme.
 * @module actionTokens
 */

export interface ContractActionTokens {
  readonly action: {
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly border: {
      readonly initial: object
      readonly 100: object
      readonly focus: object
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
      readonly inverse: object
      readonly static: object
    }
  }
}

export const contractActionTokens: ContractActionTokens = {
  action: {
    bg: {
      initial: {},
      hover: {},
      active: {},
    },
    border: {
      initial: {},
      100: {},
      focus: {},
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
      inverse: {},
      static: {},
    },
  },
}

export interface ActionTokens {
  readonly action: {
    readonly bg: ActionProminences
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly focus: SemanticToken
    }
    readonly ghost: ActionProminences
    readonly navigation: ActionNavProminences
    readonly text: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
      readonly inverse: SemanticToken
      readonly static: SemanticToken
    }
  }
}

export const actionTokens: ActionTokens = {
  action: {
    bg: {
      initial: formatSemanticTokenValue(
        'background.action.initial',
        'selfAssured',
      ),
      hover: formatSemanticTokenValue('background.action.hover', 'selfAssured'),
      active: formatSemanticTokenValue(
        'background.action.active',
        'selfAssured',
      ),
    },

    border: {
      initial: formatSemanticTokenValue('border.action.initial', 'selfAssured'),
      100: formatSemanticTokenValue('border.action.100', 'selfAssured'),
      focus: formatSemanticTokenValue('border.action.focus', 'selfAssured'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.action.initial', 'selfAssured'),
      hover: formatSemanticTokenValue('ghost.action.hover', 'selfAssured'),
      active: formatSemanticTokenValue('ghost.action.active', 'selfAssured'),
    },

    navigation: {
      initial: formatSemanticTokenValue(
        'text.action.navigation.initial',
        'selfAssured',
      ),
      hover: formatSemanticTokenValue(
        'text.action.navigation.hover',
        'selfAssured',
      ),
      visited: formatSemanticTokenValue(
        'text.action.navigation.visited',
        'selfAssured',
      ),
    },

    text: {
      initial: formatSemanticTokenValue('text.action.initial', 'selfAssured'),
      100: formatSemanticTokenValue('text.action.100', 'selfAssured'),
      200: formatSemanticTokenValue('text.action.200', 'selfAssured'),
      inverse: formatSemanticTokenValue('text.action.inverse', 'selfAssured'),
      static: formatSemanticTokenValue('text.action.static', 'selfAssured'),
    },
  },
}
