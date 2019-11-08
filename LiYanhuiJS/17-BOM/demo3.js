/*
// 间歇调用和超时调用
setTimeout("alert('Hi')", 3000);
// 3秒后执行第一个参数的代码块
// 直接写代码不推荐，容易出错，也不方便扩展


function box() {
	alert('Hi');
}
setTimeout(box, 3000);
// 第一个参数直接放函数


// 推荐写法，封装性好扩展性也好
setTimeout(function() {
	alert('Hi');
}, 3000);


var box = setTimeout(function() {
	alert('Hi');
}, 3000);
//  setTimeout 返回对应的 ID
alert(box); // 1
clearTimeout(box); // 直接取消


// 间歇调用，可以重复不断的执行
var box = setInterval(function() {
	alert('Hi');
}, 2000);
clearInterval(box);


// 定时器
var num = 0;
var max = 5;
setInterval(function() {
	num++;
	if (num >= max) {
		alert('Max');
		clearInterval(this); // this 代表本身，只是跳过了5，并没有真的停止了
	} else {
		document.getElementById('count').innerHTML = num;
	}
}, 1000);



var num = 0;
var max = 5;
var id = null;
function box() {
	num++;
	document.getElementById('count').innerHTML = num;
	if (num == max) {
		clearInterval(id); // 只能拿到 setInterval 的 id 才能停止
		alert('Max');
	}
}
id = setInterval(box, 1000);


// 推荐使用超时调用来模拟定时器
var num = 0;
var max = 5;
function box() {
	num++;
	document.getElementById('count').innerHTML = num;
	if (num == 5) {
		alert('Max');
	} else {
		setTimeout(box, 1000);
	}
}
setTimeout(box, 1000);
// setTimeout 不需要获取 id 来取消


// location 对象是 window 和 document 的属性
alert(window.location == document.location); // true
alert(location.href); // URL 地址 跳转
alert(location.hash); // # 后面的字符  跳转
alert(location.port); // 端口号 跳转
alert(location.hostname); // 主机名 跳转
alert(location.pathname); // 当前路径 跳转
alert(location.protocal); // 协议 不跳转
alert(location.search); // ?  后面的字符 跳转
alert(location.search); // ?  后面的字符 跳转


// 一一获取 URL 中的字符串对
function getArgs() {
	var qs = location.search.length > 0 ? location.search.substring(1) : '';
	var items = qs.split('&');
	var item = null,
		name = null,
		value = null,
		args = {};
	for (var i = 0; i < items.length; i++) {
		item = items[i].split('=');
		name = item[0];
		value = item[1];
		args[name] = value;
	}

	return args;
}
var args = getArgs();
alert(args['id']);
alert(args['name']);


location.assign('http://www.baidu.com'); // 跳转


location.reload(); // 重新加载，可能从缓存加载
location.reload(true); // 强制从服务器加载


location.replace('http://www.baidu.com'); // 历史痕迹被覆盖，没有向后操作



*/



// history 对象
alert(history.length); // 历史记录长度
history.back(); // 向后
history.forward(); // 向前
history.go(1); // 向前 1
history.go(-1); // 向后 1














































