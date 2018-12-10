// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRecaptcha from 'vue-grecaptcha'

Vue.config.productionTip = false

var VueFire = require('vuefire')
Vue.use(VueFire);

Vue.use(VueRecaptcha, {
  sitekey: '6LcvMzQUAAAAAPo1lL1lm43y2OweJKByYbWkoLTz'
})

export const bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
