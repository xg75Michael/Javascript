// 函数声明 函数表达式
// 函数声明例子
function someName(arg0, arg1, arg2) {
	// 具体的函数
	alert("Hi from someName.");
}
// 函数声明有hoisting 如下不会出错
hoistingFun(); // "hi"
function hoistingFun() {
	alert("hi");
}

// 函数表达式例子 无hoisting
var someExpFun = function(arg0, arg1, arg2) {
	// 具体的函数
	alert("Hi from someExpFun.");
}

// 递归
function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}
function factorialBetter(num) {
	if (num <= 1) {
		return 1;
	} else {
		// 这里使用 arguments.callee 来调用函数更保险
		return num * arguments.callee(num - 1);
	}
}
// 在严格模式下无法使用arguments.callee 的时候
var factorialBest = (function f(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * f(num - 1);
	}数

});

// 闭包即函数中创建另一个函数，另一个函数可能访问到闭包函数的对象
function createFunction() {
	var result = new Array();
	for (var i=0;i<10;i++) {
		result[i] = function() {
			return i;
		};
	}
	return result;
}
console.log(createFunction()); // function(){return i}
// 添加闭包
function createFunctionB() {
	var result = new Array();
	for (var i=0;i<10;i++) {
		result[i] = function(num) {
			return function() {
				return num;
			};
		}(i);
	}
	return result;
}
console.log(createFunctionB()); // function(){return num}

// this 在匿名函数的执行环境具有全局性
var name = "This Window";
var nameObj = {
	name: "This nameObj",
	getNameFunc: function() {
		return function() {
			return this.name;
		};
	}
};
alert(nameObj.getNameFunc()());
// "This Window" (非严格模式)
// "result" (严格模式？ 在jsfiddle中的结果)

// 改写上面的代码
var nameThat = "This Window";
var thatObject = {
	name: "That Object",
	getNameFunc: function() {
		var that = this;
		return function() {
			return that.name;
		};
	}
};
alert(thatObject.getNameFunc()()); // "That Object"

// 内存泄漏
function assignHandler() {
	var element = document.getElementById("someElement");
	element.onclick = function() {
		alert(element.id);
	};
}
// 函数内部匿名函数引用了assignHamdler 的活动对象， 导致内存永远无法回收
// 改写代码如下， 赋值变量，清空null
function assignHandlerNew() {
	var element = document.getElementById("someElement");
	var id = element.id;
	element.onclick = function() {
		alert(id);
	};
	element = null;
}

// 如下用() 来包起来即表示这是函数表达式
(function() {
	// 块级作用域
})();
/*
function() {
}() // 出错， 因为function关键字表示是函数声明，后面不可以跟()
*/

function outPutNumbers(count) {
	(function() {
		for (var i = 0; i < count; i++) {
			alert(i);
		}
	})();
	alert(i); // 错误, 上面的函数具有私有域，结束即销毁，无法访问i
}

// 私有作用域主要防治全局作用域的污染，避免命名冲突
(function() {
	var now = new Date();
	if (now.getMonth() == 0 && now.getDate() == 1) {
		alert("Happy new year!");
	}
})();
// 上面的函数中now 只是匿名函数中的局部变量，不用在全局作用域中创建它
// 匿名立即执行函数也可以减少使用的内存，执行完毕即销毁

// 私有变量
// 下面的函数有3个私有变量： sum sum1 sum2
function add(num1, num2) {
	var sum = num1 + num2;
	return sum;
}
// 私有变量的公有方法， 利用闭包可以访问到变量
function MyObject() {
	// 私有变量和私有函数
	var privateVariable = 10;
	function privateFunction() {
		return false;
	}

	// 特权方法
	this.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
}
var testMyObject = new MyObject();
alert(testMyObject.publicMethod()); // false
alert(testMyObject.privateFunction()); // error

function Person(name) {
	this.getName = function() {
		return name;
	};
	this.setName = function(value) {
		name = value;
	};
}
var personInner1 = new Person("Michael");
alert(personInner1.getName()); // "Michael"
personInner1.setName("Gao");
alert(personInner1.getName()); // "Gao"
var personInner2 = new Person("Hunter");
// 使用实例变量的时候不会被实例之间影响
alert(personInner2.getName()); // "Hunter"
alert(personInner1.getName()); // "Gao"

(function() {
	// 私有变量和私有函数
	var privateVariable = 10;
	function privateFunction() {
		return false;
	}
	// 构造函数， 没有使用var 关键字， 所以是全局变量，外部可以访问
	MyObject = function() {
	};
	// 公有方法, 使用的是原型模式
	MyObject.prototype.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
})();
alert(MyObject); // function(){}
var testMyObjProto = new MyObject();
alert(testMyObjProto.publicMethod()); // false

// 相对167 行的Person 函数， 下面的私有作用域中Person 使用原型共享方法
(function() {
	var name = "";
	// 因为没有var 所以是全局可以访问Person()
	Person = function(value) {
		name = value;
	};
	// 在Person 的原型链上添加两个方法
	Person.prototype.getName = function() {
		return name;
	};
	Person.prototype.setName = function(value) {
		name = value;
	};
})();
var person1 = new Person("Michael");
alert(person1.getName()); // "Michael"
person1.setName("Gao");
alert(person1.getName()); // "Gao"
var person2 = new Person("Hunter");
// 因为原型共享方法
alert(person1.getName()); // "Hunter"
alert(person2.getName()); // "Hunter"

// 模块模式， 为单例创建私有变量和方法
var singleton = function() {
	// 私有变量和私有函数
	var privateVariable = 10;
	function privateFunction() {
		return false;
	}
	// 公有方法和属性
	return {
		publicProperty: true,
		publicMethod: function() {
			privateVariable++;
			return privateFunction();
		}
	};
}();

var application = function() {
	// 私有变量和私有函数
	var components = new Array();
	// 初始化， 添加BaseComponent
	components.push(new BaseComponent()); // 假设有BaseComponent
	// 公共 返回一个对象
	return {
		getComponentCount: function() {
			return components.length;
		},
		registerComponent: function(component) {
			if (typeof component == "object") {
				components.push(component);
			}
		}
	};
}();

// 增强的模块模式
var newApplication = function() {
	// 私有变量和函数
	var components = new Array();
	// 初始化
	components.push(new BaseComponent()); // 假设有BaseComponent
	// 创建application 的一个局部副本
	var app = new BaseComponent();
	// 公共接口
	app.getComponentCount = function() {
		return components.length;
	};
	app.registerComponent = function(component) {
		if (typeof component == "object") {
			components.push(component);
		}
	};
	// 返回副本
	return app;
}();





/*
-函数表达式可以没有名字，即匿名函数。
-递归函数使用arguments.callee 来调用自己会更加有效。
-在函数内部定义另一个函数即为闭包，闭包有权访问函数内部所有变量。
	闭包作用域，函数作用域，全局作用域。
	通常函数作用域和所有变量在函数执行后即销毁。
	但是当函数返回一个闭包时，作用域将一直保存到闭包不存在。
	使用闭包加立即执行函数可以模仿块级作用域。
-闭包可以在对象中创建私有变量，方法有构造函数模式和原型模式的不同。
	也可以使用模块模式，增强模块模式来实现单例的特权方法。
*/




