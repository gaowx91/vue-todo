// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'Vuex'
Vue.use(Vuex);
import { STORAGE_KEY } from './store/index'

import store from './store'

Vue.config.productionTip = false

store.subscribe((mutation, { todoList })=> {
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList))
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
