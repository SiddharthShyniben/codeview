import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'js/codeview.js',
	output: {
		file: 'codeview.js',
		format: 'iife',
		name: 'CodeView'
	},
	plugins: [nodeResolve(), commonjs()]
};
