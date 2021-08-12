export function findTokensPerLine(opts) {
	return Object.assign(
		{},
		Object.assign(
			Object.fromEntries((opts.lines ||[]).map(line => [line, null])),
			Object.assign(
				parseRange(opts.range),
				Object.assign(
					...(opts.ranges || []).map(parseRange),
					(opts.tokens || {})
				)
			)
		)
	)
}

function parseRange (range) {
	if (!range) return {};

	const tokens = {};
	const [start, end] = range;

	for (let i = start; i <= end; i++) tokens[i] = null;

	return tokens;
};


