/**
 * This module is a collection of gradient tokens palette for the lifeAwesome theme.
 * @module gradientTokens
 */

import type { SemanticToken } from '../../../theme/semantic-tokens/types'
import { formatSemanticTokenValue } from '../../../tokens'

export interface GradientTokens {
  readonly gradient: {
    readonly ['charon-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['charon-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['nyx-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['nyx-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['amphiaraus-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['amphiaraus-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['styx-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['styx-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['thanatos-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['thanatos-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['hades-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['hades-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['asphodel-light']: {
      readonly text: {
        initial: SemanticToken
      }
    }
    readonly ['asphodel-dark']: {
      readonly text: {
        initial: SemanticToken
      }
    }
  }
}

export const gradientTokens: GradientTokens = {
  gradient: {
    'charon-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.charon-light.text',
          'lifeAwesome',
        ),
      },
    },
    'charon-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.charon-dark.text',
          'lifeAwesome',
        ),
      },
    },
    'nyx-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.nyx-light.text',
          'lifeAwesome',
        ),
      },
    },
    'nyx-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.nyx-dark.text',
          'lifeAwesome',
        ),
      },
    },
    'amphiaraus-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.amphiaraus-light.text',
          'lifeAwesome',
        ),
      },
    },
    'amphiaraus-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.amphiaraus-dark.text',
          'lifeAwesome',
        ),
      },
    },
    'styx-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.styx-light.text',
          'lifeAwesome',
        ),
      },
    },
    'styx-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.styx-dark.text',
          'lifeAwesome',
        ),
      },
    },
    'thanatos-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.thanatos-light.text',
          'lifeAwesome',
        ),
      },
    },
    'thanatos-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.thanatos-dark.text',
          'lifeAwesome',
        ),
      },
    },
    'hades-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.hades-light.text',
          'lifeAwesome',
        ),
      },
    },
    'hades-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.hades-dark.text',
          'lifeAwesome',
        ),
      },
    },
    'asphodel-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.asphodel-light.text',
          'lifeAwesome',
        ),
      },
    },
    'asphodel-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.asphodel-dark.text',
          'lifeAwesome',
        ),
      },
    },
  },
}
