node-sincos
===========

Super fast sin() and cos() approximations.

This implementation is based on the high precision approximation in this article: http://lab.polygonal.de/?p=205

This is also assuming the `-pi <= rad <= pi`.

usage
-----

### sin(rad)
```javascript
var sin = require('sincos').sin;

console.log(sin(0));	// 0
console.log(sin(3.14159));
```