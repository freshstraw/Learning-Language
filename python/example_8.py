#!/use/bin/env python
#-*- coding:utf-8 -*-

#列表生成式
#列表生成式即List Comprehensions，是Python内置的非常简单却强大的可以用来创建list的生成式。
print range(1, 11)

#但如果要生成[1x1, 2x2, 3x3, ..., 10x10]怎么做？方法一是循环：
L = []
for x in range(1, 11):
	L.append(x * x)
print L

#但是循环太繁琐，而列表生成式则可以用一行语句代替循环生成上面的list：
print [x * x for x in range(1, 11)]
#写列表生成式时，把要生成的元素x * x放到前面，后面跟for循环，就可以把list创建出来，十分有用，多写几次，很快就可以熟悉这种语法
#for循环后面还可以加上if判断，这样我们就可以筛选出仅偶数的平方：
print [x * x for x in range(1, 11) if x % 2 == 0]

#还可以使用两层循环，可以生成全排列：
print [m + n for m in 'ABC' for n in 'XYZ']

#运用列表生成式，可以写出非常简洁的代码。例如，列出当前目录下的所有文件和目录名，可以通过一行代码实现：
#导入os模块
#os.listdir可以列车文件和目录
import os
print [d for d in os.listdir('.')]

#在Python中，这种一边循环一边计算的机制，称为生成器（Generator）。
M = [x * x for x in range(10)]
print M

g = (x * x for x in range(10))
print g
#创建L和g的区别仅在于最外层的[]和()，L是一个list，而g是一个generator。
#我们可以直接打印出list的每一个元素，但我们怎么打印出generator的每一个元素呢
print g.next()
print g.next()

for n in g:
	print n

def fid(max):
	n, a, b = 0, 0, 1
	while n < max:
		yield b
		a, b = b, a + b
		n = n + 1
print fid

#这里，最难理解的就是generator和函数的执行流程不一样。函数是顺序执行，遇到return语句或者最后一行函数语句就返回。而变成generator的函数，在每次调用next()的时候执行，遇到yield语句返回，再次执行时从上次返回的yield语句处继续执行。
for n in fid(6):
	print n

