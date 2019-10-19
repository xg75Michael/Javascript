/*
function box() { // 函数声明
	alert('has been called')
}
// 函数本身没有运行功能， 必须调用才可以执行
box(); // 函数调用


function box(name, age) {
	alert('Your name is: ' + name + ', Your age is: ' + age);
}
box(); // Your name is: undefined, Your age is: undefined
box('Michael'); // Your name is: Michael, Your age is: undefined
box('Michael', 28); // Your name is: Michael, Your age is: 28
// 可以


function box() {
	return 'this is return'; // return 表示返回
}
alert(box()); // 打印出box 函数返回的结果


function box() {
	alert('alert');
}
alert(box()); // 先执行 打印'alert' 然后打印返回结果 'undefined'


function box(name, age) {
	return 'Your name is: ' + name + ', Your age is: ' + age;
}
alert(box()); // Your name is: undefined, Your age is: undefined


function box(name, age) {
	return 'Your name is: ' + name + ', Your age is: ' + age;
}
var str = box('Michael', 28); // 把 return 的结果赋值给 str
alert(str); // Your name is: Michael, Your age is: 28


function box() {
	return 10; // 只执行第一个 return 然后终止函数
	return 100;
}
alert(box()); // 10


function box(num) {
	if (num < 5) {
		// break // 不能使用break break 只能用在switch 中
		return num;
	} // 只执行第一个 return 然后终止函数
	return 100;
}
alert(box(2)); // 2


function box() {
	return arguments[0] + '|' + arguments[1];
}
alert(box('Michael', 28, 'MCS')); // Michael|28 只输出其中两个


function box() {
	return arguments[0] + '|' + arguments[1] + '|' + arguments[2] + '|' + arguments[3];
}
alert(box('Michael', 28, 'MCS')); // Michael|28|MCS|undefined 最后一个返回 undefined


function box() {
	return arguments.length;
}
alert(box()); // 0
alert(box(1,2,3)); // 3


function box() { // 利用 arguments 来动态传参
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}
alert(box(1,2,3,4,5)); // 15
alert(box(1,2,3,4,5,6,7)); // 28
*/








function box(num) {
	return num + 100;
}
function box(num) {
	return num + 200;
}
alert(box(50)); // 250
// 重载是根据参数来执行不同的函数
// JS 没有重载的功能 后面的box 函数覆盖了前面的函数
// 可以利用 arguments 来进行判断然后进行不同的处理达到模拟重载的效果






































