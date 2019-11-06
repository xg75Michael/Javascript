/*
// 原型模式创建的对象有一些缺点
// 初始化一致性，共享属性和方法，改变会影响所有的实例，所以无法保持独立性
function Box() {};
Box.prototype = {
	constructor: Box,
	name: 'Michael',
	age: 28,
	family: ['brother', 'sister'],
	run: function() {
		return this.name + this.age + ' is Running.';
	}
};
var box1 = new Box();
var box2 = new Box();
alert(box1.name); // Michael
alert(box2.name); // Michael
// 两个实例等 name 都是 Michael ，无法使得 box2 拥有别的 name
alert(box1.family); // brother,sister
box1.family.push('dad');
alert(box1.family); // brother,sister,dad
alert(box2.family); // brother,sister,dad
// 修改其中一个引用类型会影响所有实例


// 使用组合 构造函数 + 原型模式来创建对象可以解决共享问题
function Box(name, age) { // 需要保持独立性的使用构造函数
	this.name = name;
	this.age = age;
	this.family = ['brother', 'sister'];
};
Box.prototype = { // 需要保持共享的使用原型模式
	constructor: Box,
	run: function() {
		return this.name + this.age + ' is Running.';
	}
};
var box1 = new Box('Michael', 28);
var box2 = new Box('Gao', 100);
alert(box1.name); // Michael
alert(box2.name); // Gao
// 分别拥有自己的 name 属性
box1.family.push('dad');
alert(box1.family); // brother,sister,dad
alert(box2.family); // brother,sister
// 更改数组属性的时候相互不影响，引用类型不使用原型模式，所以没有共享
alert(box1.run()); // Michael28 is Running.
alert(box2.run()); // Gao100 is Running.
// 都拥有 run 方法，返回自己的属性


// 动态原型模式，可以将原型封装到构造函数里
function Box(name, age) {
	this.name = name;
	this.age = age;
	this.family = ['brother', 'sister'];
	// 原型初始化
	// 在这里不能使用字面量来重写原型
	if (typeof this.run != 'function') { // 判断 run 方法是否存在而决定是否初始化
		// 确保每次实例化的时候不会重复初始化原型方法
		Box.prototype.run = function() {
			return this.name + this.age + ' is Running.';
		}
	}
};
var box1 = new Box('Michael', 28);
var box2 = new Box('Gao', 100);
alert(box1.run()); // Michael28 is Running.
alert(box2.run()); // Gao100 is Running.


// 寄生构造函数就是工厂模式 + 构造函数，也比较通用
function Box(name, age) { // 因为构造函数，所以大写
	var obj = new Object(); // 因为工厂模式，所以 new Object()
	obj.name = name;
	obj.age = age;
	obj.run = function() {
		return this.name + this.age + ' is Running.';
	}
	return obj; // 因为工厂模式，所以 return
}
var box1 = new Box('Michael', 28);
var box2 = new Box('Gao', 100);
alert(box1.run()); // Michael28 is Running.
alert(box2.run()); // Gao100 is Running.



*/


// 稳妥构造函数是在安全环境下使用的一种构造函数
// 比如禁止使用 this 和 new 的时候会需要用稳妥构造函数
function Box(name, age) {
	var obj = Object();
	obj.name = name;
	obj.age = age;
	obj.run = function() {
		return name + age + 'is Running.';
	}
	return obj;
}
var box = Box('Michael', 28);
alert(box.run()); // Michael28is Running.
// 和寄生构造函数很像














































