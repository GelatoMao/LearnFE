/*
* Buffer定义
*    1.是一个【类似于数组】的对象，用于存储数据（存储的是二进制数据）
*    2.Buffer的效率很高，存储和读取很快，它是直接对计算机的内存进行操作
*    3.Buffer的大小一旦确定了，不可修改
*    4.每个元素占用内存的大小为1字节
*    5.Buffer是Node中的非常核心的模块，无需下载、无需引入,直接即可使用
* */

//创建一个Buffer的实例对象--------性能特别差------1.在堆里开辟空间  2.清理
let buf = new Buffer(10)
console.log(buf) // Buffer()这种方式因为安全性和稳定性的原因，已经弃用了
/**
 * <Buffer 00 00 00 00 00 00 00 00 00 00>
(node:72187) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
 */

//创建一个Buffer的实例对象--------性能比new Buffer()稍强一点------在堆中开辟一块空间(该块空间没有人用过)
let buf2 = Buffer.alloc(10)
console.log(buf2) // <Buffer 00 00 00 00 00 00 00 00 00 00>

//创建一个Buffer的实例对象-------性能最好的-------在堆里开辟空间
/*
* 1.输出的Buffer不是二进制 ----- 输出的是16进制，但是存储的是二进制，输出的时候会自动转16进制
* 2.输出的Buffer不为空 ----- 在堆里开辟空间，可能残留着别人用过的数据，所以allocUnsafe
* */
let buf3 = Buffer.allocUnsafe(10)
console.log(buf3) // <Buffer 38 96 02 03 01 00 00 00 00 00>

// 将数据存入一个Buffer实例
let buf4 = Buffer.from('hello world')
console.log(buf4) // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(buf4.toString()) // hello world
/*
* 1.输出结果不是存入的字符串 用户存储的不一定是字符串，可能是媒体类型的文件
* 2.如何能够让输出的东西是字符串(能看懂的) toString()
* */

