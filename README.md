# Javascript `#`
## markdown语法测试 `##`
###### 基本用法 `######`
|作者|E-mail|性别|
|---|---|---|
|Hunter|389317109@qq.com|男|

## 目录
* [Styling](#Styling)
* [高亮文本](#高亮文本)
	* [这是个三级标题](#这是个三级标题)
	* [这是另一个三级标题](#这是另一个三级标题)
* [表格](#表格)
	* [基本用法](#基本用法)
	* [嵌入图片](#嵌入图片)
	

## Styling
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

换行记得在行后添加两个空格。  
**Some bold text here.** `** **`  
*Some italic text here.* `* *`  
~~Some strickthrough text here.~~ `~~ ~~`  
`这些语法可以嵌套使用。 `  
像上面的是使用  
`一个反引符号使得文字高亮。`
## 高亮文本
	行开头添加1个Tab或者4个空格可以达到单行高亮。
三个反引号可以达到多行高亮：
```
这里是高亮区域行1  
使用的是三个反引号
这里是高亮区域行3
```
### 这是个三级标题  
编程语言的名字放在三个反引号后面即加入了语言的文本高亮。  
```JavaScript
document.getElementById(“SomeID”).innerHTML = “Welcome to the Home!” // JavaScript
```

### 这是另一个三级标题

## 表格
### 基本用法

| 左对齐 | 居中 | 右对齐 |
| :--- | :---: | ---: |
|表头下面|有一行横线|标示|
|表格内可以|**加粗**|*倾斜*|
|或者~~删除线~~|可以|混合使用|

### 嵌入图片
图片的基本书写格式：  
`![alt](URL title)`  
例如：  
![baidu](http://www.baidu.com/img/bdlogo.gif "百度logo")  

另一种写法需要提前写好标识符，在末尾有写：  
`[GGLogo]:https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png`  
![][GGLogo]  
嵌入图片例子： 
 
|图片|描述|
|---|---|
|![百度][BaiduLogo]|短写的方法显示百度Logo|





--------------------------------
[BaiduLogo]:http://www.baidu.com/img/bdlogo.gif
[GGLogo]:https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png