/*
// JavaScript 在错误处理调试上本身就是软肋
window.abcdef();
// 产生一个错误， abcdef 方法不存在，之后的代码就不执行了
// 但是正常对于用户来说的话是看不到的，需要在控制台中才能看到
addEvent(window, 'load', function() {
	alert(1);
});


// try catch 来获取错误并避免代码阻断
// try 表示尝试执行里面的代码，如果有错误则执行 catch 中的代码
// 避免控制台报错
try {
	window.abcdef();
} catch(e) {
	// e 表示接受的错误对象
	console.log(e);
}
addEvent(window, 'load', function() {
	console.log(1);
});


// 两个属性 name message
try {
	window.abcdef();
} catch(e) {
	console.log(e);
	console.log(e.name);
	// TypeError
	console.log(e.message);
	// window.abcdef is not a function. (In 'window.abcdef()', 'window.abcdef' is undefined)
}


// finally 配合 try catch 做一些清理工作
function box() {
	try {
		var b = {};
		window.abcdef();
	} catch(e) {
		alert(e);
		return; // 因为执行了 catch 说明有错误，所以需要返回一下，避免错误
	} finally {
		console.log('will executed anyway');
		b = null;
	}
	console.log('finally outside'); // 没有被执行，只有在没有错误的时候才会执行到
}
box();


// 7 种错误类型
// new Array(-3); // 范围错误
// RangeError: Array size is not a small enough positive integer.

// var box = a; // 引用错误，变量未定义
// ReferenceError: Can't find variable: a

// a $ b; // 语法错误
// SyntaxError: Unexpected identifier '$'

// new 10; // 类型错误
// TypeError: 10 is not a constructor (evaluating 'new 10')

// EvalError 和 URIError 错误很难碰到，兼容性比较强


// 根据不同的错误类型进行具体处理
try {
	new 10;
} catch(e) {
	if (e instanceof TypeError) {
		console.log('类型错误： ' + e.message);
	} else {
		console.log('unknown error: ' + e);
	}
}
try {
	var box = a;
} catch(e) {
	if (e instanceof TypeError) {
		console.log('类型错误： ' + e.message);
	} else {
		console.log('unknown error: ' + e);
	}
}
*/





// 根据不同的错误类型进行具体处理
try {
	new 10;
} catch(e) {
	if (e instanceof TypeError) {
		console.log('类型错误： ' + e.message);
	} else {
		console.log('unknown error: ' + e);
	}
}
try {
	var box = a;
} catch(e) {
	if (e instanceof TypeError) {
		console.log('类型错误： ' + e.message);
	} else {
		console.log('unknown error: ' + e);
	}
}










































