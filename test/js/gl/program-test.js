'use strict';

import {Logger, DEFAULT_LOGGER as DL} from '../../../src/log.js';
import Program from '../../../src/gl/program.js';

export default class ProgramTest {

	static runAll() {
		console.log(`%c----- Testing src/math/program.js -----`,'color:blue;');
		console.time('Perf');

		DL.level = Logger.LEVELS.ERROR;

		ProgramTest.testSimpleProgram();

		console.timeEnd('Perf');
		console.log(`%c---------------------------------------`,'color:blue;');
		console.log('\n');
	}

	static testSimpleProgram() {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('webgl');

		const simple = new Program({
			context: ctx,
			name: 'simple',
			path: '/test/shaders/'
		});
		simple.ready();
	}
}

