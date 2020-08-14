import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFilterDateParse from '@vuejs-community/vue-filter-date-parse';
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';
import CountryFlag from 'vue-country-flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.use(VueFilterDateParse);
Vue.use(VueFilterDateFormat);
Vue.component('country-flag', CountryFlag);
Vue.component('v-icon', Icon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

