# 浏览器
### 跨域问题：
	* why:
	    跨域的限制其实是浏览器的同源策略，限制了不同源文档和脚本的加载，隔离了恶意文件的安全机制。
	    比如CSRF（跨站请求伪造）攻击方式: 恶意B网站利用用户未登出的cookie来请求A网站获取信息资源。
	        防御方法： 服务端添加Hash值验证，简单有效。
	* how:
	    JSONP： 通过<script>没有跨域限制的漏洞来进行跨域请求，服务端需要做一定的支持。只支持GET方法。
	    AJAX： 类似JSONP，但是它属于同源策略。
	    CORS： 需要浏览器和后端的同时支持，分为简单请求和复杂请求。
	    postMessage： 由H5提供的API： targetWindow.postMessage(message, targetOrigin, [transfer])
	        可以添加监听事件来接收数据： 	
		    window.addEventListener("message", receiveMessage, false)
		    function receiveMessage(event) {var origin= event.origin; console.log(event);}
		    console中的data就是从其他窗口发过来的消息；
		    type是发送消息的类型；
		    source是发送消息的窗口对象；可以用来验证发送网站；
		    origin是发送消息的窗口的源；可以用来验证发送网站；
	    Websocket： 建立websocket之后达到双向通信（HTTP只是客户端发送给服务端），建立在TCP协议之上，与HTTP兼容，高效，没有同源限制。
	    Node中间代理： 跨域只是限制浏览器，所以使用服务器从中间代理发送和接收请求将没有这个限制。
	    nginx反向代理： 类似Node中间代理。
	    window.name + iframe： 实际上使用iframe跨域之后用window.name(2M)来存储信息，然后再改变iframe中src来回归本地从而避开同源限制。
	    location.hash + iframe: iframe的src中添加#idontloveyou信息，window.onhashchange来触发事件。
	    document.domain + iframe： 只适用于二级域名相同的情况，强制设置document.domain为example.com。
### 性能优化方法：
	* 减少http请求，合理运用浏览器缓存。
	* 使用压缩HTML，CSS，JS文件。
	* CSS Sprites： 合并图片，减少请求次数。
	* CSS选择符优化（解析是从右往左）。
	* CDN部署提高获取速度，通常为静态文件，图片，CSS，静态页面等。
	* 懒加载图片（LazyLoad）。
	* CSS放在页面最上部（优先下载加载），JS放在最下面。
	* 异步加载JS。
	* 减少cookie传输，以及减少cookie的数据量。
	* JS优化：
	    减少作用域链查找，在局部环境下声明局部变量并存储全局变量。
	    减少对象以及数组的深度查找。
	    减少使用“+”来拼接字符。（可用join方法代替）
	    少用HTML Collection，with，eval，function。
### 浏览器返回状态码：
	* 1XX - 信息提示
	    100: 继续
	    101: 切换协议
	* 2XX - 成功
	    200: 请求成功
	    201: 已创建
	    202: 已接受
	    203: 非权威性信息
	    204: 无内容
	    205: 重复内容
	    206: 部分内容
	    207: 多状态
	* 3XX - 重定向
	    301: 已永久移动
	    302: 对象已移动
	    304: 未修改
	    307: 临时重定向
	* 4XX - 客户端错误
	    400: 错误的请求
	    401: 访问拒绝
	    403: 禁止访问
	    404: 无，没有找到文件或目录
	    405: 访问HTTP的方法不被允许
	    406: 客户端浏览器不接受所有页面的MIME类型
	    407: 代理身份验证
	    412: 前提条件失败
	    413: 请求实体太大
	    414: 请求URI太长
	    415: 不支持媒体类型
	    416: 无法满足请求范围
	    417: 执行失败
	    423: 锁定的错误
	* 5XX - 服务器错误
	    500: 内部服务器错误
	    501: 页眉值指定了未实现的配置
	    502: Web服务器用作网关或代理服务器时收到了无效响应
	    503: 服务不可用
	    504: 网关超时
	    505: HTTP版本不受支持
### IIS HTTP状态码：
	* 200: 成功
	* 206: 部分内容
	* 207: 多状态
	* 301: 已永久移动
	* 302: 已找到
	* 304: 未修改
