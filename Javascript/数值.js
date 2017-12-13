/*********************** 数值********************/
//1.JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。

/*2.根据国际标准 IEEE 754，JavaScript 浮点数的64个二进制位，从最左边开始，是这样组成的。
	第1位：符号位，0表示正数，1表示负数
	第2位到第12位：指数部分
	第13位到第64位：小数部分（即有效数字）
	精度最多只能到53个二进制位，这意味着，绝对值小于2的53次方的整数，即-(253-1)到253-1，都可以精确表示。

	JavaScript 能够表示的数值范围为21024到2-1023（开区间），超出这个范围的数无法表示。
	如果指数部分等于或超过最大正值1024，JavaScript 会返回Infinity（关于Infinity的介绍参见下文），这称为“正向溢出”；如果等于或超过最小负值-1023（即非常接近0），JavaScript 会直接把这个数转为0，这称为“负向溢出”。

	JavaScript 的数值有多种表示方法，可以用字面形式直接表示，比如35（十进制）和0xFF（十六进制）。
	数值也可以采用科学计数法表示，下面是几个科学计数法的例子。
	123e3 // 123000
	123e-3 // 0.123
	-3.1E+12
	.1e-23
	科学计数法允许字母e或E的后面，跟着一个整数，表示这个数值的指数部分。

	十进制：没有前导0的数值。
	八进制：有前缀0o或0O的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。
	十六进制：有前缀0x或0X的数值。
	二进制：有前缀0b或0B的数值。
*/

//3.NaN是 JavaScript 的特殊值(number)，表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错的场合。
//	NaN不等于任何值，包括它本身。

/*4.Infinity表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非0数值除以0，得到Infinity。
	isFinite函数返回一个布尔值，检查某个值是不是正常数值，而不是Infinity。
*/

/*5.与数值相关的全局方法
	parseInt方法用于将字符串转为整数。
	parseFloat方法用于将一个字符串转为浮点数。
*/

