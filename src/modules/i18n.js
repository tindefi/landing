import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('@/locales/*.json')
  ).map(([key, value]) => {
    const json = key.endsWith('.json')
    return [key.slice(11, json ? -5 : -4), value.default]
  }),
)

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'en',
  warnHtmlMessage: false,
  fallbackLocale: 'en',
  messages,
})

export { i18n }