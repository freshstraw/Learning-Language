#!/use/bin/env python
#-*- coding:utf-8 -*-

#list and 
classmates = ['Li', 'Wang', "Yang"]
print classmates, len(classmates), classmates[0]

#tuple(没有append,insert方法)
classmates = ('Li', 'yang', 'wang')
print classmates[1], len(classmates)

#dict 和 set
#python内置了字典:dict的支持(字典 其他语言中称之为map),使用键-值(key_value)存储，具有极快的查找速度
d = {'Li':95, 'Wang':75, 'Yang':85}
print d['Wang']
#为什么dict查找速度这么快？因为dict的实现原理和查字典是一样的。假设字典包含了1万个汉字，我们要查某一个字，一个办法是把字典从第一页往后翻，直到找到我们想要的字为止，这种方法就是在list中查找元素的方法，list越大，查找越慢。
#第二种方法是先在字典的索引表里（比如部首表）查这个字对应的页码，然后直接翻到该页，找到这个字，无论找哪个字，这种查找速度都非常快，不会随着字典大小的增加而变慢。

#要避免key不存在的错误，有两种办法，一是通过in判断key是否存在：
print 'AAA' in d

#二是通过dict提供的get方法，如果key不存在，可以返回None，或者自己指定的value：
print d.get('AAA', -1)

#要删除一个key，用pop(key)方法，对应的value也会从dict中删除：
d.pop('Li')
print d

d['Hu'] = 67
print d 

#和list比较，dict有以下几个特点：

#查找和插入的速度极快，不会随着key的增加而增加；
#需要占用大量的内存，内存浪费多。
#而list相反：

#查找和插入的时间随着元素的增加而增加；
#占用空间小，浪费内存很少。
#所以，dict是用空间来换取时间的一种方法。

#set
#set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key。
s = set([1, 'b', 'a'])
print s

