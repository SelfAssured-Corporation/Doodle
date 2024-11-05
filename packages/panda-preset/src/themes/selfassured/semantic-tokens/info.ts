import type {
  Prominence,
  SemanticToken,
} from '../../../theme/semantic-tokens/types'
import { formatSemanticTokenValue } from '../../../tokens'

/**
 * This module is a collection of info tokens that are used to generate the theme.
 * @module infoTokens
 */

type Prominences = Exclude<Prominence, 'inverse' | 300>

export interface ContractInfoTokens {
  readonly info: {
    readonly border: {
      readonly initial: object
    }
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
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

export const contractInfoTokens: ContractInfoTokens = {
  info: {
    border: {
      initial: {},
    },

    bg: {
      initial: {},
      hover: {},
      active: {},
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
      static: {},
    },
  },
}

export interface InfoTokens {
  readonly info: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
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

export const infoTokens: InfoTokens = {
  info: {
    border: {
      initial: formatSemanticTokenValue('border.info.initial', 'acheron'),
    },

    bg: {
      initial: formatSemanticTokenValue('background.info.initial', 'acheron'),
      hover: formatSemanticTokenValue('background.info.hover', 'acheron'),
      active: formatSemanticTokenValue('background.info.active', 'acheron'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.info.initial', 'acheron'),
      hover: formatSemanticTokenValue('ghost.info.hover', 'acheron'),
      active: formatSemanticTokenValue('ghost.info.active', 'acheron'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.info.initial', 'acheron'),
      100: formatSemanticTokenValue('surface.info.100', 'acheron'),
      200: formatSemanticTokenValue('surface.info.200', 'acheron'),
    },

    text: {
      initial: formatSemanticTokenValue('text.info.initial', 'acheron'),
      100: formatSemanticTokenValue('text.info.100', 'acheron'),
      200: formatSemanticTokenValue('text.info.200', 'acheron'),
      static: formatSemanticTokenValue('text.info.static', 'acheron'),
    },
  },
}
