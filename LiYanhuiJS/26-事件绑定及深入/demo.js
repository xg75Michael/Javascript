/*
// 事件绑定分为两种，內联模型和脚本模型
// 传统绑定
window.onload = function() {
	var box = document.getElementById('box');
	box.onclick = function() {
		alert('Div');
	};
};


// alert(window.onload); // null  还没有注册
window.onload = function() {
	alert('First');
};
// alert(window.onload);
// function () {alert('First');}
// alert(typeof window.onload); // function
window.onload = function() {
	alert('Second onload');
};
// 只打印后者 Second onload
// 如果页面上有两个或者多个 JS 文件，并有多个 onload 函数，后者覆盖前者


// 解决事件覆盖问题
window.onload = function() {
	alert('First');
};
// 判断 window.onload 是否存在
if (typeof window.onload == 'function') {
	var saved = null;
	saved = window.onload;
}
window.onload = function() {
	if (saved) {
		saved(); // 执行上一个事件
	}
	alert('Second onload'); // 执行本此事件
};


// 事件切换器
window.onload = function() {
	var box = document.getElementById('box');
	// box.onclick = function(event) {
	// 	if (event.target.getAttribute('class') == 'red') {
	// 		event.target.setAttribute('class', 'blue');
	// 	} else {
	// 		event.target.setAttribute('class', 'red');
	// 	}
	// };
	// 上面是自己写的一种解决方案

	// box.onclick = function() {
	// 	alert('something');
	// }
	// 会被覆盖
	box.onclick = toBlue;
};
function toRed() {
	this.className = 'red';
	this.onclick = toBlue;
}
function toBlue() {
	this.className = 'blue';
	this.onclick = toRed;
}


// 对象的操作其实是可以使用数组的方式来完成
window['onload'] = function() {
	alert('["onload"]');
}


// 添加事件函数
// obj 相当于 window
// type 相当于 onload
// fn 相当于 function
function addEvent(obj, type, fn) {
	// 用于保存上一个事件
	var saved = null;
	// 判断事件是否存在
	if (typeof obj['on' + type] == 'function') {
		saved = obj['on' + type];
		// 保存上一个事件
	}
	// 执行事件
	obj['on' + type] = function() {
		if (saved) {
			saved();
		}
		fn();
	};

}
addEvent(window, 'load', function() {
	alert('First Michael');
});
addEvent(window, 'load', function() {
	alert('Second Michael');
});
addEvent(window, 'load', function() {
	alert('Third Michael');
});
addEvent(window, 'load', function() {
	alert('Forth Michael');
});



*/






// 添加事件函数
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
	// addEvent(box, 'click', function() {
	// 	alert('111');
	// });
	// 达到了目的，每次执行都不影响
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
// 当不停的点击的时候会出现错误，太多的递归，因为积累了太多的保存的事件
// RangeError: Maximum call stack size exceeded.
// 解决方案： 用完的事件就立即移除
// 移除事件函数
function removeEvent(obj, type) {
	// 目前是为了简便而一刀切的函数，可能会把别的删除掉
	if (obj['on' + type]) {
		obj['on' + type] = null;
	}
}
// 添加了事件移除就解决了问题
// 另一个问题是一样的函数重复添加
function init() {
	alert('init');
}
addEvent(window, 'load', init);
addEvent(window, 'load', init); // 添加了两次一样的函数
// 应该进行遍历来只添加不重名的函数
// 暂时就不写了
















































