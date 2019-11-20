/*



*/




window.onload = function() {
	var box = document.getElementById('box');
	// alert(box.getBoundingClientRect()); // [object DOMRect]
	// 本身是一个矩形对象，有 top bottom width height 等属性
	// alert(box.getBoundingClientRect().top); // 50
	// alert(box.getBoundingClientRect().bottom); // 250
	// alert(box.getBoundingClientRect().height); // 200

	// alert(document.documentElement); // [object HTMLHtmlElement]
	// alert(document.documentElement.tagName); // HTML
	alert(document.documentElement.clientTop + ', ' + document.documentElement.clientLeft);
};
















































