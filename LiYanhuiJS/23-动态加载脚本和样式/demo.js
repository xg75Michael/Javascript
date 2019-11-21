/*
// 上一个教程的额外补充
window.onload = function() {
	var box = document.getElementById('box');
	// alert(box.getBoundingClientRect()); // [object DOMRect]
	// 本身是一个矩形对象，有 top bottom width height 等属性
	// alert(box.getBoundingClientRect().top); // 50
	// alert(box.getBoundingClientRect().bottom); // 250
	// alert(box.getBoundingClientRect().height); // 200

	// alert(document.documentElement); // [object HTMLHtmlElement]
	// alert(document.documentElement.tagName); // HTML
	// alert(document.documentElement.clientTop + ', ' + document.documentElement.clientLeft);
	// 0, 0  浏览器左上角的坐标

	alert(getRect(box).top); // 50
	alert(getRect(box).bottom); // 250
	alert(getRect(box).left); // 50
	alert(getRect(box).right); // 250
};
// 解决了浏览器兼容问题，减去浏览器窗口的位置
function getRect(element) {
	var rect = element.getBoundingClientRect();
	var clientTop = document.documentElement.clientTop;
	var clientLeft = document.documentElement.clientLeft;
	return {
		top: rect.top - clientTop,
		bottom: rect.bottom - clientTop,
		left: rect.left - clientLeft,
		right: rect.right - clientLeft
	}
}


// 动态加载 js 文件
// 注意浏览器执行顺序，可以将动态加载部分放在 onload 外面更好
window.onload = function() {
	var flag = true;
	// 如果 flag 为 true ，那么加载 JS 脚本
	if (flag) {
		var script = document.createElement('script');
		script.type = "text/javascript";
		script.src = "someJS.js";
		// 添加属性
		document.getElementsByTagName('head')[0].appendChild(script);
	}
};


// 封装成函数使用，并把 load 步骤放在 onload 外
window.onload = function() {
	alert(hi);
	// 正常使用动态加载的 JS 中的变量
};
var flag = true;
if (flag) {
	loadScript('someJS.js');
}
// 封装成函数
function loadScript(url) {
	var script = document.createElement('script');
	script.type = "text/javascript";
	script.src = url;
	// 添加属性
	document.getElementsByTagName('head')[0].appendChild(script);
}


// 动态加载 JS 內联脚本的代码
var flag = true;
if (flag) {
	var script = document.createElement('script');
	script.type = "text/javascript";
	// script.appendChild(document.createTextNode("alert('hiii')")); // hiii
	// IE 不支持此写法
	// 所以使用下面的 .text 属性来添加
	script.text = "alert('hiii')"; // hiii
	document.getElementsByTagName('head')[0].appendChild(script);
}


// 动态加载 .css 文件
window.onload = function() {
};
var flag = true;
if (flag) {
	var link = document.createElement('link');
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = 'someCSS.css';
	document.getElementsByTagName('head')[0].appendChild(link);
}


// 动态执行 <style> 内部的样式
window.onload = function() {
};
var flag = true;
if (flag) {
	var style = document.createElement('style');
	style.type = "text/css";
	style.appendChild(document.createTextNode('body {background: #aaa;}'));
	// IE 不支持 style 标签的访问
	document.getElementsByTagName('head')[0].appendChild(style);
}
// 兼容方法可以使用非 IE 的 .insertRule() 和 IE 的 .addRule() 方法



*/



// 动态执行 <style> 内部的样式
window.onload = function() {
};
var flag = true;
if (flag) {
	var style = document.createElement('style');
	style.type = "text/css";
	style.appendChild(document.createTextNode('body {background: #aaa;}'));
	// IE 不支持 style 标签的访问
	document.getElementsByTagName('head')[0].appendChild(style);
}







































