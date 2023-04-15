import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueToastr from "vue-toastr";
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';
import VueI18n from 'vue-i18n'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueTruncate from 'vue-truncate-filter'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// register jw pagination component globally
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

Vue.use(VueSweetalert2)
.use(VueToastr)
.use(VueFileAgent)
.use(BootstrapVue)
.use(VueTruncate)
Vue.config.productionTip = false

const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency',
      currency: 'USD'
    }
  },
  'ng-NG': {
    currency: {
      style: 'currency',
      currency: 'NGN',
      currencyDisplay: 'symbol'
    }
  }
}
const i18n = new VueI18n({
  numberFormats
})
// Vue.use(VueI18n)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
