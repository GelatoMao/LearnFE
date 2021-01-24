// 优先级队列

// 封装优先级队列
function PriorityQueue() {
  // 封装内部类
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  // 封装属性
  this.items = []

  // 1.实现插入方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    // 1.1 创建QueueElement对象
    let queueElement = new QueueElement(element, priority)
    // 1.2 判断队列是否为空
    if (this.items.length === 0) {
      this.items.push(queueElement)
    } else {
      let added = false
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      // 如果没有添加
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }

  // 2.从队列中删除前端元素
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift()
  }
  // 3.查看前端的元素
  PriorityQueue.prototype.front = function () {
    return this.items[0]
  }
  // 4.查看队列是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0
  }
  // 5.查看队列中元素的个数
  PriorityQueue.prototype.size = function () {
    return this.items.length
  }
  // 6.toString()方法
  PriorityQueue.prototype.toString = function () {
    let resultString = ''
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i].element + '-' + this.items[i].priority + ' '
    }
    return resultString
  }
}

// 测试代码
let pq = new PriorityQueue()
pq.enqueue('abc', 111)
pq.enqueue('cba', 200)
pq.enqueue('nba', 50)
pq.enqueue('mba', 66)
console.log(pq.toString()) // nba-50 mba-66 abc-111 cba-200

