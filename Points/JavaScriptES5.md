# JavaScript 教程
## https://wangdoc.com/javascript/index.html
## 入门篇
- Label:
	```
	labelName: 
	statement(multiple loop);
	```
	Can use with break labelName; to make all the statement break.

## 数据类型
- typeof:
	return `number`, `string`, `boolean`, `function`, `undefined`, `object`
	`if(someVariable){//...}` will give error is someVariable not defined
	Recommendation: `if(typeof someVariable === “undefined”){//...}`
- Boolean: 
	undefined, null, false, 0, NaN, “”, ‘’ == false;
	[] == true;
	{} == true;
- Object：
	`Object.keys(obj)`: return all keys in obj
	delete: 
		`delete obj.notExist; // return true`
		Only when configurable: false, delete obj... // return false
	with:	```
		var obj = {p1:1,p2:2};
		with (obj) {
			p1=4;
			p2=5;
		}
		// equal to
		obj.p1=4; obj.p2=5;
		```
		Not recommend to use `with`, `with` may create global variable when obj not has it.
- Function:
	`var f = function f() {}; // This way is easy for call f inside of f();`
	`new Function(‘x’,’y’,’return x+y;’); // Last one is function body;`
	Could use `arguments` and `switch` to write Function Overload;
	函数的作用域是定义时的作用域，不是执行时的作用域。
- Array:
	Array can have properties and not effect to `.length`;
		`var a=[]; a[“p”]=“abc”; console.log(a.length) // 0`

## 运算符
- 算术运算符： 
	only `++` and `—` change origin value;
	`**` begin from right, like `2 ** 3 ** 2 //512` equal to //2 ** (3 ** 2);
	` ‘2’ > ’11’ // true` cause string is compare by Unicode one by one from left;
- Boolean: 
	`!!x` equals to `Boolean(x)`;
	condition1 && condition2:
		if condition1 = true, then return condition2
		if condition1 = false, then return condition1
	&& return first false value until the last one;
	|| return first true value until the last one.
- 二进制位运算符： 
	共7个，`|`, `&`, `~`, `^`, `<<`, `>>`, `>>>`
	太难了...不直观导致许多场合不能使用，不实用。
- 其他运算符：
	`void()` always return undefined, could use it in `<a>` to prevent default:
		`<a href=“javascript: void(document.form.submit())”>Submit</a>`
	`’a’,’b’ //“b”` return second value:
		`var value = (console.log(‘hi!’), true); //true` 作用是做一些辅助操作;
	赋值`=`和三元条件运算符`? :`和指数运算符`**`是从右到左到顺序：
		`q = a ? b : c ? d : e ? f : g;`
		equal `q = a ? b : (c ? d : (e ? f : g));`


## 语法专题
- 数据类型的转换：
	3个强制转换： `Number()`, `String()`, `Boolean()`;
	`Number(‘321abc’) // NaN` 相对`parseInt(‘321abc’) // 321`,前者只要有一个字符无法转换则返回`NaN`;
	`Boolean()`中只有以下5个为`false`:
		`undefined`, `null`, `0(-0,+0)`, `NaN`, `’’`
	only `+` could transfer to strings;
- 错误处理机制：
	```
	var err = new Error(‘Wrong’); // err.message = ‘Wrong’;
	if(err.name) {
		throw err.message; // ‘Wrong’
	}```
	原生几种错误对象：
		```
		var err1 = new Error('wrong');
		var err2 = new RangeError('range wrong');
		var err3 = new TypeError('type wrong');
		var err4 = new SyntaxError('syntax wrong');
		var err5 = new ReferenceError('reference wrong');
		var err6 = new URIError('URI wrong');
		var err7 = new EvalError('no longer use this one');
		err1.message; // “wrong”
		err2.message; // “range wrong”
		err3.message; // “type wrong”
		err4.message; // “syntax wrong”
		err5.message; // “reference wrong”
		err6.message; // “URI wrong”
		err7.message; // “no longer use this one”
		```
	自定义错误：
		```
		function MyError(message) {
			this.message = message || ‘default message’;
			this.name = ‘MyError’;
		}
		MyError.prototype = new Error();
		MyError.prototype.constructor = MyError;
		```
	`throw` 的作用是手动中断程序， 它可以抛出任何值;
	`try...catch` 的作用是捕捉错误并对错误处理，程序不会中断;
	`finally` 的作用是无论是否有错误最后都会执行的代码;
		```
		function f() {
  			try {
    				console.log(0);
    				throw 'bug'; // 进入catch
  			} catch(e) {
    				console.log(1);
    				return true; // 这句原本会延迟到 finally 代码块结束再执行
    				console.log(2); // 不会运行
  			} finally {
    				console.log(3);
    				return false; // 这句会覆盖掉前面那句 return
    				console.log(4); // 不会运行
  			}
	  		console.log(5); // 不会运行
		}
			var result = f(); // 0 1 3
			result; // false
		```
