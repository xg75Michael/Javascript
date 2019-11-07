/*
// 模仿块级作用域 if(){} for(){} 等等
function box(count) {
	for (var i = 0; i < count; i++) { // 大括号 块级作用域，但是 JS 中没有块级作用域
	}
	var i; // 重新声明依然等于 count
	alert(i); // 仍然可以访问
}
box(3); // 3


// 利用立即调用匿名函数达到效果模仿块级作用域的效果
function box() {
	(function () { // 这里是函数作用域
		for (var i = 0; i < 5; i++) {
			alert(i)
		}
	})();
	alert(i); // 无法访问到变量 i
}
box(); // error
// 在执行后会直接销毁，可以避免命名冲突


// 在全局中
var age = 100;
alert(age); // 100
age = null; // 不再使用的变量需要手动清除
alert(age); // null


// 全局块级作用域
(function() {
	// 这里是全局的块级作用域（私有作用域）
	var age = 100;
	alert(age); // 100
})();
alert(age); // error
// 执行完毕立即销毁作用域，减少闭包占用的内存问题


// JS 中是没有私有属性的概念，但是函数中定义的变量都可以认为是私有变量
function box() {
	var age = 100; // 私有变量，外部无法访问
}
box();
alert(age); // error


// 通过闭包可以访问私有变量，就是创建访问私有变量的公有方法
function Box() {
	this.age = 100; // 公有属性
	this.run = function() { // 公有方法
		return 'Running.';
	}
}
var box = new Box();
alert(box.age); // 100
alert(box.run()); // Running.


function Box() {
	var age = 100; // 私有变量
	function run() { // 私有函数
		return 'Running.';
	}
	this.publicGo = function() { // 对外可见的公共接口，又称为特权方法
		return run();
	};
	this.getAge = function() { // 特权方法，返回 age
		return age;
	}
}
var box = new Box();
// alert(box.age); // undefined  无法访问私有变量
// alert(box.run()); // error 无法访问私有方法
alert(box.getAge()); // 100
alert(box.publicGo()); // Running.
// 运行特权方法，得到的私有函数的值


// 通过构造函数传参
function Box(value) {
	var user = value; // 私有变量
	this.getUser = function() {
		return user;
	};
	this.setUser = function(value) {
		user = value;
	}
}
var box = new Box('Michael');
alert(box.getUser()); // Michael
box.setUser('XXX');
alert(box.getUser()); // XXX


(function() {
	var user = ''; // 私有变量
	// function Box() {} // 此处在私有作用域，所以是私有函数，外部访问不到
	Box = function(value) { // 此处没有 var 关键字，所以是全局函数 Box()
		user = value;
	};
	Box.prototype.getUser = function() {
		return user;
	};
	Box.prototype.setUser = function(value) {
		user = value;
	}
})();
var box = new Box('Michael');
alert(box.getUser()); // Michael
var box2 = new Box('XXX');
alert(box.getUser()); // XXX
box2.setUser('OOO');
alert(box.getUser()); // OOO
// 使用静态属性共享 user


// 模块模式
// 单例，就是永远只实例化一次，其实就是字面量对象声明方式
var box = { // 第一次实例化，无法第二次实例化，那么就是单例
	user: 'Michael',
	run : function() {
		return 'Running.';
	}
}


var box = function() { // 立即执行匿名函数
	var user = 'Michael'; // 私有变量
	function run() { // 私有函数
		return 'Running.';
	}
	return {
		pubulicGo : function() { // 对外公共接口，特权方法
			return user + run();
		}
	};
}();
alert(box.pubulicGo()); // MichaelRunning.


// 对内部返回对象封装
var box = function() { // 立即执行匿名函数
	var user = 'Michael'; // 私有变量
	function run() { // 私有函数
		return 'Running.';
	}
	var obj =  { // 封装进一个对象
		pubulicGo : function() { // 对外公共接口，特权方法
			return user + run();
		}
	};
	return obj; // 返回封装的对象
}();
alert(box.pubulicGo()); // MichaelRunning.



*/









// 之前两个都是返回的 {} 也就是 Object ，如果想返回 Box, Desk 等特定对象
function Desk() {};
var box = function() {
	var user = 'Michael';
	function run() {
		return 'Running.';
	}
	var desk = new Desk(); // 实例了特定的对象
	desk.publicGo = function() { // 然后对这个对象进行增强
		return user + run();
	};
	return desk; // 最后返回这个对象
}();
alert(box.publicGo()); // MichaelRunning.





































