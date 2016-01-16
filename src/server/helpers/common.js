import path from 'path'

export function root(fp) {
	return path.join(process.cwd(), fp)
}
