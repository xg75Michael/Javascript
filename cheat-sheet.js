// vs code 正则一键去除 js 备注
// 1. Ctrl + F 搜索 => 
// 2. 打开正则选项 填入 '//.+' =>
// 3. 替换内容什么都不写 '' =>
// 4. 点击全部替换即可

// Swiper skeleton Swiper 模板，常用配置项
let mySwiper = new Swiper('.swiper-container', {
	speed: 1000, // 速度
	autoplay: false, // 自动播放
	effect: 'fade', // 切换渐变效果
	loop: true, // 循环
	loopAdditionalSlides: 3, // 各复制几个 slide
	slidesPerView: 1, // 能看到几个 slide
	pagination: { // 分页器
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: { // 左右箭头
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: { // 各类事件的回调函数
		slideChange: function () {
			console.log(this.activeIndex);
		},
	},
});

// TimelineMax skeleton TimelineMax 模板
let myTweenMax = new TimelineMax({
		defaults: {
			duration: 1,
			ease: Power2.easeOut,
		},
	})
	// .to( target:Object, duration:Number, vars:Object, position:* )
	.to('.element-1', 1, {
		y: '100%',
	}, 0)
	// 等待 10 s 的距离
	.set({}, {}, '+=10')
	// 直接设置 css 属性值
	.set(element, {
		alpha: 0,
	})
	// 在这里调用 someFun
	.call(someFun(1))
	// eleArr 中每个元素分步来做动画，持续 1s 间隔 0.5s
	.staggerTo(eleArr, 1, {
		alpha: 1,
	}, 0.5)
	// .fromTo( target:Object, duration:Number, fromVars:Object, toVars:Object, position:* )
	.fromTo('.element-3', 1, {
		scale: 1
	}, {
		scale: 1.3
	}, 0);

// ScrollMagic skeleton ScrollMagic 模板
let controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
		triggerElement: '#magic-trigger',
		duration: '100%',
		triggerHook: 0,
	})
	.setTween(myTweenMax)
	// .addIndicators({
	//     name: 'my indicators',
	// })
	.addTo(controller);
// ScrollMagic skeleton ScrollMagic 模板
// lazysize 懒加载 简单的设置
window.lazySizesConfig = window.lazySizesConfig || {},
	// use class-name lazy instead of lazyload
	window.lazySizesConfig.lazyClass = 'lazy',
	// use data-original instead of data-src
	lazySizesConfig.srcAttr = 'data-original',
	lazySizesConfig.expand = 1000,
	lazySizesConfig.expFactor = 1.5,
	//  0 = don't load, 1 = only visible elements, 2 = load also very near(expand option), 3 = load also not so near (expand * expFactor option)
	lazySizesConfig.loadMode = 1;
