import Prism from 'prismjs';
import {defPrism} from './prism-defs.js';

defPrism(Prism);

export function highlight(code) {
	const lines = _highlight(code).split('\n');

	if (lines.slice(-1).pop() && !lines.slice(-1).pop().trim()) lines.pop();

	return lines
}

export function _highlight(code) {
	const language = null;
	const grammar = Prism.languages.javascript;

	const env = {code, language, grammar}

	Prism.hooks.run('before-tokenize', env);
	env.tokens = Prism.tokenize(env.code, env.grammar);
	Prism.hooks.run('after-tokenize', env);

	env.tokens = insertCustomTokens(env.tokens);

	return Prism.Token.stringify(
		Prism.util.encode(env.tokens), env.language
	);
}

function insertCustomTokens(tokens, counter = { current: 0 }) {
	tokens = tokens.map(token => parseToken(token, counter));
	return tokens.concat.apply([], tokens);
}

function parseToken(token, counter) {
	if (token === '\n') {
		counter.current = 0;
		return token;
	}

	if (typeof token === 'string') {
		if (token.includes('\n')) {
			const split = token.split('\n');
			const [left, right] = [split.shift(), split.join('\n')];

			return insertCustomTokens([left, '\n', right], counter);
		}

		if (!token.trim()) return token;

		counter.current++;
		return new Prism.Token('free-text', token, [`token-${counter.current}`, 'token-leaf'], token);
	}

	if (Prism.util.type(token.content) === 'Array') {
		token.content = insertCustomTokens(token.content, counter);
		return token;
	}

	counter.current++;
	token.alias = [
		...Prism.util.type(token.alias) === 'Array' ? token.alias : [token.alias],
		`token-${counter.current}`,
		'token-leaf',
	];

	return token;
}
