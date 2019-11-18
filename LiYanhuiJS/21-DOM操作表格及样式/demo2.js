/*
// DOM 对 CSS 的能力检测
window.onload = function() {
	alert(document.implementation.hasFeature('CSS', '2.0')); // true
	alert(document.implementation.hasFeature('CSS2', '2.0')); // true
	alert(document.implementation.hasFeature('HTML', '1.0')); // true
};


// CSS 3种模式： 行内、內联、链接
// 标签内、 style 、 link
window.onload = function() {
	// 获取行内 style 的属性
	var box = document.getElementById('box');
	// alert(box.style); // [object CSSStyleDeclaration]
	// CSS 样式对象
	// alert(box.style.color); // red
	// alert(box.style.fontSize); // 20px
	// alert(box.style.background); // rgb(204, 204, 204)
	// alert(box.style.float); // right
	// alert(box.style.cssFloat); // right
	// 非 IE 浏览器对关键字保留字的用法
	// alert(box.style.styleFloat); //
	// IE 浏览器的调用方式
	alert(box.style.cssFloat || box.style.styleFloat); // right
	// 使用或运算符解决跨浏览器兼容问题
};


// style 赋值
window.onload = function() {
	var box = document.getElementById('box');
	box.style.color = 'blue';
	box.style.fontSize = '40px';
	box.style.background = '#ddd';
	// box.style.cssFloat = 'left';
	// 考虑兼容问题
	typeof box.style.cssFloat != 'undefined' ?
	box.style.cssFloat = 'left' : box.style.styleFloat = 'left';
};


// DOM2 级为 style 提供了一些属性方法
window.onload = function() {
	var box = document.getElementById('box');
	// alert(box.style.cssText);
	// color: red; background-color: rgb(204, 204, 204); font-size: 20px; float: right; background-position: initial initial; background-repeat: initial initial;
	// 查看 CSS 文本
	// alert(box.style.cssText.length); // 154  Safari  74 Chrome
	// 根据浏览器返回的长度不一样
	// box.style.setProperty('color', 'green'); // 设置颜色的属性
	// IE 不支持
	// box.style.removeProperty('color'); // 移除颜色属性
	// IE 不支持
};


// style 属性只能获取行内的属性，获取不到內联和链接的属性


// 计算后的 computed style
window.onload = function() {
	var box = document.getElementById('box');
	var style = window.getComputedStyle(box, null);
	// 获取计算后的 style 包含设置的样式和默认的样式
	// alert(style); // [object CSSStyleDeclaration]
	// alert(style.fontSize); // 20px
	// alert(style.margin); // 0px
	// var IEStyle = box.currentStyle;
	// alert(IEStyle);
	// IE 不支持，需要使用 currentStyle 属性
	// 兼容处理
	// var styleBoth = window.getComputedStyle ?
		// window.getComputedStyle(box, null) : null || box.currentStyle;
	// alert(styleBoth.fontSize);
	// computed style 可以获取行内，內联，链接的样式
	// PS: 內联属性中 border 属性被计算后不存在
	// alert(style.border); // 1px solid rgb(119, 119, 119)
	// 可能因为版本问题，新版本的浏览器可以返回属性值
	// 旧浏览器会因为这个是复合型属性而计算成具体的每一项
	// alert(style.borderBottomColor); // rgb(119, 119, 119)
	box.style.border = '1px solid #777';
	alert(box.style.border); // 行内直接获取的是字符串
};
*/



// 计算后的 computed style
window.onload = function() {
	var box = document.getElementById('box');
	var style = window.getComputedStyle(box, null);
	// 获取计算后的 style 包含设置的样式和默认的样式
	// alert(style); // [object CSSStyleDeclaration]
	// alert(style.fontSize); // 20px
	// alert(style.margin); // 0px
	// var IEStyle = box.currentStyle;
	// alert(IEStyle);
	// IE 不支持，需要使用 currentStyle 属性
	// 兼容处理
	// var styleBoth = window.getComputedStyle ?
		// window.getComputedStyle(box, null) : null || box.currentStyle;
	// alert(styleBoth.fontSize);
	// computed style 可以获取行内，內联，链接的样式
	// PS: 內联属性中 border 属性被计算后不存在
	// alert(style.border); // 1px solid rgb(119, 119, 119)
	// 可能因为版本问题，新版本的浏览器可以返回属性值
	// 旧浏览器会因为这个是复合型属性而计算成具体的每一项
	// alert(style.borderBottomColor); // rgb(119, 119, 119)
	box.style.border = '1px solid #777';
	alert(box.style.border); // 行内直接获取的是字符串
};
















































