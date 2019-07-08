// 创建对象用字面量多于创建实例
var personObj = new Object();
personObj.name = "Michael";
personObj.age = 28;
personObj.job = "Frontend Developer";
personObj.sayName = function() {
	alert(this.name);
}
// 等同于下面的字面量对象
var personObj2 = {
	name: "Michael",
	age: 28,
	job: "Frontend Developer",
	sayName: function() {
		alert(this.name);
	}
};

// ECMAScript有两种属性： 数据属性和访问器属性
// 数据属性包含一个数据值的位置，来控制读取和写入
// [[configurable]] 是否可以delete 删除属性从而重新定义
// [[enumerable]] 是否可以使用for-in 循环
// [[writable]] 是否可以修改属性
// [[value]] 包含这个属性的数据值
var personNoChange = {};
Object.defineProperty(personNoChange, "name", {
	writable: false,
	value: "Michael"
});
alert(personNoChange.name); // Michael
personNoChange.name = "NewName"; // 严格模式会抛出错误
alert(personNoChange.name); // Michael
var personFalseConfig = {};
Object.defineProperty(personFalseConfig, "name", {
	configurable: false, // personFalseConfig 从此受到限制
	value: "Michael"
});
delete personFalseConfig.name;
alert(personFalseConfig.name); // Michael
// 抛出错误
Object.defineProperty(personFalseConfig, "name", {
	configurable: true,
	value: "Michael"
});

// 访问器属性不包含数据值，包换 getter 和 setter 函数
// [[configurable]] 是否可delete
// [[enumerable]] 是否可用for-in
// [[get]] 读取属性时调用函数
// [[set]] 写入属性时调用函数
var bookSetGet = {
	_year: 2004,
	edition: 1
};
Object.defineProperty(bookSetGet, "year", {
	get: function(){
		return this._year;
	},
	set: function(newvalue){
		if (newvalue > 2004) {
			this._year = newvalue;
			this.edition += newvalue - 2004
		}
	}
});
bookSetGet.year = 2006;
alert(bookSetGet.year); // 2006
alert(bookSetGet._year); // 2006
alert(bookSetGet.edition); // 3
// 严格模式下getter setter 必须同时设置，否则抛出错误

// defineProperties() 可以定义多个属性
// 等同于上一个bookSetGet Object
var bookProperties = {};
Object.defineProperties(bookProperties, {
	_year: {
		value: 2004
	},
	edition: {
		value: 1
	},
	year: {
		get: function(){
			return this._year;
		},
		set: function(newvalue){
			if (newvalue > 2004) {
				this._year = newvalue;
				this.edition += newvalue - 2004;
			}
		}
	}
});
// Object.getOwnPropertyDescriptor() 方法返回一个对象
var descriptor = Object.getOwnPropertyDescriptor(bookProperties, "_year");
alert(descriptor.value); // 2004
alert(descriptor.configurable); // false
alert(descriptor.get); // undefined
var descriptor = Object.getOwnPropertyDescriptor(bookProperties, "year");
alert(descriptor.value); // undefined
alert(descriptor.enumerable); // false
alert(descriptor.get); // function(){return this._year}

// 函数工厂来创建对象
function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		alert(this.name);
	};
	return o;
}
var person1 = createPerson("Michael", 28, "Web Developer");
var person2 = createPerson("Gao", 29, "None");

// 构造函数来创建特定类型的对象, 使用new 关键字
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		alert(this.name);
	};
}
var personG1 = new Person("Michael", 28, "Web Developer");
var personG2 = new Person("Gao", 29, "None");
// 构造函数没有创建对象，直接赋值给this对象，没有return语句
alert(personG1.constructor == Person); // ture
alert(personG2.constructor == Person); // ture
alert(personG1 instanceof Object); // ture
alert(personG1 instanceof Person); // ture
alert(personG2 instanceof Object); // ture
alert(personG2 instanceof Person); // ture

// 当作构造函数使用
var personGZ = new Person("MM", 22, "NN");
personGZ.sayName(); // "MM"
// 当作普通函数调用
Person("NNNM", 23, "Window OBJ");
window.sayName(); // "NNNM"
// 在另一个对象的作用域中调用
var oTest = new Object();
Person.call(oTest, "IntoLocal", 24, "In other EVN");
oTest.sayName(); // "IntoLocal"

// 同样的函数最好可以整合，更佳简洁，性能更高的写法
function PersonBetter(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}
function sayName() {
	alert(this.name);
}
var personBetter1 = PersonBetter("Michael", 28, "Web Developer");
var personBetter2 = PersonBetter("Gao", 27, "None");

// prototype 原型属性是个指针，指向一个对象
function PersonP() {
}
PersonP.prototype.name = "Michael";
PersonP.prototype.age = 28;
PersonP.prototype.job = "Web Developer";
PersonP.prototype.sayName = function(){
	alert(this.name);
};
var personP1 = new PersonP();
personP1.sayName(); // "Michael"
var personP2 = new PersonP();
personP2.sayName(); // "Michael"
alert(personP1.sayName == personP2.sayName); // true
// 因为pp1 和 pp2 的sayName 都是指向在原型链上的同一个函数， 所以返回true
// Person的每个实例包含一个内部属性，指向Person.prototype
// 它们与构造函数没有直接关系。
alert(PersonP.prototype.isPrototypeOf(personP1)); // true
alert(PersonP.prototype.isPrototypeOf(personP2)); // true
// 可以使用 isPrototypeOf() 方法确定原型链关系
alert(Object.getPrototypeOf(personP1) == PersonP.prototype); // true
alert(Object.getPrototypeOf(personP1).name); // "Michael"
personP1.name = "Gao";
alert(personP1.name); // "Gao" 来自实例
alert(personP2.name); // "Michael" 来自原型
// hasOwnProperty() 方法可以检测访问的属性是实例属性ture，还是原型属性false
alert(personP1.hasOwnProperty("name")); // true
alert(personP2.hasOwnProperty("name")); // false 原型的属性
delete personP1.name;
alert(personP1.hasOwnProperty("name")); // false 原型的属性

