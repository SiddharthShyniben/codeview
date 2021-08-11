import {highlight} from './highlight.js';

export default class CodeView {
	constructor(element, initialCode) {
		this.element = document.querySelector(element);
		this.code = initialCode;
		this.render();
		// TODO option
		this.language = 'javascript';
	}

	render() {
		this.element.innerHTML = `<pre><code>${highlight(this.code, this.language)}</code></pre>`
	}
}
