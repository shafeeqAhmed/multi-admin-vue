/* eslint-disable eol-last */
/* eslint-disable indent */
import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import JsonExcel from 'vue-json-excel'
import VWave from 'v-wave'
// import axios from '@axios'
import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'

// Global Components
import './global-components'

// DatePicker

// 3rd party plugins
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'

// Axios Mock Adapter
import '@/@fake-db/db'
// register mixin file
// eslint-disable-next-line import/extensions
import helpersMixin from './plugins/helperMixins'

Vue.prototype.$fronturl = 'https://multijunction.co.za/'

Vue.use(VWave, {
        // eslint-disable-next-line indent
        startingOpacity: 0.6,
        easing: 'ease-in',
    })
    // BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.mixin(helpersMixin)

Vue.component('downloadExcel', JsonExcel)

// Composition API
Vue.use(VueCompositionAPI)

// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require('@core/assets/fonts/feather/iconfont.css') // For form-wizard

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

//   axios.get('/admin/website/general').then(response => {
//     const responseData = response.data
//     const { settings } = response.data.data
//     if (responseData.status) {
//         document.getElementById('front_website_title').text = settings.front_website_name
//         document.getElementById('front_icon').href = settings.site_icon
//     } else {
//         this.errorAlert(responseData.message)
//     }
//     })
//     .catch(error => {
//        console.log(error.response)
//     })

    // axios.get('/admin/website/custom_script').then(response => {
    //     const responseData = response.data
    //     const { settings } = response.data.data
    //     if (responseData.status) {
    //         document.getElementById('header_styling').href = settings.header_custom_script
    //         localStorage.setItem('footer_custom_script', settings.footer_custom_script)
    //     } else {
    //         this.errorAlert(responseData.message)
    //     }
    //     })
    //     .catch(error => {
    //         console.log(error.response)
    //     })

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')