### HTTP2.0和HTTP1.1的区别：
	* HTTP2.0采用二进制格式而非文本格式，二进制协议解析起来更有效，错误更少。
	* HTTP2.0完全多路复用，而非有序并阻塞的，只需要一个连接即可实现并行。
	* 使用报头压缩，降低了开销。减少来回的请求次数。
	* 让服务器可以将响应主动”推送“到客户端缓存中。避免往返的延迟。
### HTTPS和HTTP的区别：
	* https协议需要到ca申请证书，一般需要一定费用。
	* http是超文本传输协议，明文传输，https则是ssl加密传输协议。https是http加密版。
	* http端口是80，https端口是443，使用完全不同的连接方式。
	* http连接是无状态的，https是HTTP+SSL构建的可加密传输、身份认证的网络协议。
	* http工作流程：
	    建立TCP/IP连接，客户端与服务器通过Socket三次握手进行连接。
	    客户端向服务器发送HTTP请求。
	    客户端发送请求头信息，请求内容，一行空格表示请求完毕。
	    服务器对客户端请求作出回应。
	    服务器向客户端发送应答头信息。
	    请求头信息后加一行空格表示发送完毕，然后以Content-type要求的数据格式发送数据给客户端。
	    服务器关闭TCP连接。
	    特点：支持客户/服务器模式（C/S模式）、简单快速、灵活、无连接、无状态。
	* HTTPS工作流程：
	    客户使用https的URL访问Web服务器，眼球建立SSL连接。
	    Web服务器受到请求后，会将网站的证书信息（公钥）传送给客户端。
	    客户端浏览器与Web服务器协商SSL连接的安全等级，信息加密等级。
	    客户端的浏览器根据安全等级建立绘画密钥，用网站的公钥将会话密钥加密并传送给网站。
	    Web服务器利用自己的密钥解密出会话密钥。
	    Web服务器利用会话密钥加密与客户端之间的通信。
### 浏览器缓存机制：
	* 用户发送请求后根据是否有缓存来判断是否向服务器请求资源（A）。
	* 如果有缓存再根据资源是否过期来判断是否从缓存中读取数据（B）。
	* 如果已经过期则向浏览器发送请求。
	* 之后再判断是否使用缓存。
	* 不使用缓存则向服务器请求资源（A）。
	* 使用缓存则从缓存中读取数据（B）。
	* 强缓存： 不与服务器发生交互行为，直接从客户端缓存中读取。
	* 协商缓存： 由服务器判断是否从缓存中获取，根据返回头中Cache-control、expires、last-modified、date、etag等字段来判断。	
	


# HTML
### HTML5 新增特性：
	* 增加了用于绘画的canvas元素
	* 用于媒介回放的video和audio元素
	* 对本地离线存储的更好的支持
	* 新的内容元素，比如article、footer、header、nav、section
	* 新的表单控件，比如calendar、date、time、email、url、search



# CSS
### CSS3 新特性：
	* CSS3相比较CSS2对边框、背景、渐变、文本效果、字体、转换效果、过渡、动画、图片、用户界面、盒模型、媒体查询等都有了很大的进步。
	* 
	* 以后添加





# JavaScript
### JavaScript的优缺点：
	* JavaScript是基于对象的事件驱动并具有相对安全的客户端脚本语言。
	* 动态，弱类型，单线程，内置支持类。
	* 相对安全： JS不允许访问本地磁盘且不会将数据存入服务器。
	* 事件驱动脚本语言： 响应鼠标单击，下滑页面等。
	* 响应需求事件： 简化了表单输入验证。
### ES6新增内容：
	* const和let变量。
	* 模版字面量。使用反单引号，可以使用${expression}来表示占位符。
	* 箭头函数。
	* JavaScript类。
	* 函数参数的默认值。
	* 数组和对象的解构，arr=[1,2,3,]; [a,b,c]=arr; console.log(a,b,c); //1,2,3
	* 展开运算符，用（...）表示。 var names=[“A”,”B”,”C”];console.log(…names); //ABC
	* (…vals)可以用于参数对象，表示剩下的所有参数。
### ES6箭头函数=>的特点：
	* 简洁，但是没有自己的this（不会改变原本的绑定），arguments，super，new.target。
	* 无法使用new来用作构造器。没有prototype属性。
	* 返回对象字面量的时候需要加小括号。
	* 箭头函数闭包示例：var add = (i=0)=>()=>(++i);var test=add(); test(); //1
