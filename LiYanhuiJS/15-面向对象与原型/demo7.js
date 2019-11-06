/*
// 原型式继承 (和原型链继承不同)
// 临时中转函数
function obj(o) { // o 表示将要传递进去的一个对象
	function F() {} // F 构造函数是临时的一个函数，用于存储传递进来的对象
	F.prototype = o; // 将 o 对象实例赋值给 F 构造函数
	return new F(); // 返回这个得到传递进来对象的对象实例
}
// F.prototype = o 其实就是原型链继承
// 字面量声明一个对象实例
var box = {
	name: 'Michael',
	age: 28,
	family: ['brother', 'sister']
};
var box1 = obj(box); // box1 就等于 new F()
alert(box1.name); // Michael
alert(box1.family); // brother,sister
box1.family.push('dad');
alert(box1.family); // brother,sister,dad
var box2 = obj(box);
alert(box2.family); // brother,sister,dad
alert(box1.family == box2.family); // true
// 引用类型的属性共享


// 寄生式继承 = 原型式 + 工厂模式
// 寄生式继承只调用了一次，相对于组合继承调用两次效率高
// 临时中转函数
function obj(o) {
	function F() {};
	F.prototype = o;
	return new F();
}
// 寄生函数
function create(o) { // 寄生函数其实就是直接调用 obj 中转函数然后对其增强，比如添加方法
	var f = obj(o);
	f.run = function() {
		return this.name + ' is running.';
	}
	return f;
}
var box = {
	name: 'Michael',
	age: 28,
	family: ['brother', 'sister']
};
var box1 = create(box);
alert(box1.run()); // Michael is running.



*/





// 寄生组合继承
// 中转函数
function obj(o) {
	function F() {};
	F.prototype = o;
	return new F();
}
// 寄生函数
function create(box, desk) {
	var f = obj(box.prototype);
	f.constructor = desk; // 调整 constructor 指针
	desk.prototype = f;
}
function Box(name, age) {
	this.name = name;
	this.age = age;
}
Box.prototype.run = function() {
	return this.name + this.age + ' is running.';
}
function Desk(name, age) { // 对象冒充
	Box.call(this, name, age);
}
create(Box, Desk); // 替换了 demo6 中的 Desk.prototype = new Box();
var desk = new Desk('Michael', 28);
alert(desk.run()); // Michael28 is running.
alert(desk.constructor); // Desk...









































