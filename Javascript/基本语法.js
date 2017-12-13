/***************JavaScript基本语法****************/

//1.语句 JavaScript程序的执行单位为(line),也就是一行一行的执行。
var a = 1 + 3;		//用bar命令声明了变量,然后将1+3的运算结果赋值给变量a
console.log(a);

//2.变量 变量是对"值"的引用,使用变量等同于引用一个值。每一个变量都有一个变量名
var a;			//var是变量声明命令。它表示通知解释引擎，要创建一个变量a
a = 1;			//如果只是声明变量而没有赋值，则该变量的值是undefined(JavaScript关键字，表示无定义)。
				//不写var命令，不利于表达意图，而且容易不知不觉的创建全局变量，所以建议总是使用var命令声明变量

/*变量提升 JavaScript引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行的运行。造成的结果就是所有的变量的声明语句
都会被提升到代码的头部，这就叫做变量提升。
*/
console.log(b);			//不会出错,解析后顺序 var b; console.log(b); b=1;
var b;
b = 1;			

//3.标识符		是用来识别具体对象的一个名称。最常见的标识符就是变量名和函数名。JavaScript语言的标识符对大小写敏感，所以a和A是两个不同的标识符
/*标识符命名规则：
第一个字符,可以是任意Unicode字母(包括英文字母和其他语言的字母),以及美元符号($)和下划线(_)
第二个字符，除了Unicode字母,美元符号和下划线还可以用数字0-9
*/
//中文是合法的标识符,可以用作变量名
/*
JavaScript有一些保留字，不能用作标识符：
arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。
另外，还有三个词虽然不是保留字，但是因为具有特别含义，也不应该用作标识符：Infinity、NaN、undefined。
*/

//4.注释 源码中被JavaScript引擎忽略的部分就叫做注释，它的作用是对代码进行解释。Javascript提供两种注释：一种是单行注释，用//起头；另一种是多行注释，放在/* 和 */之间。由于历史上JavaScript兼容HTML代码的注释，所以<!--和-->也被视为单行注释。

//5.区块 JavaScript使用大括号，将多个相关的语句组合在一起，称为"区块"(block)
/*
与大多数编程语言不一样，JavaScript的区块不构成单独的作用域(scope)。区块中的变量与区块外的变量，属于同一个作用域
{
	var a = 1;
}

a 	//1

单独使用的区块在JavaScript中意义不大，很少出现。区块往往用来构成其他更复杂的语法结构，比如for、if、while、function等。
*/


//6.条件语句	条件语句提供一种语法构造，只有满足某个条件，才会执行相应的语句。JavaScript提供if结构和switch结构完成条件判断。
/*
if(expression)
	statement;
		或者
if(expression) statement;
注意，if后面的表达式，不要混淆“赋值表达式”（=）与“严格相等运算符”（===）或“相等运算符”（==）。因为，“赋值表达式”不具有比较作用。

var x = 1;
var y = 2;
if (x = y) {
  console.log(x);
}
// "2"
上面代码的原意是，当x等于y的时候，才执行相关语句。但是，不小心将“严格相等运算符”写成“赋值表达式”，结果变成了将y赋值给x，然后条件就变成了，变量x的值（等于2）自动转为布尔值以后，判断其是否为true。

这种错误可以正常生成一个布尔值，因而不会报错。为了避免这种情况，有些开发者习惯将常量写在运算符的左边，这样的话，一旦不小心将相等运算符写成赋值运算符，就会报错，因为常量不能被赋值。
if (x = 2) { // 不报错
if (2 = x) { // 报错
*/

/*
if(){
	...	
}
elseif(){
	...
}
else{
	...
}	结构

switch(x){
	case A:
		...
	case B:
		...
	default:
		...
}
*/

//三元运算符 ? :  (condition) ? expr1:expr2  if(condition) expr1 else expr2

//7.循环语句
/*
	1.while(expression) statement;
	2.for(initialize; test; increment) statement;
		初始化表达式（initialize）：确定循环的初始值，只在循环开始时执行一次。
		测试表达式（test）：检查循环条件，只要为真就进行后续操作。
		递增表达式（increment）：完成后续操作，然后返回上一步，再一次检查循环条件。
		for语句的三个部分（initialize，test，increment），可以省略任何一个，也可以全部省略。
	3.do statement while(expression)
*/

//break语句和continue语句	break语句和continue语句都有跳转作用，可以让代码不按既有的顺序执行
/*标签(label) JavaScript语言允许，语句的前面有标签(label),相当于定位符，用于跳转到程序的任意位置。
标签通常与break语句和continue语句配合使用，跳出特定的循环
top:
	for(var i=0; i<3; i++){
		for(var j=0; j<3; j++){
			if(i===1 && j===1) break top;
			console.log('i=' + i + ', j=' + j);
		}
	}
上面代码为一个双重循环区块，break命令后面加上了top标签（注意，top不用加引号），满足条件时，直接跳出双层循环。如果break语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。

top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) continue top;
      console.log('i=' + i + ', j=' + j);
    }
  }
上面代码中，continue命令后面有一个标签名，满足条件时，会跳过当前循环，直接进入下一轮外层循环。如果continue语句后面不使用标签，则只能进入下一轮的内层循环。 
*/

