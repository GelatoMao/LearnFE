// 基于数组 和 链表 两种方式实现

// 封装队列类 基于数组实现
function Queue() {
  // 属性
  this.items = []
  // 方法
  // 1.将元素加入到队列中
  Queue.prototype.enqueue = function (element) {
    this.items.push(element)
  }
  // 2.从队列中删除前端元素
  Queue.prototype.dequeue = function () {
    return this.items.shift()
  }
  // 3.查看前端的元素
  Queue.prototype.front = function () {
    return this.items[0]
  }
  // 4.查看队列是否为空
  Queue.prototype.isEmpty = function () {
    return this.items.length === 0
  }
  // 5.查看队列中元素的个数
  Queue.prototype.size = function () {
    return this.items.length
  }
  // 6.toString()方法
  Queue.prototype.toString = function () {
    let resultString = ''
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ' '
    }
    return resultString
  }
}

// 使用队列
let queue = new Queue()
// 将元素加入队列
queue.enqueue('abc')
queue.enqueue('cba')
queue.enqueue('nba')
queue.enqueue('mba')
console.log(queue) // Queue { items: [ 'abc', 'cba', 'nba', 'mba' ] }

// 从队列中删除元素
queue.dequeue()
console.log(queue) // Queue { items: [ 'cba', 'nba', 'mba' ] }
queue.dequeue()
console.log(queue) // Queue { items: [ 'nba', 'mba' ] }

console.log(queue.front()) // nba
console.log(queue.isEmpty()) // false
console.log(queue.size()) // 2



// 队列应用 击鼓传花 js异步中的任务队列 计算最近请求次数

//击鼓传花
function passGame(nameList, num) {
  // 1.创建一个队列结构
  let queue = new Queue()
  // 2.将所有人依次加入到队列中
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  // 3.开始数数字，不是num的时候，重新加入到队列末尾，是num这个数字的时候，将其从队列中删除
  while (queue.size() > 1) {
    // 3.1 num数字之前的人重新放入到队列的末尾
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    // 3.2 num对应这个人 直接从队列中删除
    queue.dequeue()
  }
  // 4.获取最终剩下的人
  console.log(queue.size()) // 1
  let endName = queue.front()
  console.log('最终剩下的人是:' + endName) // 最终剩下的人是:d
  return nameList.indexOf(endName) // 3
}

// 测试
names = ['a', 'b', 'c', 'd', 'e']
console.log(passGame(names, 3))


//最近请求次数 力扣933

/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function () {
  this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  // 新请求入队
  this.queue.push(t)
  // 将不在请求范围内的移出队列
  while (this.queue[0] < t - 3000) {
    this.queue.shift()
  }
  return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end