- 编程风格：
	圆括号(parentheses)在函数调用和函数定义时，函数名和左括号之间没有空格，其他都有。
	分号：
		`for`和`while`循环不需要分号，但是`do...while`需要;
		`if`, `switch`, `try`不需要分号;
		函数声明不需要分号，但是函数表达式需要;
	`switch…case` 建议用对象结构代替;
- console 对象与控制台：
	`console.log()`和`console.info()用法效果基本相同；
		console.log 支持以下占位符：
			`%s`字符串
			`%d`整数
			`%i`整数
			`%f`浮点数
			`%o`对象的链接
			`%c`CSS格式字符串:
				`console.log(‘%cThis style!’, ‘color: green;’)` //绿色的 This style!
	`console.warn()`会在前面挤上黄色三角以示警告，同时高亮；
	`console.error()`会在前面加上红色的叉表示错误，同时高亮；
	`console.table()`会输出表格，Array或者Object都可以；
	`console.count()`接收一个参数，根据参数来计数；
	`console.dir()`和`console.dirxml()`以更易于阅读的方式显示所有信息；
	`console.assert()`两个参数，第一个是表达式，只有在第一个参数为`false`的时候打印第二个参数字符串；
	`console.time()`和`console.timeEnd()`接收同一个参数来计算中间所花的时间；
	`console.group()`, `console.groupEnd()`, `console.groupCollapsed()`在大量输出时分组折叠/展开；
	`console.trace()`显示调用路径；
	`console.clear()`清空控制台,可以被`Preserve log`选项否认；
	控制台API:
		`$_`上一个表达式
		`getEventListeners(object)`返回一个对象对应object事件；
		`keys(object)`和`values(object)`返回键名和键值；
		`monitorEvents(object, [events])`和`unmonitorEvents(object, [events])`监听事件，返回相关信息；
			`monitorEvents(window, “resize”);`
	`debugger`在没有除错工具时自动被跳过，有除错工具的时候运行到的时候会暂停，自动打开源码等待下一步操作；
		Chrome浏览器中运行到`debugger`时暂停运行，自动打开源码界面；


## 标准库
- Object:
	Object静态方法：
		`Object.keys()`和 `Object.getOwnPropertyNames()`都是枚举自身的属性名，只有后者返回不可枚举属性的属性名。
			``` 	
			var a = [1,2,3];
			Object.keys(a) // [“0”, “1”, “2”];
			Object.getOwnPropertyNames(a) // [“0”, “1”, “2”, “length”] 
			```
		`Object.getOwnPropertyDescriptor(obj, ‘propertyName’)` 获取某个属性的描述对象；
		`Object.defineProperty(obj,{})` 通过描述对象，定义某个属性；
		`Object.defineProperties(obj,{ , })` 通过描述对象，定义多个属性；
		`Object.preventExtensions(obj)` 防止对象扩展，添加新属性无效，属性可以更改；
		`Object.isExtensible(obj)` 判断对象是否可扩展，返回true/false；
		`Object.seal(obj)` 禁止对象配置，删除返回`false`，属性可更改，`configurable: false`；
		`Object.isSealed(obj)` 判断是否禁止，返回true/false；
		`Object.freeze(obj)`  禁止对象配置，删除返回`false`，属性不可更改，`configurable: false`；
		`Object.isFrozen(obj)` 判断是否冻结，返回true/false；
	Object主要的实例方法（继承）：
		`Object.prototype.valueOf()` 返回当前对象对应的值,如`obj1.valueOf() === obj1`;
		`Object.prototype.toString()` 返回对象的字符串形式，通常返回`[object, Object]`;
			数组，字符串，函数，Date对象都有自定义的`toString`覆盖了原形的`toString`方法；
				比如`(function() {return 123;}).toString(); // “function() {return 123;}”`
			利用`toString()`判断数据类型，调用`Object.prototype.toString.call(value)`返回类型：
				数值：返回`[object Number]`;
				字符串：返回`[object String]`;
				布尔值：返回`[object Boolean]`;
				Undefined：返回`[object Undefined]`;
				null：返回`[object Null]`;
				数组：返回`[object Array]`;
				arguments：返回`[object Arguments]`;
				函数：返回`[object Function]`;
				Error：返回`[object Error]`;
				Date：返回`[object Date]`;
				RegExp：返回`[object RegExp]`;
				其他对象：返回`[object Object]`;
		`Object.prototype.toLocaleString()`返回字符串，返回结果同上，多一个接口方便实现地区版的`toString()`;
			比如日期： `var date = new Date(); date.toString() === date.toLocaleString() // false`
		`Object.prototype.hasOwnProperty()` 接收一个字符串作为参数，返回true/false表示对象自身是否有该属性;
			`var obj = {name: “Michael”}; obj.hasOwnProperty(‘name’) // true`
