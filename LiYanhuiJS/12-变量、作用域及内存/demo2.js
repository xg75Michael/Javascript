/*
var box = 'Michael';
function setBox() {
	return 123;
}
alert(box); // Michael
alert(setBox()); // 123
alert(window.box); // Michael
alert(window.setBox()); // 123
// 全局对象其实是 window 的属性，全局函数是 window 的方法
// 局部对象其实也有一个类似 window 的对象，但是开发人员无法访问的，只有解析器在后台有处理


var box = 'Michael';
function setBox() {
	var box = 'Someone'; // 这是局部变量，在全局中无法访问
}
setBox();
alert(box); // Michael


var box = 'Michael';
function setBox() {
	box = 'Someone'; // 前面没有 var 关键字并不是声明，而是使用了全局变量
}
setBox();
alert(box); // Someone


var box = 'Michael';
function setBox(box) { // 通过传参，也是局部变量，不影响全局变量
	alert(box);
}
setBox('Someone'); // Someone
alert(box); // Michael


var box = 'Michael';
function setBox(box) {
	function setColor() { // 闭包 setColor() 的作用域在 setBox() 中
		var b = 'kkk'; // b 的作用域是在 setColor 函数中
		alert(b); // kkk
		return 123;
	}
	// alert(b); // 访问不到 b 变量
	return setColor();
}
// alert(setColor()); // 访问不到里面的函数
alert(setBox()); // 123
// 这就是作用域链，外层无法访问内层
// ES6 之前是没有块级作用域的，但是 ES6 出现了 let 和 const


// 此处可以证明没有 {} 块级作用域
if (true) { // if 没有块级作用域
	var box = 'Michael';
}
alert(window.box); // Michael


for (var i = 0; i < 10; i++) { // for 也没有块级作用域
	var box = 'Michael';
}
alert(window.i); // 10
alert(window.box); // Michael
// i 和 box 都还是全局变量


function box() {
	var num = 10;
}
box();
// alert(num); // 错误， num 是使用 var 在函数里声明的变量，是局部变量
function box2() {
	nummm = 20; // 在函数中没有 var 声明的变量会变成全局变量
}
box2();
alert(nummm); // 20


var box = 'Michael';
function setBox() {
	return box;
}
alert(setBox()); // Michael  先在函数内找不到 box ，所以返回全局中 box 变量
function setBox2() {
	var box = 'Someone';
	return box;
}
alert(setBox2()); // Someone  先在函数内找 box 变量，找到了，直接返回
// 局部变量查找变量速度一般比全局的快，因为不需要向上一级再次查找


// JS 中垃圾回收机制是自动运行的，自动给所有变量加上标记，然后定时回收
// 其实分为两种垃圾回收，主流是 标记清除， 另一种 引用计数 已经基本被淘汰
// 在全局中，变量和对象最好在用完之后设置成 null ，有助于垃圾回收机制去回收
var box = {};
box.name = 'Michael';
alert(box.name);
box = null; // 销毁引用，等待清理


var box = 'Michael';
alert(window.box); // Michael
window = null; // 很多内置对象是无法设置成 null 的
alert(window.box); // Michael
*/




var box = 'Michael';
alert(window.box); // Michael
window = null; // 很多内置对象是无法设置成 null 的
alert(window.box); // Michael














