### ES6 Promises是什么：
	* 本身是一个对象，有pending，resolved，rejected三个状态，无论失败与否都会有“答复”。
	* 异步编程的一种解决方案，最早由社区提出实现，后ES6写进了语言标准。
	* JavaScript event loop事件循环完成之前是不会callback的，常用.then()方法写链式调用函数。
### ES6 新增Map与原生对象的区别：
	* Object和Map存储的都是键值对的组合，Object无序，Map有序根据插入顺序。
	* Object键只能是字符串，而Map可以是任意类型。
	* Map的键是跟内存地址绑定的，可以拥有相同值的引用类型作为键（扩展别人库的时候很方便），如果键是简单类型===视为一个键（NaN为同一键）。
	* Map()简单的实例： 
	    
	    var mm = new Map([[‘name’,’Michael’],[‘time’,’29’]]);
	    mm.size; //2
	    mm.has(‘name’); //true
	    mm.get(‘name’); //“Michael”
	    mm.set(‘name’,’Gao’); //“Gao”
	    	
	* 如果读取一个不存在的键会返回undefined： new Map().get(‘unknown’); //undefined	
	* 同一键连续赋值将覆盖前者： let map = new Map();map.set(1,'aa').set(1,'bb');map.get(1); //“bb”
	* Map()继承的属性：
	    Map.prototype.constructor: 返回一个函数，它创建了实例的原型。
	    Map.prototype.size: 返回键值对的数量。
	* Map()继承的方法：
	    Map.prototype.clear()	
### 基本类型的值是无法被改变的，只能被重新赋值：
	* var str = “abc”;
	* str[0] = 1;
	* str的值仍然是“abc”。
### var let const的区别：
	* var let const都有全局作用域和函数作用域。
	* 相对var, let有块级作用于，{let a=1;}console.log(a); //Error
	* let和const在同一作用域不能声明2次。
	* const必须初始化，且赋值后不能修改(readonly)。
### null和undefined的区别：
	* null通常是给一些暂时不用的变量赋值，undefined声明但未赋值。
	* null == undefined; null !== undefined; //null是Object类型
	* function test(){var nothing;} console.log(test()); //输出：undefined
### defer和async的区别：
	* 正常的script标签会在页面元素解析中遇到时下载并执行，页面可能会造成长时间的等待。
	* 有async和defer都是在HTML解析中可以下载的。
	* async下载后停止解析HTML并直接执行，defer只会在HTML全部解析之后执行（理应按照加载顺序执行）。
### 数组的复制：
	* arr2  = […arr1];
	* 这个方法使用三个.来复制arr1的所有值给arr2，修改arr1不再影响arr2。
### 数组的方法：
	* 操作方法：
		
	* 迭代方法：
	    .every()
	    .filter()
	    .forEach()
	    .map()
	    .some()
### someFunction()()():
	* someFunction中需要return另一个function2中return另一个function3。
	* 这个就意味着直接执行了“孙函数”。
### 函数声明与函数表达式：
	* 函数声明和函数表达式基本是一样的功能，区别在于函数声明有hosting，函数表达式则没有。
	* 函数没有重载，重复声明会覆盖前者。
	* var func = function func(){}只有在Safari中会导致错误。
### 构造函数和函数工厂：
	* 构造函数中的构造两个字，所以需要new来构造一个新的函数，函数中使用this.property来赋值或者增强函数。
	* 代码没有多少的复用率，每次都是重新创建，共享引用属性。
		function GouZao(name, age, likes) {
			this.name = name;
			this.age = age;
			this.likes = [‘JS’, ‘HTML’];
		}
		var newObeject = new GouZao(‘Michael’, 29);
		var anotherObject = new GouZao(‘Gao’, 28);
	* 函数工厂顾名思义它是一个工厂类的函数，在函数中创建一个Object并对其增强，最后返回这个Object。
		function gongChang(name, age){
			var obj = new Object();
			obj.name = name;
			obj.age = age;
			return obj;
		}
		var newObj = gongChang(‘Michael’, 29);
### Date类型：
	* Date.now() == +new Date(); // true, 两者都返回当前时间的毫秒数
	* +new Date() == new Date().getTime; // true, 两者都返回当前时间的毫秒数
