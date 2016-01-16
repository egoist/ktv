import koa from 'koa'
import {root} from './helpers/common'

const config = require(root('config'))
const app = koa()

app.use(function* () {
	this.body = 'KTV saikou!'
})

app.listen(3999, () => {
	console.log(`KTV is here at http://localhost:${config.server.port}`)
})
