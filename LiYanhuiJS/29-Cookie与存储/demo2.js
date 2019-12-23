/*
addEvent(window, 'load', function() {
	// 设置 cookie
	document.cookie = 'user=Gao';
	document.cookie = 'url=baidu.com';
	document.cookie = 'email=baidu@gmail.com';
	// 打印出 cookie 的值
	console.log(document.cookie);
});


// 设置 cookie 函数
function setCookie(name, value, expires, path, domain, secure) {
	var cookieName = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	if (expires instanceof Date) {
		cookieName += ';expires=' + expires;
	}
	if (path) {
		cookieName += ';path=' + path;
	}
	if (domain) {
		cookieName += ';domain=' + domain;
	}
	if (secure) {
		cookieName += ';secure';
	}
	document.cookie = cookieName;
}
// 过期时间函数
function setCookieDate(day) {
	var date = new Date();
	if (typeof day == 'number' && day > 0) {
		date.setDate(date.getDate() + day);
	} else {
		throw new Error('Wrong argument, need to be number and bigger then 0.');
	}
	return date;
}
addEvent(window, 'load', function() {
	setCookie('user', '高', setCookieDate(7));
	setCookie('url', 'baidu.com', setCookieDate(7));
	setCookie('email', 'baidu@gmail.com', setCookieDate(7));
	console.log(document.cookie);
	// email=baidu%40gmail.com; url=baidu.com; user=%E9%AB%98
});



*/



// 获取 cookie 函数
function getCookie(name) {
	var cookieName = encodeURIComponent(name) + '=';
	var cookieStart = document.cookie.indexOf(name);
	var cookieValue = null;
	// console.log(cookieStart);
	if (cookieStart > -1) {
		cookieEnd = document.cookie.indexOf(';', cookieStart);
		// console.log(cookieEnd); // 最后一个是 -1
		if (cookieEnd == -1) { // 如果到了尾部
			cookieEnd = document.cookie.length;
		}
		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
	}
	return cookieValue;
}
// 设置 cookie 函数
function setCookie(name, value, expires, path, domain, secure) {
	var cookieName = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	if (expires instanceof Date) {
		cookieName += ';expires=' + expires;
	}
	if (path) {
		cookieName += ';path=' + path;
	}
	if (domain) {
		cookieName += ';domain=' + domain;
	}
	if (secure) {
		cookieName += ';secure';
	}
	document.cookie = cookieName;
}
// 过期时间函数
function setCookieDate(day) {
	var date = new Date();
	if (typeof day == 'number' && day > 0) {
		date.setDate(date.getDate() + day);
	} else {
		throw new Error('Wrong argument, need to be number and bigger then 0.');
	}
	return date;
}
addEvent(window, 'load', function() {
	setCookie('user', '高', setCookieDate(7));
	setCookie('url', 'baidu.com', setCookieDate(7));
	setCookie('email', 'baidu@gmail.com', setCookieDate(7));
	console.log(document.cookie);
	// email=baidu%40gmail.com; url=baidu.com; user=%E9%AB%98
	console.log(getCookie('user')); // 高
	console.log(getCookie('url')); // baidu.com
	console.log(getCookie('email')); // baidu@gmail.com
});
















































