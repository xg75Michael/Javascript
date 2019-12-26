/*
// XML 是存储和传输结构化的标准
// 每个浏览器的解决方案都有所不同
// 对于 IE 来说最早采用了 XML ，微软创建了 MSXML 库
// 创建 XML DOM
// var xmlDom = new ActiveXObject('MSXML2.DOMDocument.6.0');
// MSXML2.DOMDocument.3.0 兼容性较好
// IE5.5 之前版本的使用 MSXML2.DOMDocument
// console.log(xmlDom);


// IE 创建 XMLDOM 对象的函数
function createXMLDOM() {
	var version = [
		'MSXML2.DOMDocument.6.0',
		'MSXML2.DOMDocument.3.0',
		'MSXML2.DOMDocument'
	];
	for (var i = 0; i < version.length; i++) {
		try {
			var xmlDom = new ActiveXObject(version[i]);
			return xmlDom;
		} catch(e) {
			// 跳过即可
			console.log(version[i] + ' - not support.')
		}
	}
	throw new Error('Your Web Browser or System Dose not support ActiveXObject.');
}
addEvent(window, 'load', function() {
	// 创建 XMLDOM 对象
	var xmlDom = createXMLDOM();
	console.log(xmlDom);
	// 载入 XML 文件，一种是加载 XML 字符串 loadXML() ，另一种是加载 XML 外部文件 load()
	xmlDom.loadXML('<root>\n<user>Michael</user>\n</root>'); // 加载 XML 字符串
	// 序列化 XML 打印字符串 .xml
	console.log(xmlDom.xml);
	// 使用 DOM 的方法来获取 user
	var user = xmlDom.getElementByTagName('user')[0];
	console.log(user.tagName);
	// 但是无法获取 innerHTML ，因为它不是标准 DOM
	// 需要使用标准的 DOM ，firstChild.nodeValue
	console.log(user.firstChild.nodeValue);
});


// 加载外部 XML 文件
function createXMLDOM() {
	var version = [
		'MSXML2.DOMDocument.6.0',
		'MSXML2.DOMDocument.3.0',
		'MSXML2.DOMDocument'
	];
	for (var i = 0; i < version.length; i++) {
		try {
			var xmlDom = new ActiveXObject(version[i]);
			return xmlDom;
		} catch(e) {
			// 跳过即可
			console.log(version[i] + ' - not support.')
		}
	}
	throw new Error('Your Web Browser or System Dose not support ActiveXObject.');
}
addEvent(window, 'load', function() {
	var xmlDom = createXMLDOM();
	xmlDom.load('demo.xml');
	console.log(xmlDom); // 在 IE 中就加载进来了
});



*/



// 在 XML 中创建元素
function createXMLDOM() {
	var version = [
		'MSXML2.DOMDocument.6.0',
		'MSXML2.DOMDocument.3.0',
		'MSXML2.DOMDocument'
	];
	for (var i = 0; i < version.length; i++) {
		try {
			var xmlDom = new ActiveXObject(version[i]);
			return xmlDom;
		} catch(e) {
			// 跳过即可
			console.log(version[i] + ' - not support.')
		}
	}
	throw new Error('Your Web Browser or System Dose not support ActiveXObject.');
}
addEvent(window, 'load', function() {
	var xmlDom = createXMLDOM();
	xmlDom.load('demo.xml');
	var root = xmlDom.documentElement;
	var bbb = xmlDom.craeteElement('bbb');
	var bbbText = xmlDom.createTextNode('kkk');
	bbb.appendChild(bbbText);
	root.appendChild(bbb);
	// 和 HTML 一样可以通过标准的 DOM 来操作
});






















































