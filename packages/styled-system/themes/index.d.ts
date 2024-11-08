/* eslint-disable */
export type ThemeName = 'doodleui' | 'arches' | 'selfassured' | 'lifeawesome'
export type ThemeByName = {
  doodleui: {
    id: string
    name: 'doodleui'
    css: string
  }
  arches: {
    id: string
    name: 'arches'
    css: string
  }
  selfassured: {
    id: string
    name: 'selfassured'
    css: string
  }
  lifeawesome: {
    id: string
    name: 'lifeawesome'
    css: string
  }
}

export type Theme<T extends ThemeName> = ThemeByName[T]

/**
 * Dynamically import a theme by name
 */
export declare function getTheme<T extends ThemeName>(
  themeName: T,
): Promise<ThemeByName[T]>

/**
 * Inject a theme stylesheet into the document
 */
export declare function injectTheme(
  el: HTMLElement,
  theme: Theme<any>,
): HTMLStyleElement
