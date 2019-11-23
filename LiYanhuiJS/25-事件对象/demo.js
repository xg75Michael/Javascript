/*
window.onload = function() {
	document.onclick = function() {
		alert('document');
	};
};


window.onload = function() {
	document.onclick = box;
};
function box() {
	alert('document');
}


window.onload = function() {
	document.onclick = function() {
		alert(this); // [object HTMLDocument]
		// 也就是 HTML ，代表的是绑定的对象
	};
};


window.onload = function() {
	document.onclick = box;
};
function box() {
	alert(this); // [object HTMLDocument]
	// 同样是 HTML ，因为函数被 onclick 绑定了，所以 this 代表 document
}


function box(a,b) {
	// 获取参数的数量
	alert(arguments.length);
}
box(4,5); // 2


window.onload = function() {
	document.onclick = function() {
		// alert(arguments.length); // 1
		// 如果是事件处理函数绑定的函数，浏览器默认传 event 参数
		alert(arguments[0]); // [object MouseEvent]
		// 鼠标事件对象，因为是 onclick
	};
};


// 也可以显示的传入 event 参数
window.onload = function() {
	document.onclick = function(event) {
		alert(event); // [object MouseEvent]
	};
};
// IE 又不支持，所以需要写一个兼容版本


// IE 兼容版
window.onload = function() {
	document.onclick = function(event) {
		var e = event || window.event;
		alert(e); // [object MouseEvent]
	};
};


// IE 兼容版
window.onload = function() {
	document.onclick = function(event) {
		var e = event || window.event;
		alert(e); // [object MouseEvent]
	};
};


// 鼠标事件中 mousedown mouseup 中 event 对象存在一个 button 属性表示按下或释放
// 0 表示左键， 1 表示中间键， 2 表示右键
window.onload = function() {
	document.onmouseup = function(event) {
		var e = event || window.event;
		alert(e.button);
		// 根据用户点击左键右键中间键来返回不一样的数字
	};
};
// IE 中的 button 属性和其他浏览器不一样，共有 7 个
// 常用的 1 表示左键， 2 表示右键， 4 表示中间键


// 鼠标事件中 mousedown mouseup 中 event 对象存在一个 button 属性表示按下或释放
// 0 表示左键， 1 表示中间键， 2 表示右键
window.onload = function() {
	document.onmouseup = function(event) {
		if (getButton(event) == 0) {
			alert('left button');
		} else if (getButton(event) == 1) {
			alert('mid button');
		} else if (getButton(event) == 2) {
			alert('right button');
		}
	};
};
// 在浏览器同时支持 W3C 和 IE 的时候，以 W3C 为准
// 跨浏览器鼠标按钮
function getButton(evt) {
	var e = evt || window.event;
	if (evt) {
		return e.button;
	} else if (window.event) {
		switch(e.button) {
			case 1:
				return 0;
			case 4:
				return 1;
			case 2:
				return 2;
			case 0:
				return 2; // 此处为了兼容 360 的浏览器设置
				// 如果不是 onclick 的话就没问题
		}
	}
}


window.onload = function() {
	document.onclick = function(evt) {
		var e = evt || window.event;
		// console.log(e.clientX + ', ' + e.clientY);
		// 控制台打印出鼠标点击的位置坐标，这个只是可视区域的坐标
		console.log(e.clientY + document.documentElement.scrollTop);
		// 打印出加上滚动的距离
	};
};


window.onload = function() {
	document.onclick = function(evt) {
		var e = evt || window.event;
		console.log(e.screenX + ', ' + e.screenY);
		// 相对于屏幕的坐标
	};
};


// 修改键
window.onload = function() {
	document.onclick = function(evt) {
		var e = evt || window.event;
		alert(e.shiftKey);
		// 判断 shift 键是否被按住
	};
};


window.onload = function() {
	document.onclick = function(evt) {
		alert(getKey(evt));
	};
};
// 该函数返回所有被按住的键的数组
function getKey(evt) {
	var e = evt || window.event;
	var keys = [];
	if (e.shiftKey) {
		keys.push('shift');
	}
	if (e.ctrlKey) {
		keys.push('ctrl');
	}
	if (e.altKey) {
		keys.push('alt');
	}
	return keys;
}
*/




window.onload = function() {
	document.onclick = function(evt) {
		alert(getKey(evt));
	};
};
// 该函数返回所有被按住的键的数组
function getKey(evt) {
	var e = evt || window.event;
	var keys = [];
	if (e.shiftKey) {
		keys.push('shift');
	}
	if (e.ctrlKey) {
		keys.push('ctrl');
	}
	if (e.altKey) {
		keys.push('alt');
	}
	return keys;
}














































