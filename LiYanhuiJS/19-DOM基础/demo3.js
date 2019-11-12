/*
// 文本节点 不等于 文本内容
window.onload = function() {
	var box = document.getElementById('box');
	// alert(box.nodeName); // DIV
	// 获取元素节点的标签名，和 .tagName 一样
	// alert(box.tagName); // DIV
	// alert(box.nodeType); // 1
	alert(box.nodeValue); // null
	// 元素节点本身没有内容，所以输出 null
	// node 本身把节点指针放在元素 div 上，所以本身没有 value
	// 如果要输出 <div>xxx</div> 中的文本内容需要用 innerHTML
};


window.onload = function() {
	var box = document.getElementById('box');
	// 测试元素节点的文本内容
	alert(box.innerHTML); // Test <em> Italic</em>.
};


window.onload = function() {
	var box = document.getElementById('box');
	// alert(box.childNodes); // [object NodeList]
	// 返回当前元素节点的所有子节点列表
	// alert(box.childNodes.length); // 3
	// 3 个子节点
	// alert(box.childNodes.item(0)); // [object Text]
	// alert(box.childNodes.item(0).nodeType); // 3  表示文本节点
	// alert(box.childNodes.item(0).innerHTML); // undefined  并是不元素节点，无效
	// alert(box.childNodes.item(0).nodeValue); // Test  获取文本节点的文本内容
	// alert(box.childNodes.item(0).nodeName); // #text  文本节点没有标签名
	// 第一个节点： Test  文本节点对象，获取文本节点的文本内容可以用 nodeValue 属性
	// alert(box.childNodes.item(1)); // [object HTMLElement]
	// alert(box.childNodes.item(1).nodeName); //  EM
	// alert(box.childNodes.item(1).nodeType); //  1
	// alert(box.childNodes.item(1).innerHTML); //  Italic
	// alert(box.childNodes.item(1).nodeValue); //  null
	// 第二个节点： <em>Italic</em> 元素节点
	alert(box.childNodes.item(2)); // [object Text]
	// 第三个节点： .  文本节点对象，和第一个节点相似
};


// 通过判断 nodeType 来进行不同的输出
window.onload = function() {
	var box = document.getElementById('box');
	for(var i = 0; i < box.childNodes.length; i++) {
		if (box.childNodes[i].nodeType === 1) {
			alert('元素节点： ' + box.childNodes[i].nodeName);
		} else if (box.childNodes[i].nodeType === 3) {
			alert('文本节点： ' + box.childNodes[i].nodeValue);
		}
	}
};


window.onload = function() {
	var pox = document.getElementById('pox');
	// pox.innerHTML = 'Testing <strong>pox</strong>.';
	// innerHTML 可以解析 HTML
	pox.childNodes[0].nodeValue = 'Testing <strong>pox</strong>.';
	// nodeValue 无法解析 HTML
};
*/







window.onload = function() {
	var pox = document.getElementById('pox');
	// pox.innerHTML = 'Testing <strong>pox</strong>.';
	// innerHTML 可以解析 HTML
	pox.childNodes[0].nodeValue = 'Testing <strong>pox</strong>.';
	// nodeValue 无法解析 HTML
};














































