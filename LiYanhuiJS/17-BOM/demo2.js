/*
alert(screenLeft); // 火狐不支持
alert(screenTop);
// 如果浏览器不兼容则会报错
alert(window.screenLeft);
alert(window.screenTop);
// 前面加 window 防止错误产生，如果不兼容只会返回 undefined
alert(typeof window.screenLeft); // number  返回的是数字类型


alert(window.screenX); // IE 不支持此属性
alert(window.screenY);


// 宽浏览器操作
var leftX = typeof window.screenLeft == 'number' ? window.screenLeft : window.screenX;
var TopY = typeof window.screenTop == 'number' ? window.screenTop : window.screenY;
alert(leftX);
alert(TopY);


alert(window.innerWidth); // 页面窗口大小
alert(window.innerHeight);
alert(window.outerWidth); // 页面窗口大小 + 边框大小
alert(window.outerHeight);
// 各个浏览器不同， IE 不支持


// 利用 document 返回可是窗口的大小
alert(document.documentElement.clientWidth);
alert(document.documentElement.clientHeight);


// 跨浏览器获得可视窗口大小
var width = window.innerWidth; // 前面需要带上 window. 防止错误
var height = window.innerHeight;
if (typeof width != 'number') {
	if (document.compatMode == 'CSS1Compat') {
		width = document.documentElement.clientWidth;
		height = document.documentElement.clientHeight;
	} else {
		width = document.body.clientWidth;
		height = document.body.clientHeight;
	}
}
alert(width);
alert(height);


moveTo(0, 0); // 移到 0, 0 坐标
moveBy(10, 10); // 向右移动 10 向下移动 10
// 大部分现代浏览器不支持或者禁用
resizeTo(400, 400); // 大小变成 400 * 400
resizeBy(100, 100); // 长宽各增加100
*/



moveTo(0, 0); // 移到 0, 0 坐标
moveBy(10, 10); // 向右移动 10 向下移动 10
// 大部分现代浏览器不支持或者禁用
resizeTo(400, 400); // 大小变成 400 * 400
resizeBy(100, 100); // 长宽各增加100














































