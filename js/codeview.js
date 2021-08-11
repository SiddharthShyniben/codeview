class CodeView {
	constructor(element, initialCode) {
		this.element = document.querySelector(element);
		this.code = initialCode;
		this.render();
	}

	render() {
		this.element.innerHTML = `<pre><code>${this.code}</code></pre>`
	}
}
