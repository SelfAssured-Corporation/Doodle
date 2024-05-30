import type { CssKeyframes } from '@pandacss/types'

export function defineKeyframes<T extends CssKeyframes>(config: T) {
  return config
}

export const keyframes = defineKeyframes({
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  zoomIn: {
    '0%': {
      opacity: '0',
      transform: 'scale(0.8)',
    },
    '75%': {
      opacity: '0.5',
    },
    '100%': {
      opacity: '1',
      transform: 'scale(1)',
    },
  },
})
