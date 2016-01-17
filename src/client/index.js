import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * Apply Vue plugins
 */
Vue.use(VueRouter)

/**
 * Initial router
 */
import routes from './routes'
const router = new VueRouter()
router.map(routes)

/**
 * Start client
 */
import app from './app'
router.start(app, '#app')
