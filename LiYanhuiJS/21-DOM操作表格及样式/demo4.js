/*
window.onload = function() {
	// 检测是否支持 sheet 链接式內联式
	alert(document.implementation.hasFeature('styleSheets', '2.0')); // true
};


window.onload = function() {
	var link = document.getElementsByTagName('link')[0];
	// alert(link); // [object HTMLLinkElement]
	// var sheet = link.sheet;
	// alert(sheet); // [object CSSStyleSheet]
	// 表示链接的 css 样式表对象
	// IE 并不兼容，所以要使用 styleSheet
	var sheet = link.sheet || link.styleSheet;
	alert(sheet); // [object CSSStyleSheet]
};


// 更加简便的获取 sheet 的方法
window.onload = function() {
	// alert(document.styleSheets); //  [object StyleSheetList]
	var sheet = document.styleSheets[0];
	// 这个属性所有浏览器都兼容
	// alert(sheet); // [object CSSStyleSheet]
	// alert(sheet.disabled); // false
	// sheet.disabled = true; // 禁用样式表
	// alert(sheet.href); // 获取 sheet 的路径
	// alert(sheet.media); // [object MediaList]
	alert(sheet.title);
};


window.onload = function() {
	var sheet = document.styleSheets[0];
	// alert(sheet.cssRules); // [object CSSRuleList]
	// 样式规则集合，在 .css 文件中每个选择器都是一个样式
	alert(sheet.cssRules[0].selectorText); // #box
	// 返回样式规则集合中第一个的选择器文本，也就是 #box
	alert(sheet.cssRules[0].cssText); // 第一个规则的 css 文本
};


window.onload = function() {
	var sheet = document.styleSheets[0];
	// alert(sheet.cssRules); // [object CSSRuleList]
	// 样式规则集合，在 .css 文件中每个选择器都是一个样式
	// 部分浏览器不支持此属性
	// Chrome 需要放在服务器端
	// alert(sheet.cssRules[0].selectorText); // #box
	// 返回样式规则集合中第一个的选择器文本，也就是 #box
	// alert(sheet.cssRules[0].cssText); // 第一个规则的 css 文本
	// sheet.deleteRule(0); // 删除第一个规则的样式
	// sheet.insertRule('body {background-color: red;}', 0);
	// 添加样式，第一个参数是样式字符串，第二个参数是位置

	// IE 获取 Rules ， Safari 兼容
	// alert(sheet.rules); // [object CSSRuleList]
	// IE 删除样式规则 ， Safari 兼容
	// sheet.removeRule(0); // IE 中删除第一个规则样式
	// IE 添加样式规则 ， Safari 兼容
	// sheet.addRule('body', 'background-color: blue', 0);

	// 跨浏览器兼容解决方案
	var rules = sheet.cssRules || sheet.rules;
	// 删除规则
	// deleteRule(sheet, 0); // 跨浏览器删除第一条规则
	// 添加一条规则
	insertRule(sheet, 'body', 'background-color: red;', 0); // 跨浏览器添加一条规则
};

// 跨浏览器兼容删除一条规则
function deleteRule(sheet, position) {
	if (sheet.deleteRule) {
		sheet.deleteRule(position);
	} else if (sheet.removeRule) {
		sheet.removeRule(position);
	}
}
// 跨浏览器兼容添加一条规则
function insertRule(sheet, selectorText, cssText, position) {
	if (sheet.insertRule) {
		sheet.insertRule(selectorText + '{' + cssText + '}', position);
	} else if (sheet.addRule) {
		sheet.addRule(selectorText, cssText, position);
	}
}



*/







window.onload = function() {
	var sheet = document.styleSheets[0];
	var rules = sheet.cssRules || sheet.rules;
	// rules 代表的是集合
	var rule1 = rules[0];
	// alert(rule1); // [object CSSStyleRule]
	// alert(rule1.cssText);
	// #box { font-size: 20px; color: red; background-color: rgb(204, 204, 204); background-position: initial initial; background-repeat: initial initial; }
	// alert(rule1.selectorText); // #box

	var box = document.getElementById('box');
	// alert(box.style.color);
	// 获取不到链接的样式
	// alert(rule1.style.color); // red
	// 通过 rule1 可以获取的到
	// box.style.color = 'blue';
	// 直接写在行内
	// rule1.style.color = 'green';
	// 改变的是链接的样式
};
















































