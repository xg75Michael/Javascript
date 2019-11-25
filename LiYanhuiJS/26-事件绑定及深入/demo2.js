/*
// 上一节的事件处理方法
function addEvent(obj, type, fn) {
	var saved = null;
	if (typeof obj['on' + type] == 'function') {
		saved = obj['on' + type];
	}
	obj['on' + type] = function() {
		if (saved) {
			saved();
		}
		fn.call(this); // 为了传递 this 需要用 .call
	};
}
addEvent(window, 'load', function() {
	var box = document.getElementById('box');

	addEvent(box, 'click', toBlue); // this 没传递过去
});
function toRed() {
	this.className = 'red';
	removeEvent(this, 'click');
	addEvent(this, 'click', toBlue);
}
function toBlue() {
	this.className = 'blue';
	removeEvent(this, 'click');
	addEvent(this, 'click', toRed);
}
function removeEvent(obj, type) {
	if (obj['on' + type]) {
		obj['on' + type] = null;
	}
}


// W3C 自带的两个添加事件和删除事件
// 覆盖问题，解决
window.addEventListener('load', function() {
	alert('First Michael');
}, false);
window.addEventListener('load', function() {
	alert('Second Michael');
}, false);
window.addEventListener('load', function() {
	alert('Third Michael');
}, false);


// 重复添加事件问题，解决
window.addEventListener('load', init, false);
window.addEventListener('load', init, false);
window.addEventListener('load', init, false);
// 只有一个
function init() {
	alert('init');
}


// 是否可以传递 this ，解决
window.addEventListener('load', function() {
	var box = document.getElementById('box');
	box.addEventListener('click', function() {
		alert(this);
	}, false);
}, false);


// 是否可以传递 this ，解决
window.addEventListener('load', function() {
	var box = document.getElementById('box');
	box.addEventListener('click', toBlue, false);
}, false);

function toRed() {
	this.className = 'red';
	this.removeEventListener('click', toRed, false);
	this.addEventListener('click', toBlue, false);
}
function toBlue() {
	this.className = 'blue';
	this.removeEventListener('click', toBlue, false);
	this.addEventListener('click', toRed, false);
}


// 添加一个额外的方法会不会被覆盖，解决
window.addEventListener('load', function() {
	var box = document.getElementById('box');
	box.addEventListener('click', function() {
		alert('someother function');
	}, false);
	box.addEventListener('click', toBlue, false);
}, false);

function toRed() {
	this.className = 'red';
	this.removeEventListener('click', toRed, false);
	this.addEventListener('click', toBlue, false);
}
function toBlue() {
	this.className = 'blue';
	this.removeEventListener('click', toBlue, false);
	this.addEventListener('click', toRed, false);
}


// W3C 中的捕获和冒泡，可以设置方式
// 一般使用冒泡，因为 IE 只支持冒泡，也就是 false
window.addEventListener('load', function() {
	var box = document.getElementById('box');
	box.addEventListener('click', function() {
		alert('div');
	}, true);
	document.addEventListener('click', function() {
		alert('document')
	}, true);
}, false);


// 综上所述： W3C 比较完美的解决了这些问题
// 但是 IE8 和之前的浏览器并不支持，而是采用了自己的事件


// IE 事件处理函数
// attachEvent() detachEvent()
// IE 不支持捕获，只有冒泡
// IE 添加事件不能屏蔽重复的函数
// IE 中 this 指向 window 而不是 DOM 对象


// 覆盖问题，解决，但是顺序相反
window.attachEvent('onload', function() {
	alert('First IE');
});
window.attachEvent('onload', function() {
	alert('Second IE');
});
window.attachEvent('onload', function() {
	alert('Third IE');
});


// 相同函数屏蔽问题，未解决，重复执行
window.attachEvent('onload', init);
window.attachEvent('onload', init);
function init() {
	alert('init');
}


// 是否可以传递 this ，不能传递 this ，指向 window
window.attachEvent('onload', function() {
	var box = document.getElementById('box');
	box.attachEvent('onclick', function() {
		// alert(this === box); // false
		alert(this === window); // true
	});
});


// 添加一个额外的方法会不会被覆盖，解决，同样顺序相反
window.attachEvent('onload', function() {
	var box = document.getElementById('box');
	box.attachEvent('onclick', function() {
		alert('First div');
	});
	box.attachEvent('onclick', function() {
		alert('Second div');
	});
});


// IE 中来变相的获取 box 来解决
window.attachEvent('onload', function() {
	var box = document.getElementById('box');
	box.attachEvent('onclick', toBlue);
});
function toRed() {
	var that = window.event.srcElement;
	// 利用 IE 中的 event.srcElement 来获取到 box
	that.className = 'red';
	that.detachEvent('onclick', toRed);
	that.attachEvent('onclick', toBlue);
}
function toBlue() {
	var that = window.event.srcElement;
	// 利用 IE 中的 event.srcElement 来获取到 box
	that.className = 'blue';
	that.detachEvent('onclick', toBlue);
	that.attachEvent('onclick', toRed);
}


//  event 对象的获取
window.attachEvent('onload', function() {
	var box = document.getElementById('box');
	// box.onclick = function(evt) {
	// 	alert(evt);
	// };
	// IE 中无法得到参数 evt
	box.attachEvent('onclick', function(evt) {
		// IE 现代事件绑定机制是可以的
		// alert(evt); // object
		alert(evt.type); // click
		alert(evt.srcElement.tagName); // DIV
		alert(window.event.srcElement.tagName); // DIV
	});
});



*/




// 跨浏览器兼容解决方案
// 添加事件
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
// 跨浏览器获取目标对象
function getTarget(evt) {
	if (evt.target) { // W3C
		return evt.target;
	} else if (window.event.srcElement) { // IE
		return window.event.srcElement;
	}
}
function toRed(evt) {
	var that = getTarget(evt);
	that.className = 'red';
	removeEvent(that, 'click', toRed);
	addEvent(that, 'click', toBlue);
}
function toBlue(evt) {
	var that = getTarget(evt);
	that.className = 'blue';
	removeEvent(that, 'click', toBlue);
	addEvent(that, 'click', toRed);

}
addEvent(window, 'load', function() {
	var box = document.getElementById('box');
	addEvent(box, 'click', toBlue);
});


















































