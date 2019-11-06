/*
// 通过字面量的方式来体现封装的形式，并减少代码的量
function Box() {};
var box = new Box();
alert(box.prototype); // box 是 Box 的实例，无法直接访问到原型对象
alert(box.__proto__); // 实例中的 __proto__ 指针指向的是原型
alert(Box.prototype); // Box 构造函数中的 prototype 属性是指向原型
alert(box.__proto__ == Box.prototype); // true
// 说明这两个 __proto__ 和 prototype 引用的是同一个指针


function Box() {};
// 使用字面量的方式创建对象
Box.prototype = { // 此处 {} 就是一个新创建的对象，赋值并覆盖给了 prototype 属性
	// constructor: Box,
	name: 'Michael',
	age: 28,
	run: function() {
		return this.name + this.age + ' is Running';
	}
};
var box = new Box();
// alert(box.name); // Michael
// alert(box.run()); // Michael28 is Running
// 使用的时候基本和构造函数创建的原型对象是一样的
// 只是 constructor 属性不会指向实例
// alert(box.constructor); // function Object() {}
// 此时 box 的构造函数指向的是 Object
// {} 这个其实就是 Object 创建的对象
alert(box.constructor == Box); // false
alert(box.constructor == Object); // true
alert(box instanceof Box); // true
alert(box instanceof Object); // true
Box.prototype.constructor = Box;
// 可以强行将 constructor 指向 Box
alert(box.constructor == Box); // true


Box.prototype = { // 此处的重写原型直接切断了上面的原型，不会保留任何信息
	age: 100
}
var box = new Box();
alert(box.name); // undefined


// JS 中内置的对象很多都使用了原型的模式
var box = [1,7,4,3,2,5,4];
alert(box.sort()); // 1,2,3,4,4,5,7
alert(!box.hasOwnProperty('sort') && ('sort' in box)); // true
// 此处判断出了 sort 方法在 box 原型中，也就是 Array 的 prototype 中
alert(Array.prototype.asdf); // undefined
alert(Array.prototype.sort); // function sort() {}
alert(String.prototype.slice); // function slice() {}


// 内置引用类型的功能扩展
alert(String.prototype.addString); // undefined
// 判断内置 String 的原型中是否有某方法
if (String.prototype.addString == undefined) {
	// 如果没有，我们则可以添加自定义方法
	String.prototype.addString = function() {
		return this + ', added!';
		// 返回 String 本身添加一段字符串
	};
};
alert('Michael'.addString()); // Michael, added!
// 但是不推荐，可能导致命名冲突不利于维护



*/


alert(String.prototype.addString); // undefined
if (String.prototype.addString == undefined) {
	String.prototype.addString = function() {
		return this + ', added!';
	};
};
alert('Michael'.addString()); // Michael, added!

















































