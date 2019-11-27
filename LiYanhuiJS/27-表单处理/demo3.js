/*
// 文本框脚本 input text 和 textarea 中 value 的不同
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	// alert(user.value);
	// alert(content.value);
	addEvent(user, 'blur', function() {
		console.log(user.value);
	});
	addEvent(content, 'blur', function() {
		console.log(content.value);
	});
	// HTML 中 input 有 value 属性，但是 textarea 中没有 value 属性
	// JS 中 input 和 textarea 都有 value 属性
	// 使用标准 DOM 方法获取
	// alert(user.getAttribute('value')); // text
	// alert(content.getAttribute('value')); // null
	// 后者获取不到，兼容性有问题
	// 无法获取更改后的 value
});


// defaultValue
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	addEvent(user, 'blur', function() {
		console.log(user.defaultValue);
		// 获取一开始的 value 值，不会改变
	});
});


// select() 方法来选择文本
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	user.select(); // 选定文本
	// 和 user.focus() 方法有点类似
});


// setSelectionRange(start, end) 选择部分文本
// IE 不支持
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	// 非 IE 浏览器或者 IE9+ 浏览器支持
	// user.setSelectionRange(0, 2); // 只选中 te
	// user.setSelectionRange(0, user.value.length); // 选择全部文本

	// IE 有个文本范围的概念
	// W3C 也有一个 DOM 范围的概念
	// var range = user.createTextRange(); // 文本范围 range 对象
	// range.collapse(true); // 将文本指针移到开头
	// range.moveStart('character', 0); // 逐字移动
	// range.moveEnd('character', 2); // 同上
	// 从第 N 个选择 M 个
	// range.select();
});


// 处理选择部分文本兼容问题
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	
	getSelectText(user, 1, 3);
});
// 兼容函数
function getSelectText(text, start, end) {
	if (text.setSelectionRange) {
		text.setSelectionRange(start, end);
		text.focus();
	} else if (text.createTextRange) {
		var range = user.createTextRange();
		range.collapse(true);
		range.moveStart('character', start);
		range.moveEnd('character', end-start);
		range.select();
	}
}


// select 事件
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	
	addEvent(user, 'select', function(evt) {
		// alert(1);
		// Firefox 和 Chrome 中选定字符鼠标释放后触发 select 事件
		// Safari 和 IE 是只要选中一个字符就会触发 select 事件
		// alert(this.value);
		// Firefox 中提供了两个属性来获取选择的索引
		// console.log(this.selectionStart);
		// console.log(this.selectionEnd);
		// 各现代浏览器都支持
		// console.log(this.value.substring(this.selectionStart, this.selectionEnd));
		// 返回被选择的文本内容
		// console.log(this.value.slice(this.selectionStart, this.selectionEnd));
		// 效果一样的
		// IE8 以及之前的不支持，需要用 selection 对象
		// alert(document.selection);
		// document.selection 对象可以选择
		// 有一个方法可以创建文本范围对象 createRange()
		// createRange() 有一个属性 text 可以得到选择的文本
	});
});
*/





// 兼容处理 select 事件
addEvent(window, 'load', function() {
	var fm = document.getElementById('myForm');
	var user = fm.elements['user'];
	var content = fm.elements['content'];
	
	addEvent(user, 'select', function(evt) {
		// alert(1);
		// Firefox 和 Chrome 中选定字符鼠标释放后触发 select 事件
		// Safari 和 IE 是只要选中一个字符就会触发 select 事件
		// alert(this.value);
		// Firefox 中提供了两个属性来获取选择的索引
		// console.log(this.selectionStart);
		// console.log(this.selectionEnd);
		// 各现代浏览器都支持
		// console.log(this.value.substring(this.selectionStart, this.selectionEnd));
		// 返回被选择的文本内容
		// console.log(this.value.slice(this.selectionStart, this.selectionEnd));
		// 效果一样的
		// IE8 以及之前的不支持，需要用 selection 对象
		// alert(document.selection);
		// document.selection 对象可以选择
		// 有一个方法可以创建文本范围对象 createRange()
		// createRange() 有一个属性 text 可以得到选择的文本
		// alert(document.selection.createRange().text);
		console.log(getSelectText(user));
	});
});
// 兼容函数
function getSelectText(text) {
	if (typeof text.selectionStart == 'number') {
		return text.value.substring(text.selectionStart, text.selectionEnd);
	} else if (document.selection) {
		return document.selection.createRange().text;
	}
}
















































