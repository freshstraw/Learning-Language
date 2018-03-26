#!/use/bin/env python
#-*- coding:utf-8 -*-

#第一行注释是为了告诉Linux/OS X系统，这是一个Python可执行程序，Windows系统会忽略这个注释
#第二行注释是为了告诉Python解释器，按照UTF-8编码读取源代码，否则，你在源代码中写的中文输出可能会有乱码

a = 1000
print a

print u'你好啊'

#采用的格式化方式和C语言是一致的，用%实现
#输出格式化的字符串:
print 'Hello, %s' % 'world'

print 'Age:%s. Gender:%s' %(25, True)
#有些时候，字符串里面的%是一个普通字符怎么办？这个时候就需要转义，用%%来表示一个%：
print 'growth rate:%d %%' %7

