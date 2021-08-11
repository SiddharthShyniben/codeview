import {highlight} from './highlight.js';

export default class CodeView {
	constructor(options = {}) {
		this.element = document.querySelector(options.element);
		this.code = options.initial;
		this.render();
		// Todo make language settable
	}

	render() {
		this.element.innerHTML = `<pre><code>${
			highlight(this.code).map(line => `<div>${line}</div>`).join('')
		}</code></pre>`
	}
}
