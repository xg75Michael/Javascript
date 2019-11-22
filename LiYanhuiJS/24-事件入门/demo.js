/*
// 事件模型分三种： 內联模型 脚本模型 和 DOM2 模型
// 內联模型就是在 HTML 标签中作为一个属性来制定事件
// 但是內联模型没有与 HTML 分离，比较混乱
// 早期的內联模型
// <input type="button" name="button" value="button" onclick="alert('Michael')" />

// 或者写在这里，不能放在 onload 函数里面，会形成闭包，将无法访问到 box
function box() {
	alert('Michael');
}


// 脚本模型，为了解决分离的问题，下面就是一个简单的脚本模型例子
window.onload = function() {
	var input = document.getElementsByTagName('input')[1];
	// 语法是 element.event = function
	input.onclick = function() {
		alert('Button2');
	};
};


// 脚本模型，或者把 function 再分离
window.onload = function() {
	var input = document.getElementsByTagName('input')[1];
	input.onclick = box;
	// 注意是把函数赋值给 onclick 不要执行，不要带括号 () ，否则自动执行并没有绑定
};
// 此 box 函数可以放在全局，也可以放在 onload 中
function box() {
	alert('Button2');
}


// 事件处理函数分为： 鼠标事件，键盘事件， HTML 事件
// 一般都是 on + 事件名称 比如 click
// onclick 事件，单击事件
window.onload = function() {
	var input = document.getElementsByTagName('input')[1];
	input.onclick = function() {
		alert('Michael');
	};
};


// onmousedown 事件，鼠标点下去事件
window.onload = function() {
	var input = document.getElementsByTagName('input')[1];
	input.onmousedown = function() {
		alert('Michael');
	};
};


// onmouseup 事件，鼠标抬起来事件
window.onload = function() {
	var input = document.getElementsByTagName('input')[1];
	input.onmouseup = function() {
		alert('Michael');
	};
};


// onmouseover 事件，鼠标移上去事件
window.onload = function() {
	var input = document.getElementsByTagName('input')[1];
	input.onmouseover = function() {
		alert('Michael');
	};
};


// onmouseout 事件，鼠标移上去事件
window.onload = function() {
	var input = document.getElementsByTagName('input')[1];
	input.onmouseout = function() {
		alert('Michael');
	};
};


// onmousemove 事件，鼠标移上去事件
window.onload = function() {
	var input = document.getElementsByTagName('input')[1];
	input.onmousemove = function() {
		// 控制台打印
		console.log('Michael');
	};
};


// 键盘事件 keydown 按下任意键，按住不放会重复触发
window.onload = function() {
	var input = document.getElementsByTagName('input')[1];
	// 可以添加到 window 中，但是不能添加在 input 中
	// window.onkeydown = function() {
	// 	console.log('Michael');
	// };
	onkeydown = function() {
		console.log('Michael');
	};
};
// 相似的键盘事件有 onkeypress 只有字符键才有效，按下去就执行
// onkeyup 在释放按键的时候才执行


// HTML 事件，比如之前用的 onload
window.onload = function() {
	alert('Hi');
};


// onselect 选定的事件
window.onload = function() {
	var input = document.getElementsByTagName('input')[2];
	input.onselect = function() {
		alert('onselect input3');
	};
};


// onfocus 页面或者元素获得焦点
window.onload = function() {
	var input = document.getElementsByTagName('input')[2];
	input.onfocus = function() {
		// 这里改成控制台打印，防止死循环
		console.log('onfocus input3');
	};
};


// onblur 页面或者元素失去焦点
window.onload = function() {
	var input = document.getElementsByTagName('input')[2];
	input.onblur = function() {
		console.log('onblur input3');
	};
};


// onsubmit 必须在 form 上提交
window.onload = function() {
	var input = document.getElementsByTagName('input')[2];
	var form = document.getElementsByTagName('form')[0];
	form.onsubmit = function() {
		alert('submit4');
	};
};
// onreset 也必须在 form 上提交


// onresize 需要在 window 上
window.onload = function() {
	window.onresize = function() {
		console.log('resize');
	};
};



*/






// onscroll 滚动时候触发
window.onload = function() {
	window.onscroll = function() {
		console.log('scrolling');
	};
};
















