- 属性描述对象
	属性描述对象共有6个属性：
		```
		{
			value: 123,
			writable: false,
			enumerable: true,
			configurable: false,
			get: undefined,
			set: undefined
		}
		```
		可以使用`Object.defineProperty(obj, “name”, {get: function() {return 123}})`来添加属性；
		也可以使用`Object.defineProperties()`来添加多个属性；
		`Object.getOwnPropertyNames()` 可以遍历全部属性名，不管是否可遍历；
		`Object.prototype.propertyIsEnumerable()` 返回true/false来判断是否可遍历，继承的属性都返回false;
	当`enumerable`为`false`的时候，下面三个操作不会得到该属性： 
		`for (key in obj)` 循环；
		`Object.keys(obj)` 方法；
		`JSON.stringify(obj)` 方法；
	`get`和`set`适合定义属性的值依赖对象内部数据的场合，`get`不接受参数，`set`只接收一个参数即属性的值；
	利用`Object.defineProperty()`来拷贝对象：
		```
		var extend = function(to, from) {
			for (var prop in from) {
				Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
			}
			return to;
		}
		extend({}, {get a(){return 123}}) // {get a() {return 123}}
		```
	局限性：
		`Object.preventExtensions()`, `Object.seal()`, `Object.freeze()`这三个方法只能改变对象本身，不能控制原型；
		所以可以改变原型来改变被`.freeze()`的对象：
			```
			var obj = new Object();
			Object.freeze(obj);
			var proto = Object.getPrototypeOf(obj);
			proto.t = ‘hello’;
			obj.t; // “hello”
			```
			可以把`obj`的原型也冻结住才能彻底冻结；
		如果属性值是对象，冻结只能冻结指向的对象，不能冻结对象本身内容：
			```
			var obj = {foo:1, bar: [‘a’,’b’]};
			Object.freeze(obj);
			obj.bar.push(‘c’);
			obj.bar; // [“a”,”b”,”c”]


- Array对象：
	`Array`构造函数在不同参数的时候行为不一样，所以建议使用字面量；
		`new Array(2)` // [empty * 2]
		`new Array(1,2,3) // [1,2,3]`
	静态方法： 
		`Array.isArray(arr)` 返回true/false来说明是否是数组，此方法弥补了`typeof`的不足；
			```	
			var arr = [1,2,3];
			typeof arr; // “object”
			Array.isArray(arr); // true
			```
	实例方法：
		`arr.valueOf()`和`arr.toString()` 所有对象都拥有的方法，返回数组本身和字符串形式；
		`arr.push()` 末端添加元素， 返回数组长度，改变原来数组；
		`arr.pop()` 删除最后一个元素，返回被删除的元素，改变原来数组；
		`arr.unshift()` 在第一个位置添加元素，返回数组长度，改变原来数组；
		`arr.shift()` 删除数组第一个元素，返回被删除的元素，改变原来数组；
		`arr.join()` 接收一个参数作为分隔符，返回字符串形式，以分隔符分隔每个元素，默认逗号为分隔符，不改变原数组；
			`Array.prototype.join.call(‘abc’, ‘|’); // “a|b|c”`
		`arr.concat(arr2)` 合并多个数组，返回新数组，原数组不变；
			可以使用`.concat()`方法前拷贝数组；
		`arr.reverse()` 颠倒排列数组元素，返回改变后的数组，改变原数组；
		`arr.slice(start, end)` 提取数组一部分，返回新数组，原数组不变；参数如果是负数则倒着数`(-1)`即倒数第一个；
			通过`Array.prototype.slice.call({0:’a’,1:’b’,length:2})`来把类数组的对象转换成数组；
		`arr.splice(start, count, add1,add2,...)` 删除部分数组并添加新成员，返回被删除的数组，改变原来的数组；
		`arr.sort()` 数组排序，默认按照字典顺序，改变原数组；
			`[10111, 110, 111].sort(); // [10111,110,111]`
			`[10111, 110, 111].sort((a,b)=>{return a-b}); // [110,111,10111]`
		`arr.map()` 将所有成员依次传入参数函数，可选传入第二个参数来绑定回调函数内部的`this`，返回新数组，不改变原来数组；
			`.map()`不会跳过`undefined`,’null’，但是会跳过空位；
			参数函数有三个参数：
			`[1,2,3].map((elem,index,arr)=>{return elem*index}); // [0,2,6]`
			第二个参数绑定`this`：
			```
			var arr = [‘a’,’b’,’c’];
			[1,2].map(function(e) {
				return this[e];
			}, arr);	//[‘b’,’c’]
			```
		`arr.forEach()` 依次执行函数，和`.map()`很相似，参数一样，此方法为了操作数据并不是为了返回值，不改变原来数组；
			该方法无法中断执行，会跳过`undefined`,`null`但不跳过空位；
			`[,null,undefined,2].forEach((e)=>console.log(e)); // null  undefined  2`
		`arr.filter()` 方法过滤数组成员，返回满足条件的数组，不改变原来数组；
			`[1,2,3,4,5].filter((el,index,arr)=>{return el%2 ===0}); // [2,4]`
		`arr.some()` 方法返回布尔值，只要有一个成员返回`true`，该方法就返回`true`;
			空数组返回`false`;
		`arr.every()` 方法返回布尔值，所有成员都返回`true`，该方法才会返回`true`;
			空数组返回`true`;
		`arr.reduce()`和`arr.reduceRight()` 都是依次处理数组的每个成员，只是处理方向不同，返回最终累计的值；
			接收4个参数： 累计变量，当前变量，当前位置，原数组， 前两个是必须的；
			可以指定初始值：
			`[1,2,3,4,5].reduce((a,b)=>a+b,100); // 115`
			可以利用此方法找出字符串最长的数组成员：
			`function findLongest(arr) {
				return arr.reduce(function(longest, next) {
					return next.length>longest.length ? next : longest;
				}, ‘’);
			}`
		`arr.indexOf()` 返回第一次出现的位置，可选第二参数表示开始的位置，如果没有返回`-1`;
		`arr.lastIndexOf()` 返回最后一次出现的位置，可选第二个参数表示开始的地方（之后往左数），如果没有返回`-1`;
			前面上个方法都是采用`===`严格相等进行比较，所以不能搜索`NaN`（不等于自身）；
		由于很多数组方法返回的还是数组，所以可以链式使用：
			```
			var someArr = [
				{name: ‘MM’, email: ‘ttt@example.com’, age: 22},
				{name: ‘GG’, email: ‘xxx@example.com’, age: 11},
				{name: ‘SS’, email: ‘aaa@example.com’, age: 33}
			];
			someArr
			.map(e=>e.email)
			.filter(email=>/^t/.test(email))
			.forEach((item)=>console.log(item));
			// “ttt.example.com”
			```
