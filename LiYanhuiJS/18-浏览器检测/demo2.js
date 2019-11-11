/*
// 客户端检测： 能力检测、怪癖检测、用户代理检测


// 能力检测，检测到是浏览器功能，并不是检测是什么浏览器
var width = window.innerWidth; // IE 中会有错误
// 使用能力检测
if (typeof width!= 'number') {
	width = document.documentElement.clientWidth;
}
alert(width);
// 其实就是判断某属性是否存在，不存在的话就排除某浏览器可能性，再继续检测


// 怪癖检测，也就是 bug 检测
var box = {
	toString: function() {}
};
for (var o in box) {
	alert(o); // toString
}
// IE 低版本中不会返回 toString 方法


// window 对象在 opera 浏览器中支持 opera 属性
// alert(window.opera.version()); // opera 浏览器的版本号


if (client.engine.opera) {
	alert('Oepra 浏览器： ' + client.engine.ver);
}


*/


// 用户代理字符串
document.write(navigator.userAgent);
// 得到用户代理字符串
// IE -- Trident
// Firefox -- Gecko
// Opera -- Presto
// Chrome -- WebKit
// Safari -- WebKit
// Konqueror -- KHTML
var client = function() { // 利用立即调用匿名函数来返回创建的对象
	// 引擎
	var engine = {
		ie: false,
		gecko: false,
		webkit: false,
		khtml: false,
		opera: false,
		// 版本
		ver: 0
	};
	// 浏览器的名称
	// 系统
	// 核心检测程序
	if (window.opera) {
		engine.opera = true; // 表示浏览器是 opera
		engine.ver = window.opera.version();
	}
	return { // 返回一个对象，包含了具体对象
		engine: engine, // 前面的 engine 是属性，后面的 engine 是对象值
	}
}();

if (client.engine.opera) {
	alert('Oepra 浏览器： ' + client.engine.ver);
}

















































