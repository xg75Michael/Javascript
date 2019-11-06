/*
var box = new Object(); // 创建一个 Object 对象
box.name = 'Michael'; // 添加一个属性
box.age = '28'; // 添加另一个属性
box.run = function() { // 添加一个方法
	return this.name + this.age + 'Running';
};
// this 表示 new Object() 实例化出来的对象
// this 指的是当前作用域的对象
alert(box.run()); // Michael28Running
alert(this.name); // '' (空)  window 下的 name 比较怪异
alert(this.age); // undefined  正常 window 下没声明过都会返回 undefined


var box = new Object();
box.name = 'Michael';
box.age = '28';
box.run = function() {
	return this.name + this.age + 'Running';
};
var box2 = new Object();
box2.name = 'XXXX';
box2.age = '111';
box2.run = function() {
	return this.name + this.age + 'Running';
};
alert(box.run()); // Michael28Running
alert(box2.run()); // XXXX111Running
// 上面的两个 box 和 box2 对象存在大量重复的代码



*/








// get down to 工厂模式
function createObj(name, age) {
	var obj = new Object(); // 创建对象
	obj.name = name; // 添加属性
	obj.age = age;
	obj.run = function() { // 添加方法
		return this.name + this.age + ' Running';
	}
	return obj; // 返回对象
}
var box = createObj('Michael', 28); // 创建第一个对象
var box2 = createObj('XXXX', 111); // 创建第二个对象
// alert(box.run()); // Michael28 Running
// alert(box2.run()); // XXXX111 Running
alert(typeof box);
alert(typeof box2);
alert(box instanceof Object);
alert(box2 instanceof Object);
// 都是 Object 类型，无法区分谁到底是谁的对象











































