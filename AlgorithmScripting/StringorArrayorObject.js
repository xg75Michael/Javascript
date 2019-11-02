var str = '';
var arr = [];
var obj = {};


// 方法 1
alert(typeof str === 'string'); // true
alert(arr instanceof Array); // true
alert(obj instanceof Object); // true


// 方法 2
alert(Object.prototype.toString.call(str) === '[object String]'); // true
alert(Object.prototype.toString.call(obj) === '[object Object]'); // true
alert(Object.prototype.toString.call(arr) === '[object Array]'); // true