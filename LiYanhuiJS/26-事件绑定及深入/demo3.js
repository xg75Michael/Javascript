/*
// 事件对象补充
// W3C 中提供了 relatedTarget 属性，在 mouseover mouseout 事件中获取
window.addEventListener('load', function() {
	var box = document.getElementById('box');
	box.addEventListener('mouseover', function(evt) {
		console.log(evt.relatedTarget);
	}, false);
	box.addEventListener('mouseout', function(evt) {
		console.log(evt.relatedTarget);
	}, false);
}, false);
// 以上是自己随便写的


// relatedTarget 离目标（鼠标）最近的 DOM 对象
function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	} else if (obj.attachEvent) {
		obj.attachEvent('on' + type, fn);
	}
}
// 跨浏览器移除事件
function removeEvent(obj, type, fn) {
	if (obj.removeEventListener) {
		obj.removeEventListener(type, fn, false);
	} else if (obj.detachEvent) {
		obj.detachEvent('on' + type, fn);
	}
}
addEvent(window, 'load', function() {
	var box = document.getElementById('box');
	// addEvent(box, 'mouseover', function(evt) {
	// 	console.log(evt.relatedTarget);
	// 	// <span> 或 <html>
	// });
	// addEvent(box, 'mouseout', function(evt) {
	// 	console.log(evt.relatedTarget);
	// 	// <span> 或 <html>
	// });

	// IE 有自己的属性， Safari Chrome 也支持
	// mouseover 对应 fromElement , mouseout 对应 toElement
	// addEvent(box, 'mouseover', function() {
	// 	console.log(window.event.fromElement.tagName);
	// });
	// addEvent(box, 'mouseout', function() {
	// 	console.log(window.event.toElement.tagName);
	// });


	addEvent(box, 'mouseout', function(evt) {
		console.log(getTarget(evt));
	});
});
// 兼容处理函数
function getTarget(evt) {
	var e = evt || window.event;
	if (e.srcElement) {
		// IE
		if (e.type == 'mouseover') {
			return e.fromElement.tagName;
		} else if (e.type == 'mouseout') {
			return e.toElement.tagName;
		}
	} else if (e.relatedTarget) {
		// W3C
		return e.relatedTarget;
	}
}


// preventDefault 方法
function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	} else if (obj.attachEvent) {
		obj.attachEvent('on' + type, fn);
	}
}
function removeEvent(obj, type, fn) {
	if (obj.removeEventListener) {
		obj.removeEventListener(type, fn, false);
	} else if (obj.detachEvent) {
		obj.detachEvent('on' + type, fn);
	}
}
addEvent(window, 'load', function() {
	var link = document.getElementsByTagName('a')[0];
	// link.onclick = function() {
	// 	alert('Michael');
	// 	return false;
	// };
	// 原生方法在会受限，在 return false 必须在最后，不然导致后面的代码无法解析
	// addEvent(link, 'click', function() {
	// 	return false;
	// });
	// 在自定义函数中返回 false 并没有作用，不会阻止默认行为
	// addEvent(link, 'click', function(evt) {
	// 	evt.preventDefault();
	// 	// 建议使用 W3C 标准提供的 preventDefault() 方法阻止默认行为
	// });
	// 在这个基础上做个兼容处理
	addEvent(link, 'click', function(evt) {
		preDef(evt);
		// 阻止默认行为
	});
});
function preDef(evt) {
	var e = evt || window.event;
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
}


// contextmenu 事件，改变右击菜单内容
function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	} else if (obj.attachEvent) {
		obj.attachEvent('on' + type, fn);
	}
}
function removeEvent(obj, type, fn) {
	if (obj.removeEventListener) {
		obj.removeEventListener(type, fn, false);
	} else if (obj.detachEvent) {
		obj.detachEvent('on' + type, fn);
	}
}
addEvent(window, 'load', function() {
	var text = document.getElementById('text');
	addEvent(text, 'contextmenu', function(evt) {
		var e = evt || window.event;
		preDef(evt);
		// 阻止右击菜单默认行为
		var menu = document.getElementById('menu');
		menu.style.display = 'block';
		menu.style.left = e.clientX + 'px';
		menu.style.top = e.clientY + 'px';

		addEvent(document, 'click', function() {
			menu.style.display = 'none';
		});
	});
});
function preDef(evt) {
	var e = evt || window.event;
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
}


// beforeunload 事件，卸载前事件
function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	} else if (obj.attachEvent) {
		obj.attachEvent('on' + type, fn);
	}
}
function removeEvent(obj, type, fn) {
	if (obj.removeEventListener) {
		obj.removeEventListener(type, fn, false);
	} else if (obj.detachEvent) {
		obj.detachEvent('on' + type, fn);
	}
}
addEvent(window, 'beforeunload', function(evt) {
	preDef(evt);
});
function preDef(evt) {
	var e = evt || window.event;
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
		// 在 IE 中可以显示出来 returnValue 的值
	}
}


// 滚轮事件 mousewheel
// Firefox 和其他的浏览器不同
function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	} else if (obj.attachEvent) {
		obj.attachEvent('on' + type, fn);
	}
}
function removeEvent(obj, type, fn) {
	if (obj.removeEventListener) {
		obj.removeEventListener(type, fn, false);
	} else if (obj.detachEvent) {
		obj.detachEvent('on' + type, fn);
	}
}
function preDef(evt) {
	var e = evt || window.event;
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
}
addEvent(document, 'mousewheel', function(evt) {
	var e = evt || window.event;
	console.log(e.wheelDelta);
	// 实测貌似是滚轮加速度，最小单位为 3 和 -3 
	// Chrome 敏感度超高
});
addEvent(document, 'DOMMouseScroll', function(evt) {
	console.log(evt.detail * 3);
	// Firefox 是使用的不一样的事件，不一样的属性
	// 也是滚轮加速度的感觉，最小单位为 1 和 -1
	// 为了统一，所以进行了换算
});


// 对于滚轮事件的兼容处理问题
function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	} else if (obj.attachEvent) {
		obj.attachEvent('on' + type, fn);
	}
}
addEvent(document, 'mousewheel', function(evt) {
	console.log(WD(evt));
});
addEvent(document, 'DOMMouseScroll', function(evt) {
	console.log(WD(evt));
});
// 浏览器兼容处理
function WD(evt) {
	var e = evt || window.event;
	if (e.wheelDelta) {
		return e.wheelDelta;
	} else if (evt.detail) {
		return evt.detail * 3;
	}
}



*/


// DOMContentLoaded
// 初始 HTML 文档被完全加载和解析时触发，不需要等待样式表和图像等加载。
// 注意： DOMContentLoaded 监听事件绑定的所属的 script 需要加载完成才能触发！

// readystatechange
// 只要 readyState 属性发生改变就会触发 readystatechange 事件
// document 一般会经历： 
// loading 正在加载，就像是初始文件正在加载。
// interactive 文档加载结束但是图片和样式仍在加载，像是 DOMContentLoaded
// complete 全部加在结束，将要触发 load 事件。

// 网页加载事件触发顺序
// readystate: interactive
// DOMContentLoaded
// readystate: complete
// load













































