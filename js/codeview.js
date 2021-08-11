class CodeView {
	constructor(element, initialCode) {
		this.element = document.querySelector(element);
		this.code = initialCode;
		this.render();
	}

	_highlight(code) {
		return Prism.highlight(code)
	}

	render() {
		this.element.innerHTML = `<pre><code>${this._highlight(this.code)}</code></pre>`
	}
}
