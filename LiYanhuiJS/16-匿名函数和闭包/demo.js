/*
// 匿名函数就是没有名字的函数
// 闭包就是函数里还有一个函数，里层函数可以有权访问外层函数的变量


// 普通函数
function box() {
	return 'Michael';
}
alert(box()); // Michael


// 匿名函数
// function() { // 单独的匿名函数是无法运行的
// 	return 'Michael';
// }
// 需要把匿名函数赋值给变量
var box = function() {
	return 'Michael';
}; // 这里的 ; 号是因为它是一个赋值语句
alert(box()); // Michael


// 或者可以通过表达式自我执行（立即调用）
(function() { // function 关键字表示声明，所以需要小括号包起来
	alert('Michael');
})(); // Michael


var box = (function() {
	return 'Michael';
})();
alert(box); // Michael
// box 变量是立即执行匿名函数的返回值


// 这样直接 alert 也是可以的
alert((function() {
	return 'Michael';
})()); // Michael


// 立即执行函数的传参
alert((function(age) {
	return age;
})(100)); // 100  注意传参的位置


// 函数中的匿名函数，也是闭包函数
function box() {
	return function() { // 匿名闭包函数
		return 'Michael';
	}
}
alert(box()); // function () {return 'Michael';}
alert(box()()); // Michael


// 把返回的闭包赋值给一个变量
function box() {
	return function() {
		return 'Michael';
	}
}
var b = box(); // 得到匿名闭包函数
alert(b()); // Michael


// 通过闭包可以返回局部变量
function box() {
	var age = 100;
}
alert(box.age); // undefined
alert(box()); // undefined
alert(box); // function box() {var age = 100;}
// 正常情况下是无法访问函数没有 return 的内部变量的
function box1() {
	var age = 100;
	return function() {
		return age;
	}
}
alert(box1()()); // 100
// 得到闭包返回的 age 的值


// 闭包的优点也是缺点，可以把局部变量驻留在内存中，可以避免使用全局变量，避免全局变量污染
// 通过全局变量来累加
var age = 100;
function box() {
	age++;
}
alert(age); // 100
box();
alert(age); // 101
box();
alert(age); // 102
// 全局变量达到了累加


// 但是如果是局部变量的话无法进行累加
function box() {
	var age = 100;
	age++;
	return age;
}
alert(box()); // 101
alert(box()); // 101
alert(box()); // 101
// 每次调用 box 的时候都会被初始化


// 使用匿名函数实现局部变量驻留内存中从而实现累加
function box() {
	var age = 100;
	return function() {
		age++; // 匿名函数可以访问 age 变量
		return age;
	}
}
var b = box(); // 把返回的匿名闭包函数赋值给 b
// 不能重复调用外部 box 函数，会初始化 age 变量
alert(b()); // 101
alert(b()); // 102
alert(b()); // 103
// 实现了局部变量的累加
alert(window.age); // undefined  不是全局变量
// 由于闭包返回的局部变量不会被立即销毁
alert(window.b); // function () {...}
// 所以使用完之后要手动清除一下
b = null; // 解除引用，等待垃圾回收
*/




// 使用匿名函数实现局部变量驻留内存中从而实现累加
function box() {
	var age = 100;
	return function() {
		age++; // 匿名函数可以访问 age 变量
		return age;
	}
}
var b = box(); // 把返回的匿名闭包函数赋值给 b
// 不能重复调用外部 box 函数，会初始化 age 变量
alert(b()); // 101
alert(b()); // 102
alert(b()); // 103
// 实现了局部变量的累加
alert(window.age); // undefined  不是全局变量
// 由于闭包返回的局部变量不会被立即销毁
alert(window.b); // function () {...}
// 所以使用完之后要手动清除一下
b = null; // 解除引用，等待垃圾回收







































