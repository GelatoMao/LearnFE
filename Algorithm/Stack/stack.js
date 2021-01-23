// 实现栈结构有2种常见的方式 一种是基于数组 一种是基于链表

// 基于数组实现
// 封装栈类 LIFO
function Stack() {
  // 栈中的属性
  this.items = []
  // 栈中的操作
  // 1.将元素压入栈
  Stack.prototype.push = function (element) {
    this.items.push(element)
  }
  // 2.从栈中取出元素
  Stack.prototype.pop = function () {
    return this.items.pop()
  }
  // 3.查看一下栈顶元素 不对栈做任何修改 不会移除栈顶元素 仅仅返回它
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1]
  }
  // 4.判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0
  }
  // 5.获取栈中元素个数
  Stack.prototype.size = function () {
    return this.items.length
  }
  // 6.toString方法 以字符串的形式返回
  Stack.prototype.toString = function () {
    let resultString = ''
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' '
    }
    return resultString
  }
  // 7.移除栈里所有元素
  Stack.prototype.clear = function () {
    this.items = []
  }
}

// 栈的调用
let s = new Stack()
s.push(20)
s.push(10)
s.push(100)
s.push(77)
console.log(s);   // Stack { items: [ 20, 10, 100, 77 ] }

s.pop()
s.pop()
console.log(s);  // Stack { items: [ 20, 10 ] }




// 栈的应用 需要后进先出的场景 十进制转二进制 判断字符串符号的括号是否有效 函数调用栈

// 1.十进制转二进制
function dec2bin(decNum) {
  // 1.定义栈对象
  const stack = new Stack()
  // 2.循环操作
  while (decNum > 0) {
    // 2.1 获取余数 放入栈中
    stack.push(decNum % 2)
    // 2.2 获取整除后的结果 作为下一次运算的数字
    decNum = Math.floor(decNum / 2)
  }
  // 3. 从栈中取出0和1
  let binaryString = ''
  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString
}

//测试10进制转2进制函数
console.log(dec2bin(100)); // 1100100
console.log(dec2bin(10)); // 1010
console.log(dec2bin(1000)); // 1111101000

//将十进制转化成任意进制
//将十进制转为二进制，余数是0或1；将十进制转为八进制时，余数是0到7之间的数；但是将十进制转为十六进制时，
//余数是0到9之间的数字加上A,B,C,D,E,F(对应10，11，12，13，14，15),所以需要对栈中的数字做转化
function baseConverter(decNum, base) {
  // 1.定义栈对象
  const stack = new Stack(), digits = '0123456789ABCDEF'
  let baseString = ''
  // 2.循环操作
  while (decNum > 0) {
    // 2.1 获取余数 放入栈中
    stack.push(decNum % base)
    // 2.2 获取整除后的结果 作为下一次运算的数字
    decNum = Math.floor(decNum / base)
  }
  // 3. 从栈中取出0和1
  while (!stack.isEmpty()) {
    baseString += digits[stack.pop()]
  }
  return baseString
}

console.log(baseConverter(100345, 2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9


// 2.判断字符串符号的括号是否有效 力扣20
// 扫描字符串，遇左括号入栈，遇到和栈顶括号类型匹配的右括号就出栈，类型不匹配直接判定不合法，最后栈空了就合法，否则不合法

/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //如果字符串是奇数位的话 那么肯定不能闭合
  if (s.length % 2 === 1) return false
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const a = s[i]
    if (a == '(' || a == '{' || a == '[') {
      stack.push(a)
    } else {
      const t = stack[stack.length - 1]
      if ((t === '(' && a === ')') || (t === '[' && a === ']') || (t === '{' && a === '}')) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length == 0
};
// @lc code=end





