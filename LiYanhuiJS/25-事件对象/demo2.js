/*
// keydown 按下任意键触发
// keyup 弹起任意键触发
// keypress 按下字符键触发，比如 1 2 3 a d f 等等

// 键码： 键盘上的任意键
// 字符编码： 键盘上可以输出的字符的键

// event.keyCode 返回键码，也就是键盘上的任意键
// 返回按键的 ASCII 码，不区分大小写
window.onload = function() {
	document.onkeydown = function(evt) {
		var e = evt || window.event;
		console.log(e.keyCode);
	};
};


// keypress 按下字符键触发，比如 1 2 3 a d f 等等
// 不返回非字符键，而且区分大小写
window.onload = function() {
	document.onkeypress = function(evt) {
		var e = evt || window.event;
		console.log(e.keyCode);
	};
};
// 浏览器中返回的分号 ; 数字不一样？ 可能是旧版本
// 新版 Safari Chrome Firefox 返回的都相同


// charCode 属性在使用 keypress 情况下
// Safari Chrome Firefox 都可以正常返回数字
// 但是 IE 和 Opera 不支持，返回 undefined （未测试新版本）
// 需要做一个兼容处理
window.onload = function() {
	document.onkeypress = function(evt) {
		var e = evt || window.event;
		console.log(e.charCode);
	};
};


// 兼容处理
window.onload = function() {
	document.onkeypress = function(evt) {
		console.log(getCharCode(evt));
		// 也可以直接转换成 字符
		console.log(String.fromCharCode(getCharCode(evt)));
	};
};
function getCharCode(evt) {
	var e = evt || window.event;
	if (typeof e.charCode == 'number') {
		return e.charCode;
	} else {
		return e.keyCode;
	}
}


window.onload = function() {
	document.onkeypress = function(evt) {
		console.log(evt.keyCode);
		console.log(evt.charCode);
		// 新版本中貌似没有区别
		// IE 浏览器中没有测试
	};
};


// event 在 W3C 中和 IE 中的常用属性和方法
// event.target 和 srcElement
window.onload = function() {
	document.onclick = function(evt) {
		var e = evt || window.event;
		console.log(e.target.tagName);
		// 返回鼠标点击的元素
	};
};
// IE 中需要使用 .srcElement 属性


window.onload = function() {
	document.onclick = function(evt) {
		console.log(getTarget(evt));
	};
};
// 兼容处理，获得点击的元素
function getTarget(evt) {
	var e = evt || window.event;
	return e.target || e.srcElement;
}


// 事件流有两种模式： 冒泡和捕获
// 冒泡是从内向外触发事件
// 捕获是从外向内触发事件
// stopPropagation 和 cancelBubble
window.onload = function() {
	document.onclick = function(evt) {
		alert('document');
	};
	document.documentElement.onclick = function(evt) {
		alert('html');
	};
	document.body.onclick = function(evt) {
		alert('body');
	};
	document.getElementById('box').onclick = function(evt) {
		alert('div');
	};
	document.getElementsByTagName('input')[0].onclick = function(evt) {
		var e = evt || window.event;
		alert('input');
		e.stopPropagation(); // 阻止冒泡行为
		// IE 中需要设置 cancelBubble 属性
		// 其他浏览器貌似也支持 cancelBubble 属性
		// e.cancelBubble = true;
	}
};


window.onload = function() {
	document.onclick = function(evt) {
		alert('document');
	};
	document.documentElement.onclick = function(evt) {
		alert('html');
	};
	document.body.onclick = function(evt) {
		alert('body');
	};
	document.getElementById('box').onclick = function(evt) {
		alert('div');
	};
	document.getElementsByTagName('input')[0].onclick = function(evt) {
		alert('input');
		setStop(evt);
	}
};
// 兼容处理
function setStop(evt) {
	var e = evt || window.event;
	typeof e.stopPropagation == 'function' ? e.stopPropagation() : e.cancelBubble = true;
}
*/





window.onload = function() {
	document.onclick = function(evt) {
		alert('document');
	};
	document.documentElement.onclick = function(evt) {
		alert('html');
	};
	document.body.onclick = function(evt) {
		alert('body');
	};
	document.getElementById('box').onclick = function(evt) {
		alert('div');
	};
	document.getElementsByTagName('input')[0].onclick = function(evt) {
		alert('input');
		setStop(evt);
	}
};
// 兼容处理
function setStop(evt) {
	var e = evt || window.event;
	typeof e.stopPropagation == 'function' ? e.stopPropagation() : e.cancelBubble = true;
}














































