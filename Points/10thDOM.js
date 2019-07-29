/*
	DOM
*/

// 除了IE 所有的浏览器都支持Node 类型
/*
nodeType:
	ELEMENT_NODE(1)
	ATTRIBUTE_NODE(2)
	TEXT_NODE(3)
	CDATA_SECTION_NODE(4)
	ENTITY_REFERENCE_NODE(5)
	ENTITY_NODE(6)
	PROCESSING_INSTRUCTION_NODE(7)
	COMMENT_NODE(8)
	DOCUMENT_NODE(9)
	DOCUMENT_TYPE_NODE(10)
	DOCUMENT_FRAGMENT_NODE(11)
	NOTATION_NODE(12)
*/
if (someNode.nodeType == Node.ELEMENT_NODE) {
	// IE 无效
	alert("Node is an element!");
}
if (someNode.nodeType == 1) {
	// 使用所有的浏览器
	alert("Node is an element!");
}

// NodeList 是动态的节点数组
var firstChild = someNode.childNodes[0];
var secondChild = someNode.childNodes.item(1);
// 总共有多少个 child
var count = someNode.childNodes.length;

// IE8 之前无效
var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes, 0);

// appendChild() 方法可以在子节点添加新节点 或者 将存在的节点移到末尾
var returnedNode = someNode.appendChild(newNode);
alert(returnedNode == newNode); // true
alert(someNode.lastChild == newNode); // true

// insertBefore() 两个参数， 插入某子节点前
// replaceChild() 两个参数， 插入节点和替换节点
// removeChild() 
// cloneNode() 接受true 或 false 深度克隆还是浅克隆

/*
document.anchors
document.applets
document.forms
document.images
document.links
.
.
.
*/

// 文档写入的4个方法：
// write() writeIn() open() close()

var div = document.getElementById("myDiv");
alert(div.tagName); // "DIV"
alert(div.tagName == div.nodeName); // true

// <div id="myDiv" class="bd" title="Body text" lang="en" dir="ltr"></div>
var divNew = document.getElementById("myDiv");
alert(divNew.id); // "myDiv"
alert(divNew.className); // "bd"
alert(divNew.title); // "Body text"
alert(divNew.lang); // "en"
alert(divNew.dir); // "ltr"

// <div id="myDiv" my_special_attribute="hello!"></div>
var value = div.getAttribute("my_special_attribute"); // "hello"
// HTML5 规范，自定义特性应加上 data- 前缀以便验证
// 只有公认的特性可以添加到DOM 中
// <div id="myDiv" align="left" my_special_attribute="hello!"></div>
alert(div.id); // "myDiv"
alert(div.my_special_attribute); // undefined (IE除外)
alert(div.align); // "left"




















































