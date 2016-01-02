var recursiveMin = function(obj, min) {
	min = typeof min !== 'undefined' ? min : false;

	for( key in obj ) {
		if ( typeof obj[key] === 'number' ) {
			min = min === false ? obj[key] : Math.min( obj[key], min );
		} else if ( ( typeof obj[key] === 'array' || typeof obj[key] === 'object' ) && obj[key] ) {
			min = recursiveMin( obj[key], min );
		}
	}

	return min;
}

module.exports = recursiveMin;