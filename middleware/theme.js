export default function ({app, route, store}) {
  const themeInCookies = app.$cookies.get("theme")
  const theme = route.query.theme || themeInCookies
  if (themeInCookies !== theme) {
    app.$cookies.set("theme", theme)
  }
  if (store.state.theme === theme) return
  store.commit('setTheme', theme)
}
