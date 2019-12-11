/*
// cookie 又名 HTTP Cookie ，它的目的是以很小的文件保存数据
// 比如登录账号密码，购物车列表
// 原则上是在服务器端操作的，但是现在大部分浏览器是可以在客户端操作（除了 Chrome ）


// cookie 主要是以键值对来构成的，还有几个可选项
addEvent(window, 'load', function() {
	// // alert(typeof document.cookie); // string
	// // 向本地磁盘写入 cookie
	// document.cookie = 'user=高向岩';
	// // 本地不存在域，所以域为空
	// console.log(document.cookie);
	// // user=  Safari
	// // user=高向岩  Firefox
	// // 所以需要编码来统一
	// document.cookie = 'user=' + encodeURIComponent('高向岩');
	// console.log(document.cookie);
	// // user=%E9%AB%98%E5%90%91%E5%B2%A9
	// console.log(decodeURIComponent(document.cookie));
	// // user=高向岩
	
	// console.log(decodeURIComponent(document.cookie));
	// 已写入磁盘的是可以直接获取的
	// 失效时间，也就是过期时间
	// 默认的过期事件是在回话结束时，也就是关闭浏览器后再打开就不存在了
	// 关闭浏览器之后再打开就不存在了
	// 浏览器之间的 cookie 不相关，各自保存自己的 cookie

	// // 设置失效事件步骤如下
	// var date = new Date();
	// date.setDate(date.getDate() + 7); // 设置为一周的时间
	// console.log(date);
	// // cookie 的完整形式
	// // document.cookie = 'user=值;[expires=失效事件;path=路径访问;domain=域名访问;secure=安全https限制通信]'
	// document.cookie = 'user=' + encodeURIComponent('高向岩') + ';expires=' + date;
	// // 设置过期时间为一周，关闭浏览器依然存在
	// console.log(decodeURIComponent(document.cookie));

	// // 删除 cookie 的方法
	// // 手动清理 cookie 即设置失效事件为现在的时间之前的时间
	// var date = new Date();
	// date.setDate(date.getDate() - 11); // 设置成昨天的时间为失效时间
	// document.cookie = 'user=' + encodeURIComponent('高向岩') + ';expires=' + date;
	// console.log(decodeURIComponent(document.cookie));

	// 另一个删除方法
	// 直接把过期时间设定为 1970 年
	document.cookie = 'user=' + encodeURIComponent('高向岩') + ';expires =' + new Date(0);
	// 设置过期时间为初始时间，也就是 1970 年
	console.log(decodeURIComponent(document.cookie));
});


// 路径限制访问
// 可以通过设置参数来改变 cookie 的路径
addEvent(window, 'load', function() {
	var path = 'someCustom/path/demo';
	document.cookie = 'user=' + encodeURIComponent('高向岩') + ';path =' + path;
	// 直接在可选参数中配置 path 属性
	// 此 cookie 的路径即为 someCustom/path/demo
});


// 域名限制
addEvent(window, 'load', function() {
	var domain = 'baidu.com';
	document.cookie = 'user=' + encodeURIComponent('高向岩') + ';domain=' + domain;
	console.log(decodeURIComponent(document.cookie));
	// 并无效果
	// 域名必须在绑定的服务器上设置
	// 在不设置的情况下自动设置
	// 在存在二级域名的时候才可能有必要来设置 domain
});


// https
// secure 指定必须通过 https 来通讯访问
addEvent(window, 'load', function() {
	document.cookie = 'user=' + encodeURIComponent('高向岩') + ';secure';
	// 无法访问了，必须是 https 通讯才可以访问
	console.log(decodeURIComponent(document.cookie));
	// 空白，什么都没有
	// 存在此 cookie 并仅限加密连接
});
*/






addEvent(window, 'load', function() {
	document.cookie = 'user=' + encodeURIComponent('高向岩');
	console.log(decodeURIComponent(document.cookie));
});
















