// in 操作符，无论属性是实例等还是原型链的都会返回true
alert("name" in personP1); // true
personP1.name = "Gao";
alert("name" in personP1); // true
alert("name" in personP2); // true

// 通过结合 in 和 hasOwnProperty 来写函数判断是否是原型链的属性
function hasPrototypeProperty(object, name) {
	return !object.hasOwnProperty(name) && (name in object);
}
alert(hasPrototypeProperty(personP1, "name")); // false 实例的属性
alert(hasPrototypeProperty(personP2, "name")); // ture 原型链的属性

// for-in 循环
var OFOrIn = {
	toString: function() {
		return "My Object for in";
	}
};
for (var OProp in OFOrIn) {
	if (OProp == "toString") {
		alert("Found toString"); // "Found toString"
	}
}
var keysP = Object.keys(PersonP.prototype);
alert(keysP); // "name,age,job,sayName"
personP1.name = "Gao";
personP1.age = 31;
var keysP1 = Object.keys(personP1);
alert(keysP1); // "name,age"
// getOwnPropertyNames() 枚举所有的属性，包括不可枚举的属性
var keysOPN = Object.getOwnPropertyNames(PersonP.prototype);
alert(keysOPN); // "constructor,name,age,job,sayName"

// 重写PersonP 函数，用更简单的字面量
// 注意constructor 的变化
function PersonP() {
}
PersonP.prototype = {
	constructor: PersonP,
	name: "Michael",
	age: 29,
	job: "Web Developer",
	sayName: function() {
		alert(this.name);
	}
};
// 也可以使用defineProperty() 来设置constructor 的不可枚举属性
/*
Object.defineProperty(PersonP.prototype, "constructor", {
	enumberable: false,
	value: PersonP
});
*/

function PersonP() {
}
var friend = new PersonP();
PersonP.prototype = {
	constructor: PersonP,
	name: "Michael",
	age: 29,
	sayName: function(){
		alert(this.name);
	}
};
friend.sayName(); //error
// 因为使用字面量重写PersonP 的prototype 之后，会切断联系，friend 指向旧的proto

/*
虽然可以修改原生对象的原型里的方法，如Object, Array, String
但是不推荐这样做，可能导致错误或命名冲突。
*/

// 原型对象的问题, 对于引用类型值来说会影响到别的实例
function PersonProblem() {
}
PersonProblem.prototype = {
	constructor: PersonProblem,
	name: "Michael",
	age: 29,
	job: "Web Developer",
	friends: ["Sean", "Chaois"],
	sayName: function(){
		alert(this.name);
	}
};
var personPro1 = new PersonProblem();
var personPro2 = new PersonProblem();
personPro1.friends.push("NewFriend");
alert(personPro1.friends); // "Sean, Chaois, NewFriend"
alert(personPro2.friends); // "Sean, Chaois, NewFriend"
alert(personPro1.friends === personPro2.friends); // true

// 推荐混合使用构造函数模式和原型模式，有效的结合两者的长处
// 使用混合模式重写上面的代码
function PersonMix(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ["Sean", "Chaois"];
}
PersonMix.prototype = {
	constructor: PersonMix,
	sayName: function() {
		alert(this.name);
	}
}
var personMix1 = new PersonMix("Michael", 29, "Web");
var personMix2 = new PersonMix("Gao", 28, "Developer");
personMix1.friends.push("NewFriend");
alert(personMix1.friends); // "Sean, Chaois, NewFriend"
alert(personMix2.friends); // "Sean, Chaois"
alert(personMix1.friends === personMix2.friends); // false
alert(personMix1.sayName === personMix2.sayName); // true

// 动态原型模式，使用if来判断函数是否存在并初始化
function PersonIf(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;

	if (typeof this.sayName != "function") {
		PersonIf.prototype.sayName = function() {
			alert(this.name);
		};
	}
}
var friendIf = new PersonIf("Michael", 29, "Web Developer");
friendIf.sayName(); // "Michael"

// 寄生构造函数模式,通常不建议使用
function PersonPara(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert(this.name);
	};
	return o;
}
var friendPara = new PersonPara("Michael", 29, "Web Developer");
friendPara.sayName(); // "Michael"
// 返回的o 和PersonPara 没有任何联系
function SpecialArray() {
	var values = new Array();
	values.push.apply(values, arguments);
	values.toPipedString = function() {
		return this.join("|");
	};
	return values;
}
var colors = new SpecialArray("red1", "blue2", "green3");
alert(colors.toPipedString()); // "red1, blue2, green3"

// durable object 稳妥构造函数模式
function PersonDur(name, age, job) {
	var o = new Object();
	// 不绑定任何this 值
	o.sayName = function() {
		alert(name);
	};
	return o;
}
// 禁止使用new 来调用构造函数
var friendDur = PersonDur("Michael", 29, "Web Developer");
friendDur.sayName(); // "Michael"
// 除了sayName 方法，没有别的方式可以访问其数据

































