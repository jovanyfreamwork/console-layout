export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'en',
  themes: ['default', 'dark'],
  theme: 'default'
})

export const mutations = {
  setLocale(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  setTheme(state, theme) {
    if (state.themes.includes(theme)) {
      state.theme = theme
    }
  },
}
