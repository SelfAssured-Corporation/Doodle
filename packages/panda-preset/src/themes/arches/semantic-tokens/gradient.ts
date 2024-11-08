/**
 * This module is a collection of gradient tokens palette for the arches theme.
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
          'arches',
        ),
      },
    },
    'charon-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.charon-dark.text',
          'arches',
        ),
      },
    },
    'nyx-light': {
      text: {
        initial: formatSemanticTokenValue('gradient.nyx-light.text', 'arches'),
      },
    },
    'nyx-dark': {
      text: {
        initial: formatSemanticTokenValue('gradient.nyx-dark.text', 'arches'),
      },
    },
    'amphiaraus-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.amphiaraus-light.text',
          'arches',
        ),
      },
    },
    'amphiaraus-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.amphiaraus-dark.text',
          'arches',
        ),
      },
    },
    'styx-light': {
      text: {
        initial: formatSemanticTokenValue('gradient.styx-light.text', 'arches'),
      },
    },
    'styx-dark': {
      text: {
        initial: formatSemanticTokenValue('gradient.styx-dark.text', 'arches'),
      },
    },
    'thanatos-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.thanatos-light.text',
          'arches',
        ),
      },
    },
    'thanatos-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.thanatos-dark.text',
          'arches',
        ),
      },
    },
    'hades-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.hades-light.text',
          'arches',
        ),
      },
    },
    'hades-dark': {
      text: {
        initial: formatSemanticTokenValue('gradient.hades-dark.text', 'arches'),
      },
    },
    'asphodel-light': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.asphodel-light.text',
          'arches',
        ),
      },
    },
    'asphodel-dark': {
      text: {
        initial: formatSemanticTokenValue(
          'gradient.asphodel-dark.text',
          'arches',
        ),
      },
    },
  },
}
