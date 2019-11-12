/*
// 层次节点属性和方法
window.onload = function() {
	var box = document.getElementById('box');
	alert(box.childNodes[0].nodeValue); // Test 
	// 获取第一个子节点内容
	alert(box.childNodes[box.childNodes.length - 1].nodeValue); // .
	// 获取最后一个子节点内容
};


// firstChild lastChild
window.onload = function() {
	var box = document.getElementById('box');
	alert(box.firstChild.nodeValue); // Test 
	// 获取第一个子节点内容
	alert(box.lastChild.nodeValue); // .
	// 获取最后一个子节点内容
};


// ownerDocument 返回一个文档对象
window.onload = function() {
	var box = document.getElementById('box');
	alert(box.firstChild.ownerDocument); // [object HTMLDocument] 
	alert(document); // [object HTMLDocument]
	alert(box.firstChild.ownerDocument == document); // true
	alert(box.firstChild.ownerDocument.nodeName); // #document
	alert(box.firstChild.ownerDocument.nodeType); // 9
};


// parentNode previousSibling nextSibling
window.onload = function() {
	var box = document.getElementById('box');
	alert(box.parentNode); // [object HTMLBodyElement]
	alert(box.nextSibling); // [object Text]
	alert(box.nextSibling.nodeName); // #text
	alert(box.nextSibling.previousSibling === box); // true
	alert(box.nextSibling.previousSibling.nodeName); // DIV
};


// 属性节点
window.onload = function() {
	var box = document.getElementById('box');
	// alert(box.attributes); // [object NamedNodeMap]
	// alert(box.attributes.length); // 3
	// alert(box.attributes[0]); // [object Attr]
	// 属性节点
	// alert(box.attributes[0].nodeType); // 2  属性节点类型值
	// alert(box.attributes[0].nodeValue); // box
	alert(box.attributes[0].nodeName); // id
	alert(box.attributes['id'].nodeValue); // box
};


window.onload = function() {
	var box = document.getElementById('box2');
	alert(box.childNodes.length); // 7
	// 因为换行空格都算成了空白文本节点，所以造成了原本 3 个元素节点变成了 7 个
};


window.onload = function() {
	var box = document.getElementById('box2');
	alert(filterWhiteNode(box.childNodes).length); // 3
	// 利用函数来判断是否是空白的文本节点，然后正常获取
};
// 忽略空白字符
function filterWhiteNode(node) {
	var ret = [];
	for (var i = 0; i < node.length; i++) {
		if (node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)) {
			continue;
		} else {
			ret.push(node[i]);
		}
	}
	return ret;
}


window.onload = function() {
	var box = document.getElementById('box2');
	alert(removeWhiteNode(box.childNodes).length); // 3
	// 利用函数来移除空白文本节点
};
// 移除空白字符
function removeWhiteNode(node) {
	for (var i = 0; i < node.length; i++) {
		if (node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)) {
			node[i].parentNode.removeChild(node[i]);
		}
	}
	return node;
}
*/





// 获得第一个非空白元素节点的标签
window.onload = function() {
	var box = document.getElementById('box2');
	alert(removeWhiteNode(box).firstChild.nodeName); // P
	// 通过去掉空白文本节点成功获得第一个元素节点的 nodeName
};
function removeWhiteNode(node) {
	for (var i = 0; i < node.childNodes.length; i++) {
		if (node.childNodes[i].nodeType === 3 && /^\s+$/.test(node.childNodes[i].nodeValue)) {
			node.removeChild(node.childNodes[i]);
		}
	}
	return node;
}













































