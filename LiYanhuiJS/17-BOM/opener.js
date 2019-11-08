document.onclick = function() {
	window.opener.document.write('This is from opener')
};