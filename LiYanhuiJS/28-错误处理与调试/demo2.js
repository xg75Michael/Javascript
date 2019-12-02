/*
// try catch 的意义
// 方法不应该在已知的错误中使用，应该通过修改代码来排错
// 也不应该在不考虑兼容的情况下使用
// 需要在无法修改代码的情况下，可能会发生错误的时候使用


try {
	console.log(innerWidth); // W3C
} catch(e) {
	console.log(document.documentElement.clientWidth); // IE
}
// 这样确实能实现兼容性问题，但是逻辑上是不正确的
// 而且此语句比一般的语句消耗更多，只有在必要的时候才推荐使用，比如 AJAX 的时候


// 以下是处理错误，浏览器不会报错，处理掉了
// try {
// 	new 10;
// } catch(e) {
// 	alert(e);
// }
// 手动抛出错误，无法解决的时候把错误抛出
try {
	new 10;
} catch(e) {
	if (e instanceof TypeError) {
		throw new TypeError('Type Error: 实例化 new 的时候产生了错误！');
	} else {
		throw new Error('Unknown Error!');
		// 在控制台上打印出错误，也就是浏览器报错
	}
}
new 10; // 浏览器自己抛出了错误


// 错误事件，在触发错误的时候执行，错误需要在监听事件之后
addEvent(window, 'error', function() {
	alert('Error');
});
new 10;


// 错误处理的策略
// 相等和全等
// console.log(1 == '1'); // true
// console.log(1 === '1'); // fasle
console.log(1 == true); // true
console.log(1 === true); // false
// === 全等不会进行类型转换，建议使用


// 判读一个变量是否存在的时候要小心用 if
var box = 10;
if (box) { // 10 转换成 boolean 值为 true
	console.log(box);
}
var box1 = 0;
if (box1) { // 但是如果是 0 的话就会转换成 false
	console.log(box1);
	// 此处没有打印
}


// 最好用 typeof
var box = 0;
if (typeof box == 'number') { // 两边类型相等，相等比全等速度快
	console.log('typeof: ' + box);
}


function getQueryString(url) {
	if (typeof url == 'string') {
		var pos = url.indexOf('?');
		return pos;
	} else {
		return 'Type is wrong!';
	}
}
console.log(getQueryString('demo.html?id=5')); // 9
console.log(getQueryString(1)); // TypeError url.indexOf is not a function
console.log(getQueryString('asdf')); // -1  不存在


function sortArray(arr) {
	if (arr) {
		arr.sort();
		return arr;
	}
}
var box = [];
var obj = {};
var boxNull = null;
// console.log(sortArray(box)); // []
// console.log(sortArray(obj)); // TypeError
// console.log(sortArray(boxNull)); // TypeError
function sortArray2(arr) {
	if (typeof arr.sort == 'function') { // 数组有 sort 方法，以这种方法来判断是否为数组
		arr.sort();
		return arr;
	} else {
		return 'Data type issues!';
	}
}
// console.log(sortArray2(null)); // {sort: function}
// 如果有个对象有 sort 方法也可以绕过对象
var sortObj = {
	sort: function() {}
};
// console.log(sortArray2(sortObj)); // {sort: function}
// 所以以上方法在 null 和 模拟 sort 方法的 obj 时还是导致错误
function sortArray3(arr) {
	if (arr instanceof Array) {
		arr.sort();
		return arr;
	} else {
		return 'Data type issues!';
	}
}
console.log(sortArray3(null)); // Data type issues!
console.log(sortArray3({})); // Data type issues!
console.log(sortArray3(sortObj)); // Data type issues!
// 使用 arr instanceof Array 的方法屏蔽了所有出错的参数



*/



// 通讯错误
// 在浏览器使用 URL 传递参数的时候，一些中文名的参数或地址会导致乱码或错误
// 建议必要的时候使用编码统一传递
console.log('?user=高向岩'); // 中文可能产生错误
console.log('?user=' + encodeURI('高')); // ?user= %E9%AB%98
// 编码之后就不会出错了









































