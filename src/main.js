import {createApp} from 'vue'
import App from './App.vue'

import { languages } from './i18n'
import { defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'

const localStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)
const i18n = createI18n({
	legacy: false,
	locale: localStorageLang || defaultLocale,
	fallbackLocale: 'en',
	messages
})

createApp(App, {
	setup() {
		const {t, locale} = useI18n()
		return {t, locale}

	}
}).use(i18n).mount('#app')


