/*
// navigator 对象是 window 对象下的
// 浏览器版本号
alert(window.navigator); // [object Navigator]
alert(navigator.appName); // Netscape  多数返回的是 Netscape 并不是浏览器的名称


alert(navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Safari/605.1.15


alert(navigator.platform) // MacIntel  所在的系统


navigator.geolocation.getCurrentPosition(rsp => console.log(rsp.coords.latitude + ' --- ' + rsp.coords.longitude));
// 得到当地的经纬度


// 检测插件 navigator.plugins
for (var i = 0; i < navigator.plugins.length; i++) {
	document.write('插件-' + (i+1) + '. ' + navigator.plugins[i].name + ' - ' + navigator.plugins.filename + '</br>');
	document.write(navigator.plugins[i].description + '</br>');
	document.write('</br>');
}
// 打印出所有插件的名字 + 插件磁盘文件名 + 描述信息


// IE 浏览器比较特殊，插件使用的是 ActiveX 控件，需要知道被检测控件的唯一标识符
function hasIEPlugin(name) {
	try { // 尝试执行代码，如果有错误则执行 catch 代码块
		new ActiveXObject(name); // 控件唯一标识符 ID
		return true; // 如果 new 成功了，没有错误则不执行 catch
	} catch(e) {
		return false; // 如果 new 失败了则执行 catch
	}
}
alert(hasIEPlugin('ShockwaveFlash.ShockwaveFlash'));


// 跨浏览器判断某插件是否存在
function hasIEPlugin(name) {
	try {
		new ActiveXObject(name);
		return true;
	} catch(e) {
		return false;
	}
}
function hasPlugin(name) {
	var name = name.toLowerCase();
	for (var i = 0; i < navigator.plugins.length; i++) {
		if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
			return true;
		}
	}
	return false;
}
function hasFlash() {
	// 先检测非 IE 浏览器
	var result = hasPlugin('Flash');
	if (!result) { // 如果没有检测到，说明浏览器没有 Flash 插件或者是 IE 浏览器
		result = hasIEPlugin('ShockwaveFlash.ShockwaveFlash')
	}
	return result;
}
alert(hasFlash());


// MIME 类型，多用于因特网邮件扩展
alert(navigator.mimeTypes); // [object MimeTypeArray]
alert(navigator.mimeTypes.length); // 6
*/




// MIME 类型，多用于因特网邮件扩展
alert(navigator.mimeTypes); // [object MimeTypeArray]
alert(navigator.mimeTypes.length); // 6













































