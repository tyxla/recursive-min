# recursive-min

Returns the smallest number from a multidimensional array or object.

```
npm install recursive-min
```

[![Build Status](https://travis-ci.org/tyxla/recursive-min.svg)](https://travis-ci.org/tyxla/recursive-min)

## About

An easy to use solution for finding the smallest number from a multidimensional array or object.

Arrays and objects are traversed recursively, number values are compared, the rest are skipped.

Returns `false` on failure

## Syntax

``` js
recursiveMin(objOrArray)
```

#### objOrArray

Object or array to fetch the minimum number from.

#### min

Optional. Use it to specify a temporary minimum value.

## Usage

Call `recursiveMin()` by passing the array or object you wish to find the smallest number from. If you specify `min`, it will be the maximum possible result.

``` js
var input = [0, 12, [4, -5]];
var min = recursiveMin(input);

console.log(min); // -5
```

## License

MIT