// lazysize 懒加载 简单的设置
// 简写原生的方法，方便使用
// window.requestAnimationFrame(callback) 会给callback传递精度为1ms的时间戳
let thRAF = window.requestAnimationFrame || setTimeout;
let forEach = Array.prototype.forEach;
// 简写原生的方法，方便使用
// 扩展原生对象 数组等方法
Object.defineProperties(Array.prototype, {
	method1: {
		writable: true,
		enumerable: false,
		configurable: true,
		value: function () {
			console.log('I am an user defined method 1!');
		}
	},
	method2: {
		writable: true,
		enumerable: false,
		configurable: true,
		value: function () {
			console.log('I am an user defined method 2!');
		}
	}
});
// 扩展原生对象 数组等方法
// init 获取设备的状态信息，放在 DOMContentLoaded 事件里 
(function () {
	const UA = navigator.userAgent,
		KERNELLIST = ['', '-webkit-', '-ms-', '-moz-', '-o-'],
		MEDIASTR = '(max-aspect-ratio: 11/10)',
		SHELL = document.getElementById('cez-container'),
		STICKYSTR = 'sticky-cntr';
	let thRAF = window.requestAnimationFrame || setTimeout,
		wechatImg = 'https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/visions/v-2021/img/intro/th-wechat.jpg',
		wechatTxt = '谢谢分享。',
		gaSelector = '.cmn-ga-21',
		popVideo = '.cmn-pop-video',
		triggerVideo = '.cmn-trigger-video',
		noVideo = 'cmn-notrg-video',
		scrollSelect = '.cmn-click-scroll',
		ctlr = !!window.ScrollMagic ? new ScrollMagic.Controller() : null;

	function Glean(c) {
		this.d = {
			isIE: !!window.ActiveXObject || 'ActiveXObject' in window,
			isOEdge: /Edge\//i.test(UA),
			isNEdge: /Edg\//i.test(UA),
			isUC: /UCBrowser/i.test(UA),
			isOpera: /Opera/i.test(UA),
			isSafari: /Safari/i.test(UA),
			isFirefox: /Firefox/i.test(UA),
			isChrome: /Chrome/i.test(UA),
			isWechat: /micromessenger/i.test(UA),
			isHW: /HuaweiBrowser/i.test(UA),
			isAndroid: /android|mobile/i.test(UA),
			isWindows: /win32|wow32|win64|wow64/i.test(UA),
			isIOS: /iPad|iPhone|iPod/.test(UA) && !window.MSStream,
			isMAC: /macintosh|mac os x/i.test(UA) && !window.MSStream,
			isIpad: /(?:iPad|PlayBook)/.test(UA),
			isTouch: 'ontouchstart' in document.documentElement,
		};
		this.c = {
			hasWebp: document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0,
			hasIO: 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype,
			hasCSS: !!window.CSS && !!window.CSS.supports,
			hasCSSVar: !!window.CSS && !!window.CSS.supports && window.CSS.supports('--a', 0),
			hasSticky: !!document.querySelector(STICKYSTR) ? /sticky/i.test(window.getComputedStyle(document.querySelector(STICKYSTR)).position) : (function () {
				let len = KERNELLIST.length,
					el = document.createElement('div');
				for (let i = 0; i < len; i++) {
					el.style.position = KERNELLIST[i] + 'sticky';
					if (el.style.position !== '') {
						return true;
					}
				}
				return false;
			})(),
		};
		this.p = {
			isLogin: !!$.cookie('_ext_u_e_'),
		};
		this.custom = !!c ? c : null;
	}
	let McGlean = new Glean();
	Glean.prototype = {
		constructor: Glean,
		_init: function () {
			this.getStatus();
			this.initWechat(McGlean.d.isWechat, wechatImg, wechatTxt);
			this.addGa(gaSelector);
		},
		test: function () {
			console.info('testing');
		},
		getStatus: function () {
			this.vw = window.innerWidth / 100;
			this.vh = window.innerHeight / 100;
			this.cw = document.documentElement.clientWidth;
			this.ch = document.documentElement.clientHeight;
			this.isPortrait = window.matchMedia(MEDIASTR).matches;
			this.navH = !!document.getElementById('second-navigation-v4') ? document.getElementById('second-navigation-v4').getBoundingClientRect().height : !!document.querySelector('.huawei-v3 .second-navigation') ? document.querySelector('.huawei-v3 .second-navigation').getBoundingClientRect().height : window.innerWidth < 992 ? 96 : 76;
			this.pixelRatio = window.devicePixelRatio || 1;
		},
		prefixNumb: function (num, n) {
			return (Array(n).join(0) + num).slice(-n);
		},
		getOffsetTop: function (el, cls) {
			if (el.className.indexOf(cls) > -1) {
				return this.navH;
			}
			return el.offsetTop + this.getOffsetTop(el.parentNode);
		},
		clickScorll: function () {
			console.info(1);
			// 把心动的理由和disclaimer的跳转合成一个 data-target
			$('.disclaimer-link').each(function () {
				let sTop;
				$(this).on('click', function (e) {
					e.preventDefault();
					let el = $($(this).attr('href'));
					$('.disclaimer-item').removeClass('active');
					el.addClass('active');
					sTop = el.offset().top - navH - 100;
					$('html, body').animate({
						scrollTop: sTop,
					}, 500, function () {
						sTop = el.offset().top - navH - 100;
						$('html, body').animate({
							scrollTop: sTop,
						}, 50.1);
					});
				});
			});
		},
		initWechat: function (is, img, t) {
			if (is) {
				$.getScript('//res.wx.qq.com/open/js/jweixin-1.2.0.js', function (res, status) {
					if (status == 'success') {
						$.getScript('//consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/store/js/cbgwechatv1.js', function (r, s) {
							if (s == 'success') {
								let wxShare = setInterval(function () {
									if (typeof (WechatShare) != 'undefined') {
										WechatShare({
											url: window.location.href,
											img: img,
											title: $(document).attr('title'),
											descript: document.querySelector('meta[name=\'description\']').getAttribute('content'),
										}, function () {
											alert(t);
										});
										clearInterval(wxShare);
									}
								}, 150);
							}
						});
					}
				});
			}
		},
		addGa: function (s) {
			$(s).on('click', function () {
				let attrs = this.attributes,
					data = {};
				for (let i = 0; i < attrs.length; i++) {
					if (attrs[i].name.substring(0, 8) === 'data-ga-') {
						let key = attrs[i].name.substring(8).replace(/\-(\w)/g, function (a, b) {
							return b.toUpperCase();
						});
						data[key] = attrs[i].value;
					}
				}
				window.dataLayer && window.dataLayer.push(data);
			});
		},
		popVideo: function (s) {
			$(s).on('click', function (e) {
				e.preventDefault();
				$(this).initH5player({
					'path': '',
					'target': 'fancybox',
					'autostart': true,
					'beforeShow': '',
					'afterClose': '',
				});
			});
		},
		triggerVideo: function (c, s) {
			let f = this.isPortrait;
			let u = this.d.isUC || this.d.isWechat;
			$(s).each(function () {
				if (u) {
					c.classList.add(noVideo);
				} else {
					let t = $(this);
					let a = t.find('source');
					t.attr('poster', f ? t.attr('data-xs-poster') : t.attr('data-lg-poster'));
					a.attr('src', f ? a.attr('data-xs-src') : a.attr('data-lg-src'));
					t.trigger('load');
				}
			});
		},
		ease: {
			oneBezier: function () {
				return function (t) {
					let y = t;
					return y;
				}
			},
			twoBezier: function (cp) {
				const [cx, cy] = cp;
				return function (t) {
					let y = 2 * t * (1 - t) * cy + t * t;
					return y;
				}
			},
			threeBezier: function (cp1, cp2) {
				const [cx1, cy1] = cp1;
				const [cx2, cy2] = cp2;
				return function (t) {
					let y = 3 * cy1 * t * (1 - t) * (1 - t) + 3 * cy2 * t * t * (1 - t) + t * t * t;
					return y;
				}
			},
		}
	};
	McGlean.__proto__ = Glean.prototype;
	console.info(McGlean);
	McGlean._init();

	document.addEventListener('DOMContentLoaded', function () {
		McGlean._init();
	});
	window.addEventListener('resize', function () {});
})();
// init 获取设备的状态信息，放在 DOMContentLoaded 事件里 
// 图片模板
{
	/* <picture>
	    <source type="image/webp" media="(max-aspect-ratio: 1/1)" data-srcset="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx_xs.webp">
	    <source type="image/webp" media="(min-aspect-ratio: 1/1)" data-srcset="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx.webp 1x , /content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx@2x.webp 1.5x">
	    <source type="image/png" media="(max-aspect-ratio: 1/1)" data-srcset="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx_xs.png">
	    <source type="image/png" media="(min-aspect-ratio: 1/1)" data-srcset="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx.png 1x , /content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx@2x.png 1.5x">
	    <source type="image/jpeg" media="(max-aspect-ratio: 1/1)" data-srcset="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx_xs.jpg">
	    <source type="image/jpeg" media="(min-aspect-ratio: 1/1)" data-srcset="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx.jpg 1x , /content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx@2x.jpg 1.5x">
	    <img src=“/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx_thumb.jpg” data-src="/content/dam/huawei-cbg-site/common/mkt/pdp/phones/xxx/img/xxx.jpg" alt="xxx" />
	</picture> */
}
// 图片模板
// IntersectionObserver
function thCreateTransOb() {
	let thCanOb = new IntersectionObserver(function (changes) {
		changes.forEach(function (d) {
			if (0 < d.intersectionRatio) {
				console.info('entering');
			} else {
				console.info('outside');
			}
		});
	}, {
		rootMargin: '600% 0% 500% 0%',
		threshold: [0, 1],
	});
	let thObedEles = document.querySelectorAll('.thales-observer');
	thObedEles.forEach(function (e) {
		thCanOb.observe(e);
	});
}
// IntersectionObserver
// 阻止冒泡
function xxx(e) {
	e.stopPropagation();
}
// 阻止冒泡
// 华为 AEM 播放弹窗视频
$('.x0-play-video').on('click', function (e) {
	e.preventDefault();
	$(this).initH5player({
		'path': '',
		'target': 'fancybox',
		'autostart': true,
		'beforeShow': '',
		'afterClose': '',
	});
}); {
	/* <a class="x0-body x0-play-video" href="/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/mate-x2/img/interaction/huawei-mate-x2-interactive-experience-full.mp4"
	    data-video-image="/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/mate-x2/img/interaction/huawei-mate-x2-interactive-experience-full-poster.jpg" data-video-id="videoPlayer" data-video-ratio="30:17"
	    data-t-ignore-link="true" data-t-viewtimes="true" data-t-label="高性能电驱轿跑 SUV 视频" title="观看视频">
	    <span>观看视频</span>
	    <img class="kv-play-btn" src="/content/dam/huawei-cbg-site/greate-china/cn/mkt/campaign/seres-huawei-select-sf5/imgs/svg/kv-play-btn.svg" alt="">
	</a> */
}
// 华为 AEM 播放弹窗视频
// 视频播放后返回一个 promise
var promise = document.querySelector('video').play();
if (promise !== undefined) {
	promise.then(_ => {
		// Autoplay started!
	}).catch(error => {
		// Autoplay was prevented.
		// Show a "Play" button so that user can start playback.
	});
}
// 视频播放后返回一个 promise
// 新浪分享 个性化定制
$('.share-main-sina').on('click', function () {
	let url = location.href;
	console.dir(url)
	let text = $(this).attr('t');
	console.info(text);
	window.open('http://v.t.sina.com.cn/share/share.php?url=' + url + '&title=' + text, 'sina share', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=500,location=1');
});
// 新浪分享 个性化定制
// 华为 AEM 微信 wechat 分享 JS
function thWechatShare() {
	let isWeixin = window.navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1;
	if (isWeixin) {
		$.getScript('//res.wx.qq.com/open/js/jweixin-1.2.0.js', function (response, status) {
			if (status == 'success') {
				$.getScript('//consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/store/js/cbgwechatv1.js', function (r, s) {
					if (s == 'success') {
						let wxShare = setInterval(function () {
							if (typeof (WechatShare) != 'undefined') {
								WechatShare({
									url: window.location.href,
									img: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/visions/v-2021/img/intro/th-wechat.jpg',
									title: $(document).attr('title'),
									descript: document.querySelector('meta[name=\'description\']').getAttribute('content')
								}, function () {
									alert('谢谢分享。');
								});
								clearInterval(wxShare)
							}
						}, 150);
					}
				});
			}
		});
	}
}
// 华为 AEM 微信 wechat 分享 JS
// 华为 EN Back to Top
/* back to top */
// .cbg-backtotop a.hidden {
// 	opacity: 0;
// 	cursor: default;
//   }

//   .cbg-backtotop {
// 	position: fixed;
// 	z-index: 200;
// 	bottom: 50px;
// 	right: 50px;
//   }

//   .cbg-backtotop a.cbg-icon-backtotop {
// 	background-position: -549px -188px;
//   }


//   .cbg-backtotop a {
// 	display: block;
// 	width: 40px;
// 	height: 40px;
// 	margin: 5px 0;
// 	text-indent: -9999px;
// 	opacity: 0.6;
// 	background: url('https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/store/img/sprites_cbg_icon.png') no-repeat;
// 	filter: alpha(opacity=80);
// 	transition: all linear 0.2s;
// 	-webkit-transition: all linear 0.2s;
// 	-moz-transition: all linear 0.2s;
// 	-ms-transition: all linear 0.2s;
// 	-o-transition: all linear 0.2s;
// 	-webkit-filter: alpha(opacity=80);
//   }

//   /* totop end*/
// back to top
$('.cbg-icon-backtotop').attr('href', 'javascript:');
$(window).scroll(function () {
	var htop = $(this).scrollTop();
	if (htop < 10) {
		$('.cbg-backtotop').find('a').eq(0).addClass('hidden');
	} else {
		$('.cbg-backtotop').css('display', 'block');
		$('.cbg-backtotop').find('a').removeClass('hidden');
	}
});
$('.cbg-icon-backtotop').off().click(function () {
	$('html,body').animate({
		scrollTop: 0
	}, 800);
});
// 华为 EN Back to Top
// 角标跳转不准的解决方案 JQ 使用回调函数，在上一个跳转动画结束之后再进行判断再跳转，无缝衔接
function scrollSteps() {
	if (Math.abs($('.disclaimer').offset().top - $(window).scrollTop()) > 10) {
		theTop = $('.disclaimer').offset().top;
		$('html, body').animate({
			scrollTop: theTop,
		}, 17, function () {
			scrollSteps();
		});
	}
}
let theTop = $('.disclaimer').offset().top;
$('html, body').animate({
	scrollTop: theTop,
}, 300, function () {
	scrollSteps();
});
// 或
$('.disclaimer-link').each(function () {
	let sTop;
	$(this).on('click', function (e) {
		e.preventDefault();
		let el = $($(this).attr('href'));
		$('.disclaimer-item').removeClass('active');
		el.addClass('active');
		sTop = el.offset().top - navH - 100;
		$('html, body').animate({
			scrollTop: sTop,
		}, 500, function () {
			sTop = el.offset().top - navH - 100;
			$('html, body').animate({
				scrollTop: sTop,
			}, 50.1);
		});
	});
});
// 角标跳转不准的解决方案 JQ 使用回调函数，在上一个跳转动画结束之后再进行判断再跳转，无缝衔接
// GA
window.dataLayer = window.dataLayer || [];
$('.product-container').on('click', '.hw-cmn-ga-21', function (e) {
	let _this = $(this),
		filterObj = {},
		_obj = {
			'event': _this.attr('data-event'),
			'pageCategory': _this.attr('data-pagecategory'),
			'pageName': _this.attr('data-pagename'),
			'buttonName': _this.attr('data-buttonname'),
			'buttonPosition': _this.attr('data-buttonposition'),
			'bannerName': _this.attr('data-bannername'),
			'bannerPosition': _this.attr('data-bannerposition'),
			'pop_upName': _this.attr('data-popupname'),
			'percentage': _this.attr('data-percentage'),
			'nextBannerName': _this.attr('data-nextbannername'),
			'previousBannerName': _this.attr('data-previousbannerName'),
			'swipeDirection': _this.attr('data-swipedirection'),
			'linkName': _this.attr('data-linkname'),
			'linkPosition': _this.attr('data-linkposition'),
			'videoStep': _this.attr('data-videostep'),
			'videoName': _this.attr('data-videoname'),
			'productMktName': _this.attr('data-productmktname'),
			'productCategory': _this.attr('data-productcategory'),
			'productPosition': _this.attr('data-productposition'),
			'ecPlatform': _this.attr('data-ecplatform'),
			'countryCode': _this.attr('data-countrycode'),
			'lastpagename': _this.attr('data-lastpagename'),
			'moduelname': _this.attr('data-moduelname'),
		};
	Object.keys(_obj).map(function (k) {
		_obj[k] !== undefined ? filterObj[k] = _obj[k] : null;
	});
	window.dataLayer.push(filterObj);
	_this = null;
	_obj = null;
	filterObj = null;
});
// 或者之龙的
$('.hw-cmn-ga-21').on('click', function () {
	let attrs = this.attributes,
		data = {};
	for (let i = 0; i < attrs.length; i++) {
		if (attrs[i].name.substring(0, 8) === 'data-ga-') {
			let key = attrs[i].name.substring(8).replace(/\-(\w)/g, function (a, b) {
				return b.toUpperCase();
			});
			data[key] = attrs[i].value;
		}
	}
	window.dataLayer.push(data);
});
// GA
// 判断华为是否登录
$.cookie('_ext_u_e_');
// 判断华为是否登录
// 表单请求模板
let tempData = {};
$.ajax({
	url: 'https://kwesit.huawei.com/isrp/lms/online/appointment/create',
	type: 'POST',
	dataType: 'json',
	contentType: 'application/json; charset=utf-8',
	crossDomain: true,
	xhrFields: {
		withCredentials: true
	},
	data: JSON.stringify(tempData),
	beforeSend: function (request) {
		request.setRequestHeader('Authorization', 'token1');
	},
	success: function (result) {
		console.info(result);
	}
});
// 表单请求模板
// JSONP 只支持 GET 请求，利用动态添加的 script 的 src 来请求服务器，后面拼接要执行的方法
function callbackD(response) {
	var oUl = document.getElementById('ulList');
	var html = '';
	if (response.s.length != 0) {
		oUl.style.display = 'block';
		for (var i = 0; i < response.s.length; i++) {
			html += '<li>' + response.s[i] + '</li>'
		}
	}
	oUl.innerHTML = html;
}
window.onload = function () {
	var oData = document.getElementById('inputSearch');
	var oUl = document.getElementById('ulList');
	oData.onkeyup = function () {
		if (oData.value != '') {
			let script = document.createElement("script");
			script.src = 'http://unionsug.baidu.com/su?wd=' + this.value + '&p=3&cb=callbackD';
			document.body.appendChild(script);
		} else {
			oUl.style.display = 'none';
		}
	}
};
// JSONP 跨域请求
// 正则验证
// 特殊字符
let nameReg = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;
// 正则验证
// https://consumer.huawei.com/cn/support/service-center/ 页面 LBS 百度地图定位
// 利用 h5 获取当前定位，也就是获取经纬度，然后再用经纬度来调用接口
function h5LocationForServiceCenter() {
	if (navigator.geolocation) {
		try {
			navigator.geolocation.getCurrentPosition(function (g) {
				if (aoutlocation == 0) {
					return false
				}
				var b = g.coords.longitude;
				var h = g.coords.latitude;
				var f = new BMap.Point(b, h);
				var c = new BMap.Convertor();
				var d = [];
				d.push(f);
				var e = new BMap.Geocoder();
				translateCallback = function (j) {
					if (aoutlocation == 0) {
						return false
					}
					if (j.status === 0) {
						getAutoLocationAddress(new BMap.Point(j.points[0].lng, j.points[0].lat))
					}
				};
				c.translate(d, 1, 5, translateCallback)
			}, function (b) {
				locationError()
			})
		} catch (a) {}
	} else {
		locationError()
	}
}
// https://consumer.huawei.com/cn/support/service-center/ 页面 LBS 百度地图定位
// 快速遍历的方法， forEach 兼容 IE
['aaa', 'bbb'].forEach(function (e, i) {
	console.info(e);
});
// 快速遍历很多遍
new Array(1000).fill(0).map(function (d, i) {
	console.info(i)
});
// 使用数组遍历的方法应用到 DOM 类数组上
[].slice.call(document.querySelectorAll('.selector')).forEach(function (e) {});
// Array.from 第二个参数 省去再接 .map ，直接遍历
Array.from(['a', 'b', 'c'], e => console.info(e));
// 遍历对象批量生成对应的 li 设置属性 并添加到指定位置
function traversalAjax(a, t) {
	let tempFrag = document.createDocumentFragment();
	Array.from(a, function (o) {
		let li = document.createElement('li');
		li.innerText = o.name || o.storeName;
		Object.keys(o).map(function (i, k) {
			li.setAttribute('data-' + i, o[i]);
		})
		tempFrag.appendChild(li);
	});
	t.appendChild(tempFrag);
}
// 立即执行一次的定时器 setinterval 封装函数：直接执行函数然后再在定时器里调用
function setIntervalNow(func, interval) {
	func();
	return setInterval(func, interval);
}
let intervalNow = setIntervalNow(someFun(), 1000);

// 立即执行一次的定时器 setinterval 函数返回自身，然后定时器的参数中调用此函数
function someFun() {
	console.info('someFun');
	return someFun;
}
let intervalNow = setInterval(someFun(), 1000);

// 立即执行一次的定时器 setinterval 立即执行函数是解决方案之一
let intervalNow = setInterval((function () {
	someFun();
	return someFun;
})(), 1000);

// 只执行一次的函数，特别在定时器中效果会很好，执行过一次后 fn 就变成 null 了
function onceF(fn, context) {
	let result;
	return function () {
		if (fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}
		return result;
	};
}
let canOnlyFireOnce = onceF(function () {
	console.log('Fired!');
});
// 本地存储原生 js 兼容写法
let ssStorage = window.sessionStorage || (window.UserDataStorage && new UserDataStorage()) || new cookieStorage();
ssStorage.clear();
// canvas 图片模糊解决方法
// 获取设备的像素比 然后将图片 * 像素比之后再画到 canvas 上
var getPixelRatio = function (context) {
	var backingStore = context.backingStorePixelRatio ||
		context.webkitBackingStorePixelRatio ||
		context.mozBackingStorePixelRatio ||
		context.msBackingStorePixelRatio ||
		context.oBackingStorePixelRatio ||
		context.backingStorePixelRatio || 1;

	return (window.devicePixelRatio || 1) / backingStore;
};
// canvas 图片模糊解决方法
// canvas 扩展 清除圆形区域
function clearArcFun(x, y, r, cxt) {
	let stepClear = 1;
	clearArc(x, y, r);

	function clearArc(x, y, radius) {
		let calcWidth = radius - stepClear;
		let calcHeight = Math.sqrt(radius * radius - calcWidth * calcWidth);
		let posX = x - calcWidth;
		let posY = y - calcHeight;
		let widthX = 2 * calcWidth;
		let heightY = 2 * calcHeight;
		if (stepClear <= radius) {
			cxt.clearRect(posX, posY, widthX, heightY);
			stepClear += 1;
			clearArc(x, y, radius);
		}
	}
}
// canvas 画图 不切图片 contain 行为 需要知道图片和 canvas 的宽高
function canDrawContainImg() {
	imgW / imgH > canW / canH ?
		ctx.drawImage(tempImg, 0, 0, imgW, imgH, 0, (canH - imgH * canW / imgW) / 2, canW, imgH * canW / imgW) :
		ctx.drawImage(tempImg, 0, 0, imgW, imgH, (canW - imgW * canH / imgH) / 2, 0, imgW * canH / imgH, canH);
}

// canvas 画图 平均的切图片 cover 行为 需要知道图片和 canvas 的宽高
function canDrawCoverImg() {
	imgW / imgH > canW / canH ?
		ctx.drawImage(tempImg, 0, (imgH - canH / canW * imgW) / 2, imgW, canH / canW * imgW, 0, 0, canW, canH) :
		ctx.drawImage(tempImg, (imgW - imgH / canH * canW) / 2, 0, imgH / canH * canW, imgH, 0, 0, canW, canH);
}

// 相关变量声明的高级写法，面向对象的写法
let smObj = {
	init: function () {
		let a = this;
		a.someFun(true);
	},
	someFun: function (f) {
		if (f) {}
	},
	_proA: 1,
	_proB: 2
};

// typeof 判断类型，集合了基本类型和复杂类型的判断（除了 object 和 array 的判断）
function getTypeOf(e) {
	return (_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
		return typeof e
	} : function (e) {
		return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
	})(e)
}
// 判断类型，包含所有的类型种类，返回类型的小写字符串
function complexTypeOf(obj) {
	return Object.prototype.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}
