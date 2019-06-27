'use strict'

import Vue from 'vue'
import VuePtero from 'vue-ptero'
import VueRouter from 'vue-router'

import log from 'loglevel'

import 'normalize.css'
import './style.scss'

import { App } from './components'
import setupRouter from './router'

// -------------------------------------------------------------------

if (DEBUG) {
  log.setLevel('trace')
} else {
  log.setLevel('warn')
}

Vue.use(VuePtero, { target: document.body })
Vue.use(VueRouter)

// -------------------------------------------------------------------

export default new Vue({
  el: '.App',
  render: h => h(App),
  router: setupRouter(),
})

