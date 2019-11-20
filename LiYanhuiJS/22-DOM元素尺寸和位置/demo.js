/*
// style 获取行内的 css 大小，都是 string 类型
window.onload = function() {
	var box = document.getElementById('box');
	alert(box.style.width); // 200px
	alert(typeof box.style.width); // string
	alert(box.style.height); // 200px
};


// 获取计算后的 css ，也就是可以获取內联和链接的样式
window.onload = function() {
	var box = document.getElementById('box');
	var style = window.getComputedStyle ?
		window.getComputedStyle(box, null) : null || box.currentStyle;
	alert(style.width); // 300px
	alert(style.height); // 300px
};
// 如果没有设置值，非 IE 获取默认大小， IE 会获取 0


// CSSStyleSheet 对象获取 cssRules 属性 (rules)
// 不能获取行内的样式
window.onload = function() {
	var box = document.getElementById('box');
	var sheet = document.styleSheets[0];
	var rule = (sheet.cssRules || sheet.rules)[0];
	alert(rule.style.width); // 300px
	alert(rule.style.height); // 300px
};


// 以上三种都不能获取元素的实际大小



*/




window.onload = function() {
	var box = document.getElementById('box');
	alert(box.clientWidth); // 300
	// alert(typeof box.clientWidth); // number
	// 获取的值的类型是 number
	alert(box.clientHeight); // 300
	// clientWidth 获取的没有单位，默认是 px ，如果不是 px 会转换成 px
	// 边框 border 和外边距 margin 没有算在 clientWidth 的实际大小中
	// 內边距 padding 会增加实际大小
	// 滚动条 overflow: scroll 会减少实际大小
	// 没有内边距和滚动条的情况下，没有设置 CSS 大小，那么 IE 浏览器会理解为 0
};
















































