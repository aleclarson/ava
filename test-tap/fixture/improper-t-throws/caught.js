const test = require('../../../entrypoints/main.cjs');

test('test', t => {
	try {
		t.throws(throwSync());
	} catch {}
});

function throwSync() {
	throw new Error('should be detected');
}