### 基本类型的包装类型：
	* var numobj = new Number(123); // 属于Object， 和 var num = 123; 不同
		typeof numobj; // object , 它是数字基本类型的包装类型，属于引用类型
		同理new Boolean(), new String()
	



### 面试笔试常见重点题：
	* GET和POST的区别：
	    GET是从服务器获取数据，相当于查，效率高，POST是与服务器之间传输数据，相当于增删改；
	    GET可以被缓存，但是POST不可以；
	    后退或刷新页面对GET无害，对POST数据会被重新提交，用户被告知；
	    大小的区别：
		GET的大小通常为2K-8K，是由于URL的长度限制。服务端也会有限制，为了性能和安全考虑；
		POST的大小最小为2M，理论上无上限；
	    安全性：
		GET安全性比较低，它将数据放在了ULR中以?分隔，多组数据以&分隔，用户可以直观的看到数据；
		POST安全性比较强，用户无法看到操作流程，直接将数据放在HTML Header中（传输方面其实也不安全，只有HTTPS是安全的）；
	    GET和POST只是HTTP协议中的两种请求方式，所以在传输上没有区别，只有在报文的格式上有区别；
	    GET产生一个TCP数据包，而POST产生两个TCP数据包；
	    GET只支持ASCII字符，POST没有限制；
	    
	* 闭包问题：
	    闭包的作用： 可以读取函数内部的变量，让变量始终保存在内存中。
	    为什么要用闭包： 防止变量污染，但是用多了会内存泄漏。
	    可以理解成自带运行环境的函数。
	    
	    function closeFn() {
		var count = 0;
		return function closeFn2() {
		    alert(count++);
		}
	    }
	    var test1 = closeFn(); var test2 = closeFn();
	    test1();test1();test2(); //010
	    
	    arguments.callee:
		callee有效的实现了递归函数，防止了函数名错误问题。
		
		function func(num) {
		    if(num<=1){
			return 1;
		    } else {
			return (num*arguments.callee(num-1));
		    }
		}
		var test = func(4);
		alert(test); //24

	* 事件捕获和事件冒泡：
	    以click事件为例子，如果有4个div嵌套，分别有click事件log出1，2，3，4;
	    当点击最里层的4时，全过程是12344321；其中1234是事件捕获的过程，4321是事件冒泡过程；
	    默认的事件过程是冒泡，也就是addEventListener的第三个参数默认为false，当为true的时候为捕获；
	    可以使用stopPropagation来阻止事件的继续传递；
	    * 事件委托：
		ul中有很多li，for循环绑定点击事件需要占用很多内存，所以需要用事件委托；
		只在ul上绑定点击事件，然后在function(ev)里判断点击的ev.target的nodeName是否为li，然后进行相应操作；
		动态添加的li也会有点击事件，因为点击事件是绑定在父元素ul上的；
	
	* URL输入之后发生了什么：
	    1.输入URL；
	    2.浏览器根据URL的域名找到对应的服务器IP地址；
	    3.本机与服务器建立TCP连接；
	    4.本机根据HTTP协议发送一个请求；
	    5.如果服务器有重定向，做重定向；
	    6.浏览器跟踪重定向找到最终的服务器；
	    7.服务器处理请求；
	    8.服务器返回一个HTML相应；
	    9.服务器释放TCP连接；
	    10.浏览器根据自身的规则开始解析渲染页面；
	    11.开始请求嵌入在HTML中的资源；

	* AJAX的创建流程：
	    1.创建XMLHTTPRequest对象；
	    2.给这个对象一个callback函数；
	    3.调用对象的open方法打开连接；
	    4.发送数据send；
	    5.根据返回的响应做一些对应的处理；
	    AJAX本身的技术就是配合后台的API接口来接受数据的传递，并不需要刷新全部页面，根据数据来进行局部刷新。
	
	* 在没有任何样式的h1为什么比h2大：
	    在没有任何样式的情况下，h1标签和h2标签其实是没什么具体区别的。
	    主要大小的不同是因为浏览器本身有默认的CSS样式属性，然而每个浏览器都略有不同，也就是为什么有时候需要写通用CSS。
		body * {padding: 0;} 就是一个通用CSS的例子。

	* 在图片大小都很大的情况下如何优化：
	    将图片转换成JPEG的格式来减小文件的大小。
	    如果需要可以做一定的压缩，但是会影响清晰度，需要取一个折中点。
	    如果不是banner的图片可以做一下懒加载处理。
	    可以做图片精灵处理，只进行一次HTTP请求一张包含所有图片的图片。
	    
	    
	    
	    
		


