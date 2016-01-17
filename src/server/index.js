/**
 * Load modules
 */
import koa from 'koa'
import router from './routes/router'
import {root} from './helpers/common'

/**
 * Expose server
 *
 * @param {Object} argv - arguments passed from cli or node.js api
 */
export default function (argv) {
	const config = require(root('config'))
	const app = koa()

	/**
	 * Apply router middleware
	 */
	app
		.use(router.routes())
		.use(router.allowedMethods())

	/**
	 * Start server at a known port
	 */
	const port = argv.port || config.server.port
	app.listen(port, () => {
		console.log(`KTV is here at http://localhost:${port}`)
	})
}
