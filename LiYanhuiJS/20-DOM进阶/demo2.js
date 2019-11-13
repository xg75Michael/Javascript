/*
// DOM 扩展，标准模式和混杂模式（怪异模式）
// 主要说的是 IE 浏览器


// IE compatMode
window.onload = function() {
	// alert(document.compatMode); // CSS1Compat
	// 表示标准模式，因为有 <!DOCTYPE html> 声明
	// 没有声明的时候返回 BackCompat 表示混杂模式
	if (document.compatMode === 'CSS1Compat') {
		// 判断是否是标准模式
		alert(document.documentElement.clientWidth);
	} else {
		// 混杂模式 IE 中没有 documentElement 属性
		alert(document.body.clientWidth);
	}
};


// 滚动
window.onload = function() {
	document.getElementById('box').scrollIntoView();
	// 将指定的节点滚动到可见范围内
};


// children 属性
// 非标准属性，返回有效的子节点
window.onload = function() {
	var box = document.getElementById('box');
	// alert(box.childNodes.length); // 7
	// 因为有 4 个空白的文本节点存在
	// alert(box.children.length); // 3
	// children 自动忽略掉空白文本节点
	alert(box.children[0]); //[object HTMLParagraphElement]
	alert(box.children[0].nodeType); // 1
	alert(box.children[0].nodeName); // P
	alert(box.children[0].nodeValue); // null
};


// contains() 方法判断一个节点是否是另一个节点的后代
window.onload = function() {
	var box = document.getElementById('box');
	var p = box.firstChild;
	// alert(box.contains(p)); // true
	// 返回布尔值，表示 p 是 box 的子节点
	// Firefox 3.6 以下不支持
	// Safari 2.x 不支持
	// 很多更低的版本提供的两个方案均不支持
	alert(contains(box, p));
};
// 考虑兼容的时候需要使用 compareDocumentPosition() 方法
function contains(refNode, otherNode) {
	if (typeof refNode.contains !== 'undefined') {
		// 此处同时应该需要判断 Safari 版本大于 3.0
		return refNode.contains(otherNode);
	} else if (typeof refNode.compareDocumentPosition === 'function') {
		return refNode.compareDocumentPosition(otherNode) > 16;
	} else {
		// 更低的浏览器兼容，递归判断父节点
		var node = otherNode.parentNode;
		do {
			if (node === refNode) {
				return true;
			} else {
				node = otherNode.parentNode;
			}
		} while (node != null) {
			return false;
		}
	}
}


// DOM 操作内容
window.onload = function() {
	var box2 = document.getElementById('box2');
	// alert(box2.innerText); // Testing text.
	// 注意，此处没有 strong HTML 标签，没有转义
	// Firefox 低版本不支持
	// alert(box2.textContent); // Testing text.
	// box2.innerText = '<b>123</b>';
	// 赋值并转义 HTML
	alert(getInnerText(box2));

};
// 考虑兼容模式
function getInnerText(element) {
	if (typeof element.textContent === 'string') {
		return element.textContent;
	} else {
		return element.innerText;
	}
}
function setInnerText(element, text) {
	if (typeof element.textContent === 'string') {
		element.textContent = text;
	} else {
		element.innerText = text;
	}
}


// innerHTML 不过滤 HTML
window.onload = function() {
	var box2 = document.getElementById('box2');
	alert(box2.innerHTML); // Testing <strong>text</strong>.
	// 返回带上 HTML 标签的字符串
	box2.innerHTML = '<b>123</b>';
	// 在页面中有加粗效果，有 HTML 的效果
	alert(box2.innerHTML); // <b>123</b>
	box2.innerHTML = '<script>alert("Hi")</script>';
	// 此处不能执行，因为 innerHTML 存在作用域，离开了作用域就无效了
};


// outerText
window.onload = function() {
	var box2 = document.getElementById('box2');
	alert(box2.outerText); // Testing text.
	// Firefox 不支持，返回 undefined
	box2.outerText = '<b>123</b>';
	alert(document.getElementById('box2')); // null
	// outerText 赋值会将元素本身抹掉
};



*/






// outerHTML 恶化 outerText 赋值的时候一样
window.onload = function() {
	var box2 = document.getElementById('box2');
	alert(box2.outerHTML); // <div id="box2">Testing <strong>text</strong>.</div>
	// 注意此处包含 div 本身的标签
	box2.outerHTML = '<b>123</b>';
	alert(document.getElementById('box2')); // null
	// outerHTML 赋值也会将元素本身抹掉
};









































