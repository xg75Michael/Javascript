/*
window.onload = function() {
	var box = document.getElementById('box');
	alert(box.innerHTML); // Test  获取元素的文本内容（可以包含 HTML ）
};


window.onload = function() {
	var box = document.getElementById('box');
	box.innerHTML = 'Playing <strong> JS </strong>.';
	// 改变 box 中的文本内容，包含 HTML 可以解析
};


window.onload = function() {
	var box = document.getElementById('box');
	box.id = 'xxx'; // 修改属性的值
};


// getElementsByTagName 参数为标签名字符串，返回数组集合
window.onload = function() {
	var li = document.getElementsByTagName('li');
	// alert(li); // [object HTMLCollection]
	// alert(li.length); // 3
	// alert(li[0] == li.item(0)); // true
	// alert(li[0].tagName); // LI
	alert(li[0].innerHTML); // 1
};


// 获取 body
window.onload = function() {
	var body = document.getElementsByTagName('body')[0];
	alert(body); // [object HTMLBodyElement]
};


window.onload = function() {
	var all = document.getElementsByTagName('*');
	alert(all); // [object HTMLCollection]
	alert(all.length); // 12
	// IE 浏览器比别的浏览器多一个节点， IE 把文档声明也算进去了
	alert(all[0].tagName); // HTML
};


window.onload = function() {
	var box = document.getElementsByName('test');
	alert(box); // [object NodeList]
	// IE 浏览器无法获取不合法的 HTML 中的 name
	// name 属性本身不是 div 里面的属性，所以 IE 忽略，返回 undefined
	alert(box[0]); // [object HTMLDivElement]
};


window.onload = function() {
	var input = document.getElementsByName('test2');
	alert(input); // [object NodeList]
	alert(input[0]); // [object HTMLInputElement]
	alert(input[0].value); // checking
	alert(input[0].checked); // true
	// input 中有合法的 name 属性，所以所有浏览器都支持
};


window.onload = function() {
	var box = document.getElementById('box');
	// alert(box.bbb); // undefined
	// 不支持自定义属性， W3C 不合法，但 IE 支持
	// alert(box.getAttribute('id')); // box
	// alert(typeof box.getAttribute('id')); // string
	// 非 IE 返回字符串， IE 返回对象
	// alert(box.getAttribute('bbb')); // aaa
	// 通过 getAttribute 可以获取自定义属性的值
	// alert(box.class); // undefined
	// alert(box.className); // testClass
	// class 因为关键字问题无法直接使用，需要使用 className 来获取
	// alert(box.getAttribute('class')); // testClass
	// 或者使用 getAttribute 来获取，但是 IE 不可以
	// alert(box.getAttribute('className'));
	// getAttribute 中传递 className 获取， 只有 IE 可以
	// 跨浏览器获取 className
	if (box.getAttribute('className') == null) {
		alert(box.getAttribute('class'));
	} else {
		alert(box.getAttribute('className'));
	}
};


window.onload = function() {
	var box = document.getElementById('box');
	alert(box.onclick); // function onclick(event) { abc() }
	// 返回函数式
	alert(box.getAttribute('onclick')); // abc()
	// 只返回属性值字符串， IE7 以下还是返回函数式
	// 所以尽量避免使用 getAttribute 访问 HTML 属性
};


window.onload = function() {
	var box = document.getElementById('box');
	box.setAttribute('title', 'thisistitle');
	// 创建一个属性并赋值
	alert(box.getAttribute('title')); // thisistitle
	box.setAttribute('align', 'center'); // 文字剧中
	alert(box.getAttribute('align')); // center
	box.setAttribute('style', 'color: green;');
	// IE7 以下没有效果， style 和 onclick 都没有效果，应避免使用
};



*/



window.onload = function() {
	var box = document.getElementById('box');
	box.setAttribute('style', 'color: blue;');
	alert(box.getAttribute('style'));
	setTimeout(function() {
		box.removeAttribute('style');
	}, 1000); //  等待 1 秒后移除 style 属性
};












































