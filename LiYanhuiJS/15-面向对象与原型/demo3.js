/*
// 构造函数的例子
function Box(name, age) {
	this.name = name; // 实例属性
	this.age = age;
	this.run = function () { // 实例方法
		return this.name + this.age + ' is Running';
	};
}


// 原型
function Box() {}; // 函数体内没有任何东西，没有实例属性和实例方法
Box.prototype.name = 'Michael'; // 原型属性
Box.prototype.age = 28; // 原型属性
Box.prototype.run = function () { // 原型方法
	return this.name + this.age + ' is Running';
};
var box1 = new Box();
var box2 = new Box();
alert(box1.name); // Michael
alert(box1.run()); // Michael28 is Running
alert(box1.run == box2.run); // true
// 原型方法和属性都是共享的


alert(box1.prototype); // undefined  这个属性是一个对象，访问不到
alert(box1.__proto__); // [object Object]  这个属性是一个指针，指向 prototype
alert(box1.constructor); // 构造属性，获取构造函数本身


// 判断一个对象实例是不是指向了原型对象
var obj = new Object();
alert(Box.prototype.isPrototypeOf(box1)); // true
alert(Box.prototype.isPrototypeOf(box2)); // true
alert(Box.prototype.isPrototypeOf(obj)); // false
alert(Object.prototype.isPrototypeOf(obj)); // true
alert(Object.prototype.isPrototypeOf(box1)); // true
alert(Object.prototype.isPrototypeOf(box2)); // true


function Box() {
	this.name = 'Gao'; // 这个是实例的属性 name
};
Box.prototype.name = 'Michael'; // 这个是原型的属性 name
Box.prototype.age = 28;
Box.prototype.run = function () {
	return this.name + this.age + ' is Running';
};
var box1 = new Box();
alert(box1.name); // Gao
// 当实例和原型有同名属性的时候，查找的时候直接返回实例属性，不会继续向上查找
// 只有当实例中找不到的时候会去原型中查找


function Box() {};
Box.prototype.name = 'Michael';
Box.prototype.age = 28;
Box.prototype.run = function () {
	return this.name + this.age + ' is Running';
};
var box1 = new Box();
var box2 = new Box();
box1.name = 'Gao';
alert(box1.name); // Gao
alert(box2.name); // Michael
// 实例属性不共享
delete box1.name;
alert(box1.name); // Michael
// 删除之后可以再访问到原型属性
Box.prototype.name = 'XXX';
// 原型属性可以重新赋值被覆盖
alert(box1.name); // XXX
delete Box.prototype.name;
// 删除原型中的属性会影响所有的实例
alert(box1.name); // undefined
alert(box2.name); // undefined


alert(box1.hasOwnProperty('name')); // false
box1.name = 'XXX';
alert(box1.hasOwnProperty('name')); // true
// 判断实例属性是否存在使用 hasOwnProperty() 方法


function Box() {};
Box.prototype.name = 'Michael';
Box.prototype.age = 28;
Box.prototype.run = function () {
	return this.name + this.age + ' is Running';
};
var box1 = new Box();
alert('name' in box1); // true
delete Box.prototype.name;
alert('name' in box1); // false
box1.name = 'XXX';
alert('name' in box1); // true
// in 操作符判断是否有某属性，无论是实例属性还是原型属性


// 判断原型中的属性的方法
function isProperty(object, property) {
	return !object.hasOwnProperty(property) && (property in object);
}
function Box() {};
Box.prototype.name = 'Michael';
Box.prototype.age = 28;
Box.prototype.run = function () {
	return this.name + this.age + ' is Running';
};
var box1 = new Box();
alert(isProperty(box1, 'name')); // true
box1.name = 'XXX';
alert(isProperty(box1, 'name')); // false
delete box1.name;
delete Box.prototype.name;
alert(isProperty(box1, 'name')); // false
// 可以结合 hasOwnProperty 和 in 来判断属性是否在原型中
*/



// 判断原型中的属性的方法
function isProperty(object, property) {
	return !object.hasOwnProperty(property) && (property in object);
}
function Box() {};
Box.prototype.name = 'Michael';
Box.prototype.age = 28;
Box.prototype.run = function () {
	return this.name + this.age + ' is Running';
};
var box1 = new Box();
alert(isProperty(box1, 'name')); // true
box1.name = 'XXX';
alert(isProperty(box1, 'name')); // false
delete box1.name;
delete Box.prototype.name;
alert(isProperty(box1, 'name')); // false
// 可以结合 hasOwnProperty 和 in 来判断属性是否在原型中














































