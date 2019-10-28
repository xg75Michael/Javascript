/*
var box = new Date('Oct 28 2019');
alert(box); // Mon Oct 28 2019 00:00:00 GMT+0800 (CST)
alert('toString: ' + box.toString()); // toString: Mon Oct 28 2019 00:00:00 GMT+0800 (CST)
alert('toLocaleString : ' + box.toLocaleString()); // toLocaleString : 10/28/2019, 12:00:00 AM
alert('valueOf : ' + box.valueOf()); // valueOf : 1572192000000


// 格式化方法
var box = new Date('Oct 28 2019');
alert(box.toDateString()); // Mon Oct 28 2019
alert(box.toTimeString()); // 00:00:00 GMT+0800 (CST)
alert(box.toLocaleDateString()); // 10/28/2019
alert(box.toLocaleTimeString()); // 12:00:00 AM
alert(box.toUTCString()); // Sun, 27 Oct 2019 16:00:00 GMT


// 组件方法
var box = new Date('Oct 28 2019 10:20:30');
// box.setTime(200);
alert(box.getTime()); // 1572229230000
// box.setFullYear(2018);
alert(box.getFullYear()); // 2019
// box.setMonth(10);
alert(box.getMonth() + 1); // 10  月份需要 +1 才是最终的月份
alert(box.getDate()); // 28  号
alert(box.getDay()); // 1  周一
alert(box.getHours()); // 10  点
alert(box.getMinutes()); // 20  分
alert(box.getSeconds()); // 30  秒
alert(box.getMilliseconds()); // 0  毫秒
// 所有方法都有UTC格式
// 比如 getUTCFullYear() , getUTCHours();
alert(box.getTimezoneOffset()); // -480  -8个小时



*/



var box = new Date();
alert(box.getFullYear() + '-' + (box.getMonth() + 1) + '-' + box.getDate() + ' ' + 
	box.getHours() + ':' + box.getMinutes() + ':' + box.getSeconds());
// 逐个调用时间， 个性化显示时间



















































