/*
// 内置对象表示不依赖宿主环境的对象，在 ECMAScript 执行之前就已经存在了
// ECMA-262 只定义了两个内置对象： Global 和 Math
// 浏览器中的 window 对象是 Global 对象的实现


// alert(Global); // error  没有 Global 对象
alert(window); // [object Window]


// URI 编码方法，采用特殊 UTF-8 替换无效字符使浏览器能理解
var box = '//Michael高';
alert(box); // //Michael高
alert(encodeURI(box)); // //Michael%E9%AB%98
alert(encodeURIComponent(box)); // %2F%2FMichael%E9%AB%98
// 第二个 encodeURIComponent 编码的更加彻底
alert(decodeURI(encodeURI(box))); // //Michael高
// 对应的解码 decodeURI
alert(decodeURIComponent(encodeURIComponent(box))); // //Michael高
// 对应的解码 decodeURIComponent


// eval() 有解析 JS 代码的作用
eval('var box = 100'); // 当作 JS 解析
alert(box); // 100
eval('alert(100)'); // 100


eval('function box() {return 123}'); // 也可以解析函数
alert(box()); // 123
// 使用需要谨慎，会导致程序的安全性



*/














































