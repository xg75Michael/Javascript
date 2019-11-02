/*
function box(num1, num2) {
	return num1 + num2;
}
alert(box(1,2)); // 3


var box = function(num1, num2) { // 使用变量初始化函数
	return num1 + num2;
};
alert(box(1,2)); // 3


var box = new Function('num1', 'num2', 'return num1 + num2');
// 使用 new 运算符构造函数来声明
// 不推荐， 因为此语法会导致解析两次代码
alert(box(1,2)); // 3
alert(typeof box); // function


// 作为值传递时
function box(sum, num) {
	return sum + num;
}
function sum(num) {
	return num + 10;
}
var result = box(sum(10), 10); // 相当于 sum(20, 10) 这里传递的是函数返回值， 和变量没区别
alert(result); // 30


// 函数可以传递函数本身
function box(sum, num) {
	return sum(num);
}
function sum(num) {
	return num + 10;
}
var result = box(sum, 10); // 这里 sum 是一个函数， 当作参数被传递到 box 函数里
alert(result); // 20
*/





// 函数可以传递函数本身
function box(sum, num) {
	return sum(num);
}
function sum(num) {
	return num + 10;
}
var result = box(sum, 10); // 这里 sum 是一个函数， 当作参数被传递到 box 函数里
alert(result); // 20















