- 包装对象：
	使用`new Number()`,`new String()`,`new Boolean()`可以把这三个原始数据包装成`Object`;
	实际上某些场合原始类型的值会自动当作包装对象调用：
		`’abc’.length; // 3`
		上面的`’abc’`并不是对象，但是可以调用`length`属性，说明JS自动将它转换为包装对象；
- Boolean对象：
	`Boolean`作为JS的3个包装对象之一，一定要区别前面是否有`new`关键字；
		`new Boolean(false) === Boolean(false); // false`
		`var b = new Boolean(true); typeof b // “object”`
- Number对象：
	同上，需要区分是否有`new`关键字；
		`Number(true); // 1`调用函数把`true`转换成数字类型`1`；
	静态属性：
		`Number.POSITIVE_INFINITY` 正的无限，指向`Infinity`;
		`Number.NEGATIVE_INFINITY` 负的无限，指向`-Infinity`;
		`Number.NaN` 非数值，指向`NaN`;
		`Number.MIN_VALUE`,`-Number.MIN_VALUE`;
		`Number.MAX_SAFE_INTEGER`,`Number.MIN_SAFE_INTEGER`；
	实例方法：
		`Number.prototype.toString()` 接收一个参数，返回数值为字符串形式；
			不能将其他进制的数字转换成十进制，需要用`parseInt()`方法；
		`Number.prototype.toFixed()` 接收一个参数表示小数位数，转换成小数形式返回字符串，注意四舍五入不定问题；
		`Number.prototype.toExponential()` 参数为小数位数，转换成科学计数法形式，返回字符串；
		`Number.prototype.toPrecision()` 参数有效数字位数，返回字符串；
