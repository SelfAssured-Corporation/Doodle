import type {
  Prominence,
  SemanticToken,
} from '../../../theme/semantic-tokens/types'
import { formatSemanticTokenValue } from '../../../tokens'

/**
 * This module is a collection of danger tokens that are used to generate the theme.
 * @module dangerTokens
 */

type Prominences = Exclude<Prominence, 300>

export interface ContractDangerTokens {
  readonly danger: {
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly border: {
      readonly initial: object
    }
    readonly ghost: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly surface: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
    }
    readonly text: {
      readonly [P in Prominences]: object
    }
  }
}

export const contractDangerTokens: ContractDangerTokens = {
  danger: {
    bg: {
      initial: {},
      hover: {},
      active: {},
    },

    border: {
      initial: {},
    },

    ghost: {
      initial: {},
      hover: {},
      active: {},
    },

    surface: {
      initial: {},
      100: {},
      200: {},
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

export interface DangerTokens {
  readonly danger: {
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly ghost: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly text: {
      readonly [P in Prominences]: SemanticToken
    }
  }
}

export const dangerTokens: DangerTokens = {
  danger: {
    bg: {
      initial: formatSemanticTokenValue(
        'background.danger.initial',
        'selfAssured',
      ),
      hover: formatSemanticTokenValue('background.danger.hover', 'selfAssured'),
      active: formatSemanticTokenValue(
        'background.danger.active',
        'selfAssured',
      ),
    },

    border: {
      initial: formatSemanticTokenValue('border.danger.initial', 'selfAssured'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.danger.initial', 'selfAssured'),
      hover: formatSemanticTokenValue('ghost.danger.hover', 'selfAssured'),
      active: formatSemanticTokenValue('ghost.danger.active', 'selfAssured'),
    },

    surface: {
      initial: formatSemanticTokenValue(
        'surface.danger.initial',
        'selfAssured',
      ),
      100: formatSemanticTokenValue('surface.danger.100', 'selfAssured'),
      200: formatSemanticTokenValue('surface.danger.200', 'selfAssured'),
    },

    text: {
      initial: formatSemanticTokenValue('text.danger.initial', 'selfAssured'),
      100: formatSemanticTokenValue('text.danger.100', 'selfAssured'),
      200: formatSemanticTokenValue('text.danger.200', 'selfAssured'),
      inverse: formatSemanticTokenValue('text.danger.inverse', 'selfAssured'),
      static: formatSemanticTokenValue('text.danger.static', 'selfAssured'),
    },
  },
}
