var EventUtil = {
	// 添加事件
	addHandler: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	// 移除事件
	removeHandler: function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	// 取得 event 对象
	getEvent: function(event) {
		return event ? event : window.event;
	},
	// 取得 target 目标对象
	getTarget: function(event) {
		return event.target || event.srcElement;
	},
	// 阻止默认行为
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	// 阻止进一步的冒泡和捕获行为
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	// 获得相关的目标
	getRelatedTarget: function(event) {
		if (event.relatedTarget) {
			return event.relatedTarget;
		} else if (event.toElement) {
			return event.toElement;
		} else if (event.fromElement) {
			return event.fromElement;
		} else {
			return null;
		}
	},
	// 获得鼠标按钮
	getButton: function(event) {
		if (document.implementation.hasFeature('MouseEvents', '2.0')) {
			return event.button;
		} else {
			switch (event.button) {
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;
				case 2:
				case 6:
					return 2;
				case 4:
					return 1;
			}
		}
	},
	// 获得鼠标滑轮增量值
	getWheelDelta: function(event) {
		if (event.wheelDelta) {
			return (client.engine.opera && client.engine.opera < 9.5 ? 
				-event.wheelDelta : event.wheelDelta);
		} else {
			return -event.detail * 40;
		}
	},
	// 获得键盘时间里的键码
	getCharCode: function(event) {
		if (typeof event.charCode == 'number') {
			return event.charCode;
		} else {
			return event.keyCode;
		}
	},
	// 获得剪贴板的文本
	getClipboardText: function(event) {
		var clipboardData = (event.clipboardData) || window.clipboardData;
		return clipboardData.getData('text');
	},
	// 设置剪贴板中的文本
	setClipboardText: function(event, value) {
		if (event.clipboardData) {
			return event.clipboardData.setData('text/plain', value);
		} else if (window.clipboardData) {
			return window.clipboardData.setData('text', value);
		}
	}
};







