// 前端性能监控之 performance
let performance = window.performance || window.msPerformance || window.webkitPerformance;
// 返回当前的时间戳
performance.now();
// 是一系列关键时间点
performance.timing;

// 时间函数 缓动函数 贝塞尔曲线 bezier
function oneBezier() {
	return function (t) {
		let y = t;
		return y;
	}
}

function TwoBezier(cp) {
	const [cx, cy] = cp;
	return function (t) {
		let y = 2 * t * (1 - t) * cy + t * t;
		return y;
	}
}

function ThreeBezier(cp1, cp2) {
	const [cx1, cy1] = cp1;
	const [cx2, cy2] = cp2;
	return function (t) {
		let y = 3 * cy1 * t * (1 - t) * (1 - t) + 3 * cy2 * t * t * (1 - t) + t * t * t;
		return y;
	}
}


// 节流 throttle 函数，可以在高并发的时候包装调用，提高性能
// wait: 数字类型，延迟的时间，默认 1000 ms
// options.leading: Boolean ，false 表示禁用第一次执行
// trailing.leading: Boolean ，false 表示禁用停止触发的回调
function throttle(fn, wait = 1000, options = {}) {
	let timer;
	let previous = 0;
	let throttled = function () {
		let now = +new Date();
		// remaining 不触发下一次函数的剩余时间
		if (!previous && options.leading === false) previous = now;
		let remaining = wait - (now - previous);
		if (remaining < 0) {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			previous = now;
			fn.apply(this, arguments)
		} else if (!timer && options.trailing !== false) {
			timer = setTimeout(() => {
				previous = options.leading === false ? 0 : new Date().getTime();
				timer = null;
				fn.apply(this, arguments);
			}, remaining);
		}
	}
	return throttled;
}

