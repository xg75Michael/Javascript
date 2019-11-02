/*
// 函数内部属性
// arguments, this
function box(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * box(num - 1); // 递归调用自己 利用函数名
	}
}
alert(box(4)); // 24
var box3 = function box2(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1); // 递归函数中内部属性 arguments
	}
}
alert(box3(5)); // 120


// window 是一个对象， 是浏览器在JS中的全局对象的实现
alert(window); // [object Window]
alert(typeof window); // object
alert(this); // [object Window]  与 window 相同
alert(typeof this); // object  与 window 相同


var color = '红色的'; // 这个 color 是全局变量， 同时又是 window 的属性
alert(window.color); // 红色的  说明 color 是 window 下的属性
alert(this.color); // 红色的


window.color = '红色的'; // 相当于 var color = '红色的';
var box = {
	color: '蓝色的', // 这里的 color 是 box 下的属性，也就是局部变量
	sayColor() {
		alert(this.color); // 这里的 this 指向的是 box
	}
};
alert(this.color); // 红色的
box.sayColor(); // 蓝色的


// 函数的属性
// length, prototype
function box(name, age) {
	return name + age;
}
alert(box.length); // 2


// prototype 下还有两个方法 .call() 和 .apply() 都是为了改变 this 并调用函数
function box(num1, num2) {
	return num1 + num2;
}
function sum(num1, num2) { // apply 和 call 可以调用另一个函数
	return box.apply(this, [num1, num2]); // 这里 this 指向 window
}
function sum2(num1, num2) {
	return box.apply(this, arguments); // 在需要很多参数时，直接传 arguments
}
alert(box(10, 10)); // 20
alert(sum(10, 10)); // 20
alert(sum2(10, 10)); // 20


// call 与 apply 只有在传参的时候有区别
// call 是把每个参数依次传入， apply 是传入参数数组
function box(num1, num2) {
	return num1 + num2;
}
function sum(num1, num2) {
	return box.call(this, num1, num2); // 这里是把每个参数依次传入
}
alert(sum(10, 10)); // 20


// call 和 apply 是为了改变作用域

*/



var color = '红色的'; // 全局
var box = {
	color: '蓝色的'
};
function sayColor() {
	alert(this.color);
}
sayColor(); // 红色的  全局
sayColor.call(window); // 红色的  全局
sayColor.call(this); // 红色的  全局
sayColor.call(box); // 蓝色的  指向box
window.sayColor.call(box); // 蓝色的


















































