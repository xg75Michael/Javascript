/*
// thead 标签在一个表格里只能有一个
// tfoot 标签在一个表格里只能有一个
// caption 标签在一个表格里只能有一个
// tbody tr td 和 th 可以有若干个


// 使用 DOM 创建一个表格很麻烦
window.onload = function() {
	var table = document.createElement('table');
	// table.width = 300;
	table.setAttribute('width', 300);
	// 两种添加属性的方法
	table.border = 1;
	var caption = document.createElement('caption');
	table.appendChild(caption);
	// caption.innerHTML = 'Caption created by JS';
	var captionText = document.createTextNode('Caption by JS');
	caption.appendChild(captionText);
	// 创建 thead
	var thead = document.createElement('thead');
	table.appendChild(thead);
	var tr = document.createElement('tr');
	thead.appendChild(tr);
	// 添加第一个表格
	var th = document.createElement('th');
	tr.appendChild(th);
	var thText = document.createTextNode('Data1');
	th.appendChild(thText);
	// 添加第二个表格，重复操作
	var th2 = document.createElement('th');
	tr.appendChild(th2);
	var thText2 = document.createTextNode('Data2');
	th2.appendChild(thText2);

	document.body.appendChild(table);
};


// HTML DOM 来获取表格
window.onload = function() {
	var table = document.getElementsByTagName('table')[0];
	// alert(table.children[0].innerHTML); // Members
	// 复杂的表格中就很难判断
	// alert(table.children[2].children[1].children[1].innerHTML); // Female
	// 获取起来很复杂，一眼看不出逻辑
	var tbody = table.getElementsByTagName('tbody')[0];
	var tr = tbody.getElementsByTagName('tr')[1];
	var td = tr.getElementsByTagName('td')[1];
	alert(td.innerHTML); // Female
	// 可以看出逻辑，但是更加复杂
};


// caption 对 <caption> 的引用
// tBodies 对 <tbody> 的引用
// tFoot 对 <tfoot> 的引用
// tHead 对 <thead> 的引用
// rows 对 <tr> 的引用
window.onload = function() {
	var table = document.getElementsByTagName('table')[0];
	// alert(table.caption.innerHTML); // Members
	// 清晰明了
	// alert(table.tHead); // [object HTMLTableSectionElement]
	// 清晰明了
	// alert(table.tBodies); // [object HTMLCollection]
	// alert(table.tBodies[0]); // [object HTMLTableSectionElement]
	// 返回的是元素的集合
	// alert(table.rows.length); // 4
	// rows 返回所有行数的集合，然后取得其长度为 4
	// alert(table.tBodies[0].rows.length); // 2
	// 得到 body 中的行数
	// alert(table.tBodies[0].rows[0].cells.length); // 3
	// 得到第一行中的单元格的长度
	// alert(table.tBodies[0].rows[1].cells[1].innerHTML); // Female
	// 得到第二行的第二个单元格中的内容
	// table.deleteCaption(); // 删除 caption
	// table.deleteTHead(); // 删除 thead
	// table.tBodies[0].deleteRow(0); // 删除第一行
	// table.tBodies[0].rows[1].deleteCell(1); // 删除第二行第二个单元格
};


// 使用引用来创建表格
window.onload = function() {
	var table = document.createElement('table');
	table.width = 300;
	table.border = 1;

	table.createCaption().innerHTML = 'New Members';
	var thead = table.createTHead();
	// 返回对 thead 的引用
	var tr = thead.insertRow(0);
	// 返回对 tr 的引用
	tr.insertCell(0).innerHTML = 'Data1';
	tr.insertCell(1).innerHTML = 'Data2';
	tr.insertCell(2).innerHTML = 'Data3';

	document.body.appendChild(table);
};
*/






// 使用引用来创建表格
window.onload = function() {
	var table = document.createElement('table');
	table.width = 300;
	table.border = 1;

	table.createCaption().innerHTML = 'New Members';
	var thead = table.createTHead();
	// 返回对 thead 的引用
	var tr = thead.insertRow(0);
	// 返回对 tr 的引用
	tr.insertCell(0).innerHTML = 'Data1';
	tr.insertCell(1).innerHTML = 'Data2';
	tr.insertCell(2).innerHTML = 'Data3';

	document.body.appendChild(table);
};















































