import Prism from 'prismjs';
import {defPrism} from './prism-defs.js';

defPrism(Prism);

export function highlight(code) {
	return Prism.highlight(code, Prism.languages.javascript)
}
