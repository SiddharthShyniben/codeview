import {highlight} from './highlight.js';
import {findTokensPerLine} from './focus.js'

export default class CodeView {
	constructor(options = {}) {
		this.element = document.querySelector(options.element);
		this.code = options.initial;
		this.render();
		// Todo make language settable
	}

	render(options = {}) {
		this.element.innerHTML = `<pre><code>${this._highlight(this.code, options)}</code></pre>`
	}

	focus(step) {
		this.render({step});
	}

	_highlight(code, options) {
		const tokensPerLine = findTokensPerLine(options.step || {});
		return highlight(code).map((line, index) => `<div style='opacity: ${
			index + 1 in tokensPerLine ? 1 : 0.3
		}'>${line}</div>`).join('')
	}
}
