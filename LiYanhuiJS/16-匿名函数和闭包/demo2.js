/*
// 因为作用域链的机制导致了循环里包含的 匿名函数 取得的都是最后一个值
function box() {
	var arr = [];
	for (var i = 0; i < 5; i++) {
		arr[i] = function () {
			return i;
		};
	}
	// 因为运行到这里的时候上面的 i 已经是 4++ = 5 了，之后调用的时候会都是5
	return arr;
}
// alert(box());
// // function () {
// // 	return i;
// // },function () {
// // 	return i;
// // },function () {
// // 	return i;
// // },function () {
// // 	return i;
// // },function () {
// // 	return i;
// // }
var b = box(); // 得到返回的包含匿名函数的数组
for (var i = 0; i< b.length; i++) {
	alert(b[i]()); // 5  都是5
}


// 如果只是为了单纯返回数组 [1,2,3,4] 的话不需要用匿名函数
function box() {
	var arr = [];
	for (var i = 0; i < 5; i++) {
		arr[i] = i;
	}
	return arr;
}
var b = box();
alert(b.length); // 5
alert(b); // 0,1,2,3,4
for (var i = 0; i <  b.length; i++) {
	alert(b[i]); // 0 1 ...
}
// 没有问题


function box() {
	var arr = [];
	for (var i = 0; i < 5; i++) {
		arr[i] = (function(num) { // 通过立即调用匿名函数来得到结果
			return num;
		})(i);
	}
	return arr;
}
var b = box();
for (var i = 0; i <  b.length; i++) {
	alert(b[i]); // 0 1 ...
} // 没有问题


function box() {
	var arr = [];
	for (var i = 0; i < 5; i++) {
		arr[i] = function(num) {
			return function() { // 因为闭包可以将变量驻留在内存中
				return num
			};
		}(i);
	}
	// 已经执行完毕了，但是闭包保存了执行环境中的 num 值，分别是 0, 1, 2, 3, 4
	return arr;
}
var b = box();
for (var i = 0; i <  b.length; i++) {
	alert(b[i]()); // 0 1 ...
} // 没有问题


var b = function() {
	alert('Michael'); // Michael
}();
// 在给变量赋值的时候可以省略立即执行匿名函数前面的小括号


// 关于 this 对象
// this 对象是在函数运行时的执行环境绑定的
// 在闭包中却在运行中指向 window
var box = {
	getThis: function() {
		return this;
	}
};
alert(this); // [object Window]
alert(box.getThis()); // [object Object]
var box1 = {
	getThis: function() {
		return function() {
			return this;
		}
	}
};
alert(box1.getThis()()); // [object Window]
// 闭包的 this 指向的是全局


var user = 'The Window';
var box = {
	user: 'The Box',
	getUser: function() {
		return this.user;
	},
	getUser2: function() {
		return function() { // 此处是闭包，和上面的功能一样
			return this.user;
		}
	},
	getUser3: function() {
		// 这里 this 指向 box
		var that = this;
		return function() {
			// 这里作用域指向 window
			return that.user;
		}
	}
};
alert(box.getUser()); // The Box
alert(box.getUser2()()); // The Window
// 闭包返回的是 The Window
alert(box.getUser2().call(box)); // The Box
// 使用对象冒充， .call() 方法来改变 this 的指向
alert(box.getUser3()()); // The Box
// getUser3 中把指向 box 的 this 赋值给 that ，然后在闭包中使用 that 代替 this 解决改变指向的问题



*/






// 内存泄漏
// 两种垃圾回收机制
// 闭包需要手动释放引用
function box() {
	var oDiv = document.getElementById('oDiv');
	var text = oDiv.innerHTML; // 给它赋值给 text 消除引用
	oDiv.onclick = function() {
		alert(text); // 这个就是一个闭包
	};
	alert(text); // [object HTMLDivElement]
	oDiv = null; // 解除引用，等待垃圾回收
}
box(); // Michael
// 刷新和点击的时候都存在，会一直存在，导致了内存泄漏












































