import {highlight} from './highlight.js';

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

	_highlight(code, options) {
		return highlight(code).map((line, index) => `<div style='opacity: ${
			(options.range || []).includes(index + 1) ? 1 : 0.3
		}'>${line}</div>`).join('')
	}
}
