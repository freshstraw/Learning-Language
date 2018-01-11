/**********************数据类型*********************/

/*1.六种数据类型：
	数值(number):整数和小数
	字符串(string):字符组成的文本
	布尔值(boolean):true和false两个特定值
	undefined:表示"未定义"或不存在，即由于目前没有定义，所以此处暂时没有任何值
	null:表示无值，此处的无值就是'无'的状态
	对象(object):各种值组成的集合
		对象又可以分成三个子类型:狭义的对象(object), 数组(array), 函数(function)
		狭义的对象和数组是两种不同的数据组合方式，而函数其实是处理数据的方法。JavaScript把函数当成一种数据类型，可以像其他类型的数据一样，进行赋值和传递，这为编程带来了很大的灵活性，体现了JavaScript作为“函数式语言”的本质。
*/

/*2.typeof运算符
	JavaScript有三种方法，可以确定一个值到底是什么类型。
		typeof运算符;
		instanceof运算符;
		Object.prototype.toString方法;

	typeof window // "object"
	typeof {} // "object"
	typeof [] // "object"
	typeof null // "object"
*/

/*3.下列运算符会返回布尔值：
	两元逻辑运算符： && (And)，|| (Or)
	前置逻辑运算符： ! (Not)
	相等运算符：===，!==，==，!=
	比较运算符：>，>=，<，<=

	如果JavaScript预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为false，其他值都视为true。
	undefined
	null
	false
	0
	NaN
	""或''（空字符串）
*/