- String对象：
	同上，注意`new`关键字；
	静态方法：
		`String.fromCharCode()` 参数是一个或多个数值，返回对应的Unicode，字符串形式；
			`String.fromCharCode(104,101,108,108,111); // “hello”`
	实例属性：
		`String.prototype.length` 返回长度；
	实例方法：
		`String.prototype.charAt()` 返回该位置字符,没有返回空字符；
			`’abc’.charAt(3); // “”`
		`String.prototype.charCodeAt()` 将字符转换成Unicode，负数或大于长度返回`NaN`；
		`String.prototype.concat()` 连接两个字符串，返回新的字符串，不改变原来字符串；
			`’a’.concat(‘b’, ‘c’); // “abc”`
			注意这两个的区别：
			`’’.concat(1, 2, ‘3’); // “123”`
			`1 + 2 + ‘3’; // “33”`
		`String.prototype.slice()` 返回切割字符串，参数可负，不改变；
		`String.prototype.substring()` 返回取出的字符串，不改变原来字符串；
			第一个参数是开始的位置，第二个参数的结束的位置；
			如果第二个参数大于第一个参数，则互换参数的位置；
			如果参参数是负的，则自动转为0；
			建议优先使用`slice`方法；	
		`String.prototype.substr()`取出字符串并返回，不改变原字符串；
			第一个参数是开始的位置，第二个参数是字符串长度；
			第一个参数如果是负数则表示倒数；
			第二个参数如果是负数则转换为0，结果为空字符串；
		`String.prototype.indexOf()` 第二个参数为开始的位置，返回第一个出现的位置，返回`-1`表示不匹配；
		`String.prototype.lastIndexOf()`同上，从尾部开始；
		`String.prototype.trim()` 去掉字符串两端的空格，返回新的字符串，不改变原字符串；
		`String.prototype.toLowerCase()`全部转为小写；
		`String.prototype.toUpperCase()`全部转为大写；
		`String.prototype.match()` 确定原字符串是否匹配某字符串，返回一个数组，成员为第一个匹配的字符串；
			没找到匹配返回`null`;
			返回的数组有`index`属性表示匹配字符串开始位置和`input`属性表示原始字符串；
			可以使用正则表达式作为参数；
		`String.prototype.search()` 返回匹配的第一个位置，返回`-1`表示没找到，可用正则；
		`String.prototype.replace(‘a’, ‘b’)`替换匹配的字符串，一般只替换第一个匹配，可用正则；
		`String.prototype.split()`返回分割后字符串组成的数组，可正则，第二个参数为数组最大成员数;
			如果参数为空字符串`’ ’`则返回每个字符组成的数组；
			如果参数为空，则返回唯一成员是原字符串的数组；
			如果满足分割规则两部分紧挨着，则中间返回空数组成员；
				`’a||b|c’.split(‘|’); // [“a”, “”, “b”, “c”]`
			开头或者结尾也返回空数组成员；
		`String.prototype.localeCompare()` 比较两个字符串，`0`表示相等，`1`表示第一个大，`-1`表示第一个小；
			最大的特点是使用自然语言顺序，并不使用Unicode做比较；
			第二个参数可以选择语言，默认英语；
