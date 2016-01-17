/**
 * Load npm modules
 */
import koaRouter from 'koa-router'
const router = koaRouter()

/**
 * Load home routes
 */
import home from './home'
router.get('/', home)

/**
 * Expose router for Koa to use as middleware
 */
export default router
