import Vue from 'vue'
import App from './App.vue'

import VueI18n from 'vue-i18n'
import en from './i18n/en.json'
import fr from './i18n/fr.json'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)
Vue.use(VueI18n)
Vue.config.productionTip = false
import './assets/styles/tailwind.css'

const i18n = new VueI18n({
  locale: 'fr',
  messages: {
    en,
    fr
  }
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