- Math对象：
	静态属性：
		`Math.E`: 常量`e`;
		`Math.LN2` 2的自然对数；
		`Math.LN10` 10的自然对数；
		`Math.LOG2E` 以2为底的`e`的对数；
		`Math.LOG10E` 以10为底的`e`的对数；
		`Math.PI` 常量`3.1415926..`
		`Math.SQRT1_2` 0.5的平方根；
		`Math.SQRT2` 2的平方根；
	静态方法：
		`Math.abs()` 取绝对值；
		`Math.ceil()` 向上取整，`Math.ceil(1.5); // 2`；
		`Math.floor()` 向下取整，`Math.floor(1.5); // 1`；
		`Math.max()` 返回最大值，没有参数则`-Infinity`，任意参数不能转换成数值则`NaN`；
			可以配合`.apply()`来找出数组最大的值；
			`Math.max.apply(null, [1,2,3,4]); // 4`
		`Math.min()` 返回最小值， 没有参数则`Infinity`，同上；
		`Math.round()` 四舍五入，注意负数.5： `Math.round(-1.5); // -1`；
		`Math.pow()` 返回以第一个参数为底，第二个参数为幂的指数值；
			`Math.pow(2, 3); // 8`
		`Math.sqrt()` 返回参数的平方根，参数为负数则返回`NaN`;
		`Math.log()` 返回以`e`为底的自然对数；
		`Math.exp()` 返回以常数`e`的参数次方；
		`Math.random()` 返回0到1之间的伪随机数，不包括1；
		`Math.sin()`,`Math.cos()`,`Math.tan()`,`Math.asin()`,`Math.acos()`,`Math.atan()`;
- Date对象：
	普通函数的用法：
		`Date()` 返回当前时间的字符串，无视参数；
	构造函数的用法：
		`new Date()` 接收各种格式的参数，下面三个日期一样；
			参数是负数表示1970年元旦之前；
			`new Date(1378218728000);`
			`new Date(‘January 6, 2013’);`
			`new Date(2013, 0, 1, 0, 0, 0, 0);`
		`Date.prototype.toString()` 返回字符串；
		`Date.prototype.toLocaleString()` 完整的本地时间；
		`Date.prototype.toLocaleDateString()` 本地日期；
		`Date.prototype.toLocaleTimeString()` 本地时间，不包含年月日；
		`date.get***()` 有很多`get`的方法得到`date`的值；
		`date.set***()` 也有很多`set`的方法设置`date`对象的值；
- RegExp对象：
	规则太多，先跳过；
- JSON对象：
	JavaScript Object Notation，书写简单一目了然；
	只有数组和对象可以复合，必须使用双引号，键名必须放在双引号里，最后没有逗号；
	JSON对象静态方法：
		`JSON.stringify()` 返回字符串形式的JSON格式，所有原始类型字符串都内层带双引号；
			可以接受3个参数，第一个
			`JSON.stringify(‘false’); // “”false””`
			方便还原的时候告诉JS，这个是字符串并不是布尔值；
			`undefined`，函数，XML对象，属性被过滤；
			不能转换的都变成`null`;
		`JSON.parse()` 将JSON字符串转换成对应的值；
			可以接受2个参数，第二个为处理函数；
		

## 面向对象编程
- 
			

	
































