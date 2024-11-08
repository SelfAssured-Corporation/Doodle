import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { doodleUIPreset, doodleUIConfig } from '@doodleui/panda-preset'

export default defineConfig({
  ...doodleUIConfig,

  exclude: [],
  outdir: '.',

  clean: true,

  presets: [pandaPreset, doodleUIPreset],
})