// 检查一个对象数组中，每一个对象的某一 name 项是否都是存在并为 true
function truthCheck(collection, name) {
	return collection.every((d, i) => {
		return name in d ? Boolean(d[name]) : false;
	});
}

// deepClone 深度克隆函数
function deepCloneJSON(old, newO) {
	let i, copystr;
	copystr = JSON.stringify(old);
	copystr = JSON.parse(copystr);
	newO = newO || {};
	for (i in copystr) {
		if (copystr.hasOwnProperty(i)) {
			newO[i] = copystr[i];
		}
	}
	copystr = null;
	return newO;
}

// 去重函数 unique value array 数组去重
function getUniqueValue(arr) {
	let tempObj = {};
	return arr.filter(function (item) {
		return tempObj.hasOwnProperty(item) ? false : (tempObj[item]) = true;
	})
}

function getUniqueValueES6(arr) {
	return arr.filter((v, i, s) => s.indexOf(v) === i);
}

function getUniqueSet(arr) {
	return [...new Set(arr)];
}
// 数组扁平化 多层数组变成一层 .flat
[1, 2, [3, 4]].flat(); // [1,2,3,4]
function flattenES5(arr) {
	let result = [];
	for (let i = 0, len = arr.length; i < len; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flattenES5(arr[i]));
		} else {
			result.push(arr[i]);
		}
	}
	return result;
}

function flattenES6(arr) {
	while (arr.some(item => Array.isArray(item))) {
		arr = [].concat(...arr);
	}
	return arr;
}
// 二进制转换字符串
function binaryAgent(str) {
	let r = '';
	str.split(' ').map(i => {
		r += String.fromCharCode(parseInt(i, 2));
	})
	return r;
}

// PTT 油猴
// ==UserScript==
// @name            PTT Michael GitHub
// @namespace       ptt-task-assistant-for-huaweiuser.js
// @version         1.xx
// @description     Try to take over the world!
// @author          Michael Gao
// @include         https://live.pttgps.com/track/*
// @grant           none
// @require         https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/accessories/ptt/ptt_latest.js?v20201014a
// ==/UserScript==
// PTT 油猴