import path from 'path'

/**
 * Return a file path based on the `cwd`
 *
 * @param {String} fp - file path
 * @returns {String}
 */
export function root(fp) {
	return path.join(process.cwd(), fp)
}
