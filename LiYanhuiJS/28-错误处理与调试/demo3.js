/*
// 调试技术
// 以前使用 alert() 方法可以输入对应的值来判断是否出错
var num1 = 1;
var num2 = b;
alert('1'); // 发现这里执行不到，说明上一行有错误
var result = num1 + num2;
alert(result);


// 数据类型有问题的时候需要很多次测试，比较麻烦
var num1 = 1;
alert(typeof num1);
var num2 = 'b';
alert(typeof num2);
var result = num1 + num2;
alert(result);


// 现代浏览器都会支持控制台，并支持 console 对象，有4个方法
console.error('错误');
console.info('错误');
console.log('错误');
console.warn('错误');
// 打开浏览器控制台之后会发现 4 种不同颜色形式的信息


// 相对来说 console 会比 alert 方便很多
var num1 = 1;
console.log('num1: ' + num1 + ' Type: ' + typeof num1);
var num2 = 'b';
console.log('num2: ' + num2 + ' Type: ' + typeof num2);
var result = num1 + num2;
console.log('result: ' + result);
// console 调试就算不删除程序也照样执行，而 alert 会中途阻断后面代码的执行


// throw 将错误抛出
var num1 = 1;
if (typeof num1 != 'number') {
	throw new Error('num1 need to be number');
}
var num2 = 'b';
if (typeof num2 != 'number') {
	throw new Error('num2 need to be number');
}
var result = num1 + num2;
console.log(num1 + num2);


// 浏览器本身就有很多调试工具
// 控制台 Elements Network 等等
addEvent(window, 'load', function() {
	var a = 1;
	var b = 0;
	var box = document.getElementById('box');
	addEvent(box, 'click', function() {
		this.innerHTML = 'Been Clicked!';
	});
	a = 2;
	b = 2;
	a = 3;
	b = 3;
});
// Chrome 中的 Sources
// Firefox 中的 调试器
// Safari 中的 Debugger
// 以上都是各浏览器断点测试的位置
// 设置断点就是执行调试的起点
// command + \ ; '
// 结束 stepinto stepover
// 不需要调试的时候一定要去掉断点，否则每次刷新都会进入调试模式
// 监控可以看到变量的变化，在很多变量的时候可以手动添加变量来额外监控



*/



// 浏览器本身就有很多调试工具
// 控制台 Elements Network 等等
addEvent(window, 'load', function() {
	var a = 1;
	var b = 0;
	var box = document.getElementById('box');
	addEvent(box, 'click', function() {
		this.innerHTML = 'Been Clicked!';
	});
	a = 2;
	b = 2;
	a = 3;
	b = 3;
});
// Chrome 中的 Sources
// Firefox 中的 调试器
// Safari 中的 Debugger
// 以上都是各浏览器断点测试的位置
// 设置断点就是执行调试的起点
// command + \ ; '
// 结束 stepinto stepover
// 不需要调试的时候一定要去掉断点，否则每次刷新都会进入调试模式
// 监控可以看到变量的变化，在很多变量的时候可以手动添加变量来额外监控

















































