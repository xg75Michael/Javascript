/*
// JS 中没有借口继承，只有原型链的继承方式
// 被继承的函数叫做超类型，父类，基类
// 继承的函数叫做自类型，子类，派生类
function Box() { // 假设这是父类，拥有 name 属性
	this.name = 'Michael';
}
function Desk() { // 假设这是子类，拥有 age 属性
	this.age = 100;
}
// Desk 构造函数只有 age 属性， 没有 name 属性
// 通过原型链继承，父类实例化的实例赋值给子类的原型对象属性
// new Box() 会将 Box 构造函数和原型里的信息都交给 Desk
Desk.prototype = new Box();
var desk = new Desk(); // 创建一个子类的实例 desk
alert(desk.age); // 100
alert(desk.name); // Michael
function Table() { // 假设这是孙类型
	this.level = 'AAAAA';
}
Table.prototype = new Desk();
// Table 的原型链继承了子类 Desk ，也就是继承了父类 Box
var table = new Table();
alert(table.level);
alert(table.age);
alert(table.name);


function Box() {
	this.name = 'Michael';
}
Box.prototype.name = 'XXX';
function Desk() {
	this.age = 100;
}
Desk.prototype = new Box();
var desk = new Desk();
alert(desk.name); // Michael
// 就近原则，返回最近的属性
alert(desk instanceof Desk); // true
// 子类从属于自己
alert(desk instanceof Box); // true
// 子类从属于他的父类
alert(desk instanceof Object); // true
// 所有对象都会自动继承 Object


// 继承中不能使用字面量重写原型，会中断关系
// 引用共享问题和超类型无法传参问题可以采用借用构造函数的技术，也就是对象冒充
function Box(name, age) {
	this.name = name;
	this.age = age;
}
Box.prototype.family = ['brother', 'sister'];
function Desk(name, age) {
	Box.call(this, name, age);
	// .call 进行对象冒充
}
var desk = new Desk('Michael', 28);
alert(desk.name); // Michael
alert(desk.family); // undefined
// 这种对象冒充方式无法继承 Box 原型中的属性和方法


// 借用构造函数没有复用代码
// 配合原型链模式来达到复用的效果
function Box(name, age) {
	this.name = name;
	this.age = age;
	this.family = ['brother', 'sister'];
}
// 构造函数的方法每次实例化都会分配一个内存空间
// 所以应该放在原型里
Box.prototype.run = function() {
	return this.name + this.age + ' is Running.';
}
function Desk(name, age) {
	Box.call(this, name, age); // 对象冒充
}
Desk.prototype = new Box(); // 原型链继承
var desk = new Desk('Michael', 28);
alert(desk.run()); // Michael28 is Running.
// 只是借用的时候是访问不到原型链中的方法的



*/



// 借用构造函数没有复用代码
// 配合原型链模式来达到复用的效果
function Box(name, age) {
	this.name = name;
	this.age = age;
	this.family = ['brother', 'sister'];
}
// 构造函数的方法每次实例化都会分配一个内存空间
// 所以应该放在原型里
Box.prototype.run = function() {
	return this.name + this.age + ' is Running.';
}
function Desk(name, age) {
	Box.call(this, name, age); // 对象冒充
}
Desk.prototype = new Box(); // 原型链继承
var desk = new Desk('Michael', 28);
alert(desk.run()); // Michael28 is Running.
// 只是借用的时候是访问不到原型链中的方法的














