### typeof和instanceof的区别：
	* typeof来判断数据类型，返回值有原始类型，函数，undefined，object。
	* instancof是用来判断变量是否为某个对象的实例，返回值为true，false。
	* 相比较typeof，instanceof能区分数组[]和对象{}。
### .apply()和.call()函数：
	* ECMAScript定义的这两个方法作用是一样的，只不过传参的形式不一样而已。
	* foo.call(this, arg1,arg2,arg3) == foo.apply(this, args) == this.foo(arg1,arg2,arg3);
	* .apply()有两个参数，第一个作为函数上下文的对象，第二个是函数参数所组成的数组。
	* .call()有两个参数，第一个作为函数上下文的对象，第二个是函数参数列表而不是单个数组。
	* 在没有第二个参数的情况下，两个方法效果是一样的。
	* 两个方法都能改变this的指向为函数上下文的对象，同时与原函数没有耦合关系。
### .bind()函数：
	* 此方法会返回一个函数的实例（获得一个新函数），其this会绑定到传给bind()函数的值。
	* 和.call()和.apply()类似，.bind()可以改变函数的上下文对象。
	* 相比较bind()中没有第二个参数。
	* 注意低版本浏览器兼容问题。
### document.ready 和 document.load：
	* 原生JS只有load方法，也就是onload事件，当页面所有资源全部加载完成后执行的函数。
	* ready是jQuery事件，当DOM节点创建就绪时可以调用，ready不包括CSS和图片资源。
### 点击链接如何在新窗口打开：
	* <a>tag可以设置target=“_blank”来打开新窗口，但是只会在新标签页中打开。
	* JS添加onclick事件，window.open(url, title[, “windowFeatures”])可以实现新窗口中打开。
	* windowFeatures可选属性，可以有menubar，location，status，scrollvars等（注意浏览器支持问题）。
### frame和iframe的区别：
	* frame不能脱离frameSet单独使用，也不可以和body同时使用。
	* frame嵌入的是独立的个体内容，frame是非活动帧，直接把页面切开，可以配合frameSet把页面切成多个。
	* iframe可以单独使用，可以放在table中，iframe是浮动的框架就是在页面上加上一个页面。
	* iframe嵌入的是网页的整体，iframe是活动帧，用起来比较灵活，是网页中的子框架，父子关系。
### MVC模式:
	* 最常见的软件框架模式之一，Model(模型),View(视图),Controller(控制)。 V->C->M->V->C->M...的顺序
	* 实际往往采用更灵活的方式，比如Backbone.js，用户可以直接由View要求Model改变状态。
	* 用户看到的是View，程序的外壳，提供操作界面。最底层是Model，数据的操作。中间是Controller，负责从视图输入指令，从数据层操作数据。
	* 把软件分为3个主要的部分，相互独立，所以可以分别开发或者更换。
### MVP:
	* Model,View,Presenter.
	* V与M不发生联系，都通过P来传递，P非常厚，所有逻辑都部署在这里。
### MVVM:
	* Model,View,ViewModel.
	* 与MVP唯一区别是它采用双向绑定，View的变动自动反映在ViewModel上。
### Git中的 .md 文件是什么：
	* 以 .md 结尾的文件是使用MarkDown编写的轻量级标记语言，使用易读易写的纯文本格式编写然后转换成XHTML或HTML文档。
	* .md 的语法都是以符号组成的，它并没有想要取代HTML的意思，只是想要让文档更容易读，更方便更改。
	* 它本身的这些特点比纯文本要强，所以比较适合书写博客。
### Git中克隆项目的时候HTTPS和SSH的区别：
	* SSH是一种网络协议，用于计算机之间的加密登录，存在多种实现，使用公钥加密，防止不了‘中间人攻击’。
	* git 中的SSH主要有以下特点： 必须是项目拥有者，在clone前添加SSH Key，push的时候不需要输入用户名和密码。
	* git 中HTTPS主要以下不同： 谁拿到URL都可以随便clone，但是在push的时候需要验证用户名和密码。























