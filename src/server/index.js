import koa from 'koa'
import {root} from './helpers/common'

export default function (argv) {
	const config = require(root('config'))
	const app = koa()

	app.use(function* () {
		this.body = 'KTV saikou!'
	})

	const port = argv.port || config.server.port
	app.listen(port, () => {
		console.log(`KTV is here at http://localhost:${port}`)
	})
}
