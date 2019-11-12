/*
// IE 中的 DOM 是以 COM 来实现的，和别的浏览器有些差异
// 节点分三类
// 1. 元素节点： 其实就是标签 <div></div>
// 2. 文本节点： 其实就是纯文本 test
// 3. 属性节点： 其实就是标签的属性 id=box


// 查找元素
// getElementById() 接受一个 id 值作为参数获取元素
// id 具有唯一性
var box = document.getElementById('box');
alert(box); // null
// 查找不到的原因是 DOM 操作必须等待 HTML 加载完毕才能获取
// 需要把 script 移到 body 后面，或者使用 onload 事件
window.onload = function() {
	// 等待 HTML 加载完毕再执行代码
	var box = document.getElementById('box');
	alert(box); // [object HTMLDivElement]
	// 表示 div 的节点对象
};


// 需要考虑 IE 5.0- （以下）的版本不兼容此方法
window.onload = function() {
	if (document.getElementById) {
		var box = document.getElementById('box');
		alert(box);
	} else {
		alert('浏览器不兼容，版本过低。');
	}
	
};


window.onload = function() {
	var box = document.getElementById('box');
	alert(box.tagName); // DIV
	// 注意都是大写字母
	alert(box.innerHTML); // Test
	// 获取标签中的文本
	// 如果内部有标签会直接返回文本模式 Test<p>hi</p>
	alert(typeof box.innerHTML); // string
};


window.onload = function() {
	var box2 = document.getElementById('box2');
	alert(box2.id); // box2  获取这个节点 id 属性的值
	alert(box2.title); // title  获取这个节点 title 属性的值
	alert(box2.style); // [object CSSStyleDeclaration]
	// 获取这个节点的属性对象
	alert(box2.style.color); // blue
	alert(box2.className); // box2Class  获取这个节点 class 属性的值
};


// 元素的自定义属性，尽可能不使用
window.onload = function() {
	var box3 = document.getElementById('box3');
	alert(box3.bbb);
	// 自定义属性值有 IE 支持
};
*/





// 元素的自定义属性，尽可能不使用
window.onload = function() {
	var box3 = document.getElementById('box3');
	alert(box3.bbb);
	// 自定义属性值有 IE 支持
};












































