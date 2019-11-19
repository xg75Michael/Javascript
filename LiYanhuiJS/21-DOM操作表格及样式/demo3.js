/*
window.onload = function() {
	var box = document.getElementById('box');
	box.id = 'pox'; // 更改 id 来改变样式
	// 但是十分不建议通过更换 id 来更改元素的样式
	// 会造成连锁反应，引发各种怪异的现象，最终是灾难性的
};



*/





// 建议通过 class 的方法，也就是 className
window.onload = function() {
	var box = document.getElementById('box');
	// box.className = 'bbb';
	// 把 box 的 class 更改为 bbb ，其实就是覆盖了之前的值
	// class 是可以叠加的，如果样式相同则后面覆盖前面的效果
	// 想要赋值多个 className 的话简单来说就是包含前面的，中间加空格
	// box.className = 'aaa bbb ccc'; // 这样写如果很多的 class 的话会很冗长
	// addClass('ccc'); // 最好是有一个函数来保留之前的再添加一个新的 class

	// hasClass(box, 'aa'); // true
	// aa 并不是 box 的 className 需要完善正则
	// hasClass(box, 'aaa'); // false
	addClass(box, 'ccc');
	addClass(box, 'ccc'); // 经过判断添加重复的 class 不会有反应
	addClass(box, 'bbb');
	addClass(box, 'ddd');
	removeClass(box, 'ccc');
};
// 写一个判断一个 calss 是否存在的函数
// 如果有返回 true ，没有返回 false
// 通过 className 返回的字符串调用 match 正则表达式方法来判断里面是否有
// new RegExp('(\\s|^)' + cName + '(\\s|$)') 通过这个正则，严格精确的找到了 class
// 检查 class 是否存在
function hasClass(element, cName) {
	return !!element.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'));
}
// 添加一个 class
function addClass(element, cName) {
	if (!hasClass(element, cName)) {
		element.className += ' ' + cName;
	}
}
// 移除一个 class
function removeClass(element, cName) {
	if (hasClass(element, cName)) {
		element.className = element.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' ');
	}
}















































