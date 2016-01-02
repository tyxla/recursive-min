var tape = require('tape');
var recursiveMin = require('./');

tape('1-level array', function(t) {
	var input = [4, 10, 1, 5, 20, 99, 101];
	var output = recursiveMin(input);
	var expected = 1;

	t.same( output, expected );

	t.end();
});

tape('2-level array', function(t) {
	var input = [4, 10, [1, 5, 21], 20, 99, 101];
	var output = recursiveMin(input);
	var expected = 1;

	t.same( output, expected );

	t.end();
});

tape('3-level array', function(t) {
	var input = [4, 10, [[7, 1, 5], 8, 21], 20, 99, 101];
	var output = recursiveMin(input);
	var expected = 1;

	t.same( output, expected );

	t.end();
});

tape('1-level object', function(t) {
	var input = {
		a: 5, 
		b: 6, 
		c: 1
	};
	var output = recursiveMin(input);
	var expected = 1;

	t.same( output, expected );

	t.end();
});

tape('2-level object', function(t) {
	var input = {
		a: 5, 
		b: 6, 
		c: {
			d: 8,
			e: 1
		}
	};
	var output = recursiveMin(input);
	var expected = 1;

	t.same( output, expected );

	t.end();
});

tape('3-level object', function(t) {
	var input = {
		a: 5, 
		b: 6, 
		c: {
			d: 8,
			e: {
				f: 3,
				g: 1
			}
		}
	};
	var output = recursiveMin(input);
	var expected = 1;

	t.same( output, expected );

	t.end();
});

tape('object in array', function(t) {
	var input = [10, 5, {a: 3, b: 1}, 6];
	var output = recursiveMin(input);
	var expected = 1;

	t.same( output, expected );

	t.end();
});

tape('array in object', function(t) {
	var input = {
		a: 5,
		b: [1, 10],
		c: 2
	}
	var output = recursiveMin(input);
	var expected = 1;

	t.same( output, expected );

	t.end();
});

tape('negative numbers', function(t) {
	var input = [-10, -20, -1, 10, 20, 1, 5, -5];
	var output = recursiveMin(input);
	var expected = -20;

	t.same( output, expected );

	t.end();
});

tape('infinity', function(t) {
	var input = [-Infinity, -10, 0, 10, Infinity];
	var output = recursiveMin(input);
	var expected = -Infinity;

	t.same( output, expected );

	t.end();
});

tape('failure because no numbers were found', function(t) {
	var input = ["a", "b", false, true];
	var output = recursiveMin(input);
	var expected = false;

	t.same( output, expected );

	t.end();
});