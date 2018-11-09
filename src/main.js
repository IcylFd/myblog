import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/js/rem.js'
import '@/assets/css/reset.css'
import '@/assets/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),

}).$mount('#app')
