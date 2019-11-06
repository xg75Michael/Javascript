/*
// 可以采用构造函数的方式来创建对象
function Box(name, age) {
	this.name = name; // 添加一个属性
	this.age = age;
	this.run = function() { // 添加一个方法
		return this.name + this.age + ' is Running.';
	}
}
// 构造函数没有 new Object ，但是后台会自动创建
// this 就相当于 obj
// 构造函数不需要返回对象引用，是后台自动返回的
// 构造函数第一个字母大写
// 调用的时候必须 new 
var box1 = new Box('Michael', 28); // 实例化
var box2 = new Box('Gao', 100); // 实例化
// alert(box1.run()); // Michael28 is Running.
// alert(box2.run()); // Gao100 is Running.
// alert(box1 instanceof Object); // true
// alert(box2 instanceof Object); // true
alert(box1 instanceof Box); // true
alert(box2 instanceof Box); // true
function Desk(name, age) {
	this.name = name; // 添加一个属性
	this.age = age;
	this.run = function() { // 添加一个方法
		return this.name + this.age + ' is Running.';
	}
}
var box3 = new Desk('XXX', 222);
// alert(box3.run()); // XXX222 is Running.
alert(box3 instanceof Box); // false
alert(box3 instanceof Desk); // true
// 可以判断出 box3 是 Desk 的实例化


function Box(name, age) {
	this.name = name;
	this.age = age;
	this.run = function() {
		return this.name + this.age + ' is Running.';
	}
}
var box1 = new Box('Michael', 28);
// alert(box1.run()); // Michael28 is Running.
var o = new Object();
Box.call(o, 'ZZZ', 333); // 对象冒充
alert(o.run()); // ZZZ333 is Running.


function Box(name, age) {
	this.name = name;
	this.age = age;
	this.run = function() {
		return this.name + this.age + ' is Running.';
	}
}
var box1 = new Box('Michael', 28);
var box2 = new Box('Michael', 28);
alert(box1.name == box2.name); // true
alert(box1.age == box2.age); // true
alert(box1.run() == box2.run()); // 构造函数体内的方法的值是相等的
alert(box1.run == box2.run); // false  因为构造函数的方法是引用类型，比较的是地址


function Box(name, age) { // 构造函数内部的方法通过全局来实现引用地址一致
	this.name = name;
	this.age = age;
	this.run = run;
}
function run() {
	return this.name + this.age + ' is Running.';
}
var box1 = new Box('Michael', 28);
var box2 = new Box('Michael', 28);
alert(box1.run() == box2.run()); // true
alert(box1.run == box2.run); // true
// 不建议这样做，最好是封装在一起
*/




function Box(name, age) { // 构造函数内部的方法通过全局来实现引用地址一致
	this.name = name;
	this.age = age;
	this.run = run;
}
function run() {
	return this.name + this.age + ' is Running.';
}
var box1 = new Box('Michael', 28);
var box2 = new Box('Michael', 28);
alert(box1.run() == box2.run()); // true
alert(box1.run == box2.run); // true
// 不建议这样做，最好是封装在一起








































