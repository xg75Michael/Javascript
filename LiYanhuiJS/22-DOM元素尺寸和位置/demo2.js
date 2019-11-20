/*
// scrollWidth scrollHeight
// 滚动实际大小
window.onload = function() {
	var box = document.getElementById('box');
	alert(box.scrollWidth); // 300
	alert(box.scrollHeight); // 300
	// IE 浏览器在指定的高度下会获取 scrollHeight 会返回内容的有效高度
	// 增加边框不会影响 scrollHeight 大小 ？ 可能因为新版本浏览器
	// 增加内边距会增加实际大小 300 + 10 + 10 = 320
	// 增加滚动条就是减去滚动条大小，但是实际测试并没有滚动条
	// 增加外边距无变化
	// 如果文本溢出，没有加滚动条，注意浏览器兼容问题
	// 有溢出，加上滚动条方可兼容， 新版浏览器貌似滚动条不会影响到 width
};


// 元素实际大小，偏移
// offsetWidth offsetHeight 兼容性比较好
window.onload = function() {
	var box = document.getElementById('box');
	alert(box.offsetWidth); // 300
	alert(box.offsetHeight); // 300
	// 边框会影响大小
	// 内边距会影响大小
	// 外边距无变化
	// 滚动条无变化
};


// 获取周围元素的大小
// 也就是获取边框
window.onload = function() {
	var box = document.getElementById('box');
	alert(box.clientTop); // 10
	alert(box.clientLeft); // 10
};


window.onload = function() {
	var box = document.getElementById('box');
	alert(box.offsetTop); // 50
	alert(box.offsetLeft); // 50
	// 定位之后的元素，用 offsetTop offsetLeft 获取相对父元素的位置
	// 定位之后的元素可以避免浏览器的兼容性
	// 外边距会累加，内边距无影响
	// alert(box.offsetParent.tagName); // BODY
	// IE 浏览器返回 HTML ，非 IE 返回 BODY
	// 父元素如果不是 BODY ，一定要定位，避免问题
	// Safari Chrome 默认元素之间 margin-top 有 16px ？
};


// 需要获得元素距离页面最顶端的距离需要写循环递归函数



*/




// scrollTop scrollLeft 获取滚动的距离
window.onload = function() {
	var box = document.getElementById('box');
	// alert(box.scrollTop);
	// alert(box.scrollLeft);
	box.scrollTop = 100;
	alert(box.scrollTop); // 100
	// 设置 scrollTop 的值后再获取会比较直观
	scrollStart(box); // 回到顶端
};
// 每次刷新强行让页面回到顶端，也就是 scrollTop 为 0
function scrollStart(element) {
	if (element.scrollTop != 0) {
		element.scrollTop = 0;
	}
}

















































