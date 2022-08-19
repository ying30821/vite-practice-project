import { createI18n } from 'vue-i18n';
import tw from '../assets/languages/tw.json';
import en from '../assets/languages/en.json';


const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    tw,
    en,
  }
})

export default i18n
