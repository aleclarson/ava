const test = require('../../../entrypoints/main.cjs');

test('test', t => {
	try {
		t.throws(throwSync());
	} catch (error) {
		setTimeout(() => {
			throw error;
		}, 1500);
	}
});

function throwSync() {
	throw new Error('should be detected');
}
