#!/use/bin/env python
#-*- coding:utf-8 -*-

#高级特性
#构造一个1, 3, 5, 7, ..., 99的列表
L = []
n = 1
while n <= 99:
	L.append(n)
	n = n + 2
print L

#切片
L2 = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']

#Python提供了切片（Slice）操作符，能大大简化操作。
#L[0:3]表示，从索引0开始取，直到索引3为止，但不包括索引3。即索引0，1，2，正好是3个元素。
print L2[0:3]
print L[1:2]

#可以通过切片轻松取出某一段数列。比如前10个数：
print L[:10]
#后10个数
print L[-10:]
#前11-20个数：
print L[10:20]

#前10个数，每两个取一个：
print L[:10:2]

#所有数，每5个取一个：
print L[::5]

#甚至什么都不写，只写[:]就可以原样复制一个list：
print L[:]

#字符串'xxx'或Unicode字符串u'xxx'也可以看成是一种list，每个元素就是一个字符。因此，字符串也可以用切片操作，只是操作结果仍是字符串：
print 'ABCDEFG'[:3]
print 'ABCDEFG'[::2]

