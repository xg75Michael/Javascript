/*
window.onload = function() {
	document.write('<p>Testing write</p>');
	// 会覆盖掉整个页面，所以一般只用于测试
};


window.onload = function() {
	var box = document.getElementById('box');
	var p = document.createElement('p'); // 只是创建了一个 p 元素，并没有添加到文档中，只是在内存中
	box.appendChild(p); // 将新节点 p 添加到 div 子节点列表末尾
	var text = document.createTextNode('Testing Div4');
	p.appendChild(text); // 把新的文本节点添加到 p 中
	// box.appendChild(text); // 添加到了 div 子节点列表末尾，就是 p 元素后面
	document.body.appendChild(p); // 在 div 同级末尾添加一个 p 元素
};


window.onload = function() {
	var box = document.getElementById('box');
	var p = document.createElement('p');
	// document.body.insertBefore(p, box); // 效果和下面相同，因为在此文档中 box 的父节点就是 body
	box.parentNode.insertBefore(p, box); // insertBefore 需要先跳到父节点
};


// 有 insertBefore 方法，但是没有 insertAfter 方法
window.onload = function() {
	var box = document.getElementById('box');
	var p = document.createElement('p');
	insertAfter(p, box);
};
function insertAfter(newElement, targetElement) {
	// 得到父节点，就是 body ，但是不建议直接使用 body
	var parent = targetElement.parentNode;
	if (parent.lastChild === targetElement) {
		// 判断如果是最后一个节点，直接调用 appendChild 方法
		parent.appendChild(newElement);
	} else {
		// 如果不是最后一个节点才可以使用 nextSibling
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}


// iframe input radio checkbox button
// 这几个元素创建的时候需要考虑 IE 6 和 7 兼容性
window.onload = function() {
	var body = document.body;
	var input = document.createElement('input');
	input.setAttribute('type', 'radio');
	input.setAttribute('name', 'sex');
	body.appendChild(input);
	// 在 IE 6 和 7 中无法选中 input
};


// 替换节点
window.onload = function() {
	var span = document.getElementsByTagName('span')[0];
	var em = document.createElement('em');
	span.parentNode.replaceChild(em, span);
	// 使用父节点，把 span 节点替换成 em 节点
};


// 克隆节点
window.onload = function() {
	var box = document.getElementById('box');
	var clone = removeWhiteNode(box).firstChild.cloneNode(false);
	// 如果传参是 true 是把标签内的文本也克隆，如果是 false 只克隆标签
	// 使用函数去掉空白的文本节点
	box.appendChild(clone);
};
function removeWhiteNode(node) {
	for (var i = 0; i < node.childNodes.length; i++) {
		if (node.childNodes[i].nodeType === 3 && /^\s+$/.test(node.childNodes[i].nodeValue)) {
			node.childNodes[i].parentNode.removeChild(node.childNodes[i]);
		}
	}
	return node;
}



*/


window.onload = function() {
	var box = document.getElementById('box');
	// box.removeChild(removeWhiteNode(box).firstChild);
	// 删掉第一个子节点
	box.parentNode.removeChild(box);
	// 删除整个 box 节点
};
function removeWhiteNode(node) {
	for (var i = 0; i < node.childNodes.length; i++) {
		if (node.childNodes[i].nodeType === 3 && /^\s+$/.test(node.childNodes[i].nodeValue)) {
			node.childNodes[i].parentNode.removeChild(node.childNodes[i]);
		}
	}
	return node;
}













































