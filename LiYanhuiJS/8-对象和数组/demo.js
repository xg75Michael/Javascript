/*
// 创建 Object 可以使用 new 或者字面量两种方法
// 对象包含哪些元素
// 1. 属性(字段)
// 2. 方法(函数)


var box = new Object(); // 创建一个对象
alert(box); // [object Object]
alert(typeof box); // object
box.name = 'Michael';
box.age = 28;
alert(box.name); // Michael


var box = Object(); // new 关键字可以省略 但是不推荐
alert(box);


var box = {}; // 字面量方式创建的对象
alert(box); // [object Object]
alert(typeof box); // object


var box = { // 用字面量对象封装数据
	'name' = 'Michael', // 属性可以是字符串的方式 特别是属性为数字的时候
	'age' = 28
};
alert(box.name);


var box = {}; // 结合两种方法
box.name = 'Michael';
box.age = 28;
alert(box.name); // Michael
alert(box['name']); // Michael 用数组的时候必须用 '' 引号来表达


function objrun() {
	return '123';
}
var box = new Object();
box.name = 'Michael';
box.age = 28;
box.run = objrun;
alert(box.run); // 打印函数源码
alert(box.run()); // 123 执行函数
// 相对字面量， 这个方法比较复杂


var box = {
	name: 'Michael',
	age: 28,
	run: function() { // 匿名函数
		return '123';
	}
};
alert(box.run()); // '123' 需要 () 括号来调用


var box = {
	name: 'Michael'
};
alert(box.name); // Michael
delete box.name; // 删除属性
alert(box.name); // undefined


// 字面量是传参的推荐的方法
function box(obj) {
	if (obj.name != undefined) { // 判断是否存在
		alert(obj.name);
	};
	if (obj.love != undefined) {
		alert(obj.love);
	};
	if (obj.age != undefined) {
		alert(obj.age);
	};
}
var obj = {
	name: 'Michael',
	age: 28,
	height: 174,
	address: 'DaLian'
}
box(obj); // Michael // 28
box({ // 匿名对象 直接调用方法传入匿名对象
	name: 'Gao',
	age: 29,
	love: 'Play'
});
*/



// 字面量是传参的推荐的方法
function box(obj) {
	if (obj.name != undefined) { // 判断是否存在
		alert(obj.name);
	};
	if (obj.love != undefined) {
		alert(obj.love);
	};
	if (obj.age != undefined) {
		alert(obj.age);
	};
}
var obj = {
	name: 'Michael',
	age: 28,
	height: 174,
	address: 'DaLian'
}
box(obj); // Michael // 28
box({ // 匿名对象 直接调用方法传入匿名对象
	name: 'Gao',
	age: 29,
	love: 'Play'
});















































