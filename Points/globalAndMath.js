// Global 对象，在全局定义的属性和函数都是Global 对象的属性
// isNaN(), isFinite(), parseInt(), paresFloat() 都是Global 对象的方法

// URI 编码方法
// .encodeURI() 方法只把空格替换成 %20
// .encodeURIComponent() 方法把所有的非字母数字字符
var uri = "https://developer.mozilla.org/en-US/d o c s/W e b/Java Script";
// https://developer.mozilla.org/en-US/d%20o%20c%20s/W%20e%20b/Java%20Script
alert(encodeURI(uri));
// https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fd%20o%20c%20s%2FW%20e%20b%2FJava%20Script
alert(encodeURIComponent(uri));

// 对应的方法有 .decodeURI(), .decodeURIComponent()

// .eval() 方法实际上就像是解析器一样，会解析传入的参数字符串
eval("alert('hi')");
// 等同于 alert('hi');
// eval() 可以创建变量或函数，但是不会hosting
eval("function sayHi() {alert('hi from eval function')}");
sayHi();
eval("var msg = 'hello from eval msg'");
alert(msg);
// eval() 方法在严格模式下，外部访问不到其中创建的变量和函数
// 注意 代码注入 攻击

// window 对象是浏览器将Global 对象实现的对象
var color = "red";
function syaColor() {
	alert(window.color);
}
window.syaColor(); // "red"
// 同时另一种办法取得Global 对象,使用函数中this未绑定指向Global
var globalObj = function() {
	return this;
}();

// Math 对象
/*
Math.E 					自然对数的底数 e	
Math.LN10				10的自然对数
Math.LN2				2的自然对数
Math.LOG2E				以2为底的对数
Math.LOG10E				以10为底的对数
Math.PI 				pi的值
Math.SORT1_2			1/2的平方根
Math.SORT2 				2的平方根
*/
// min() 和 max() 方法
var maxNum = Math.max(3,4,5,6);
alert(maxNum); // 6
var minNum = Math.min(3,4,5,6);
alert(minNum); // 3
var valuesMix = [1,2,3,4,5,6,7];
// 可以配合apply() 方法， 把Math 最为参数
var maxApply = Math.max.apply(Math, valuesMix);
alert(maxApply); // 7;

// Math.ceil() 向上取舍
// Math.floor() 向下取舍
// Math.round() 标准取舍
alert(Math.ceil(25.9)); // 26
alert(Math.ceil(25.5)); // 26
alert(Math.ceil(25.1)); // 26
alert(Math.floor(25.9)); // 25
alert(Math.floor(25.5)); // 25
alert(Math.floor(25.1)); // 25
alert(Math.round(25.9)); // 26
alert(Math.round(25.5)); // 26
alert(Math.round(25.1)); // 25

// .random() 方法返回0-1的随机数，不包括0，1
function pushRandom() {
	let i = 0;
	var randomArray = [];
	while(i < 10) {
		randomArray.push(Math.floor((Math.random() * 10) + 1));
		i++;
	}
};
pushRandom();
alert(randomArray); // 1,3,6,3,8,5,9,6,7,4





