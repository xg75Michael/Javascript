/*
window.onload = function() {
	// alert(Node); // function Node() { [native code] }
	// IE 不支持
	// if (xxx.nodeType === 1) {} // 表示元素节点
	// if (xxx.nodeType === 3) {} // 表示文本节点
	// alert(Node.ELEMENT_NODE); // 1 表示元素节点
	// alert(Node.TEXT_NODE); // 3 表示文本节点
	if (xxx.nodeType === Node.ELEMENT_NODE) {} // 常量表示元素节点
	if (xxx.nodeType === Node.TEXT_NODE) {} // 常量表示文本节点
	// 使用 Node. 常量判断起来更清晰
};


// IE 兼容问题，可以判断后创建一个全局 Node 属性
window.onload = function() {
	alert(Node.ELEMENT_NODE); // 1
	alert(Node.TEXT_NODE); // 3
};
if (typeof Node == 'undifined') {
	// 创建一个全局 Node
	window.Node = {
		ELEMENT_NODE: 1,
		TEXT_NODE: 3
	}
}


// document 类型，表示文档，文档的跟节点，本身是隐藏的
window.onload = function() {
	// alert(document); // [object HTMLDocument]
	// alert(document.nodeType); // 9
	// alert(document.nodeValue); // null
	// alert(document.nodeName); // #document
	// 第一个子节点是文档声明
	// alert(document.childNodes[0]); // [object DocumentType]
	// alert(document.childNodes[0].nodeType); // 10
	// IE 理解注释，所以在 IE 中是8
	// alert(document.childNodes[0].nodeName); // html
	// alert(document.childNodes[1]); // [object HTMLHtmlElement]
	// alert(document.childNodes[1].nodeType); // 1
	// alert(document.childNodes[1].nodeName); // HTML
	alert(document.documentElement); // [object HTMLHtmlElement]
	alert(document.documentElement === document.childNodes[1]); // true
	// documentElement 直接获取 HTML 节点
};


// body 标签
window.onload = function() {
	// alert(document.getElementsByTagName('body')[0]); // [object HTMLBodyElement]
	// alert(document.body); // [object HTMLBodyElement]
	// document.body 直接获取 body
	alert(document.body.nodeType); // 1
	alert(document.body.nodeName); // BODY
};


// doctype 文档注释
window.onload = function() {
	alert(document.doctype); // [object DocumentType]
	// IE7 以前会返回 null ，理解为注释类型
	alert(document.doctype.nodeType); // 10
	alert(document.doctype.nodeName); // html
};


// 遗留的属性
window.onload = function() {
	// alert(document.title); // DOM进阶
	// document.title = 'box';
	// 浏览器标题修改成 box
	// alert(document.URL); // 网址
	// alert(document.domain); // 域名
	// alert(document.referrer); // 上一个地址
};


// 对象集合
window.onload = function() {
	alert(document.anchors); // 所有 a tag
	alert(document.links); // 所有有 href 的 a tag
	alert(document.applets); // 已废弃
	alert(document.forms); // 所有 form tag
	alert(document.images); // 所有 img tag
};


// 合并文本节点
window.onload = function() {
	var box = document.getElementById('box');
	var text1 = document.createTextNode('Michel');
	var text2 = document.createTextNode('Gao');
	// 创建 2 个文本节点
	box.appendChild(text1);
	box.appendChild(text2);
	// 向 box 中添加这两个文本节点
	alert(box.childNodes.length); // 2
	// box 子节点总共有两个，因为是同一级分别添加的文本节点
	box.normalize();
	// 调用 normalize 方法来合并同一级别的文本节点
	alert(box.childNodes.length); // 1
	// 合并之后的子节点长度为 1
};


// 分离文本节点
window.onload = function() {
	var box = document.getElementById('box');
	var text1 = document.createTextNode('Michel');
	box.appendChild(text1);
	// 向 box 中添加这 1 个文本节点
	// alert(box.childNodes.length); // 1
	box.childNodes[0].splitText(3);
	// 把前三个分离成新的文本节点
	alert(box.childNodes[0].nodeValue); // Mic
	alert(box.childNodes.length); // 2
	// 分离之后的子节点长度为 2
};


// 删除 添加 替换 等 部分文本
window.onload = function() {
	var box = document.getElementById('box');
	var text1 = document.createTextNode('Michael');
	box.appendChild(text1);
	box.childNodes[0].deleteData(0, 3);
	// deleteData(start, end) 删除文本
	alert(box.childNodes[0].nodeValue); // hael
	box.childNodes[0].insertData(0, 'Hi, ');
	// insertData(index, 'text') 在某位置添加一段文字
	alert(box.childNodes[0].nodeValue); // Hi, hael
	box.childNodes[0].replaceData(0, 3, 'Mr.');
	// replaceData(start, end, 'text') 替换其中部分文本
	alert(box.childNodes[0].nodeValue); // Mr. hael
	alert(box.childNodes[0].substringData(0, 3)) // Mr.
	// substringData 返回截取的部分文本，不改变原文本节点
};


// comment 节点
window.onload = function() {
	var box2 = document.getElementById('box2');
	alert(box2.firstChild); // [object Comment]
	// 注释节点
	alert(box2.firstChild.nodeType); // 8
	alert(box2.firstChild.nodeName); // #comment
	alert(box2.firstChild.nodeValue); // This is comment
	// 注意 IE 中的区别 可以使用 getElementsByTagName('!') 来获取
};



*/






// comment 节点
window.onload = function() {
	var box2 = document.getElementById('box2');
	alert(box2.firstChild); // [object Comment]
	// 注释节点
	alert(box2.firstChild.nodeType); // 8
	alert(box2.firstChild.nodeName); // #comment
	alert(box2.firstChild.nodeValue); // This is comment
	// 注意 IE 中的区别 可以使用 getElementsByTagName('!') 来获取
};











































