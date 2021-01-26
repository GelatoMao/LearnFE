// 封装双向链表
function DoublyLinkedList() {
  // 内部类：节点类
  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }

  // 属性
  this.head = null
  this.tail = null
  this.length = 0

  // 常见方法
  // 1. append方法 向链表尾部添加数据
  DoublyLinkedList.prototype.append = function (data) {
    // 1.1 根据data创建节点
    let newNode = new Node(data)
    // 1.2 判断添加的是否是第一个节点
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  // 2. 将链表转成字符串
  // 2.1 toString方法
  DoublyLinkedList.prototype.toString = function () {
    return this.backwardString()
  }
  // 2.2 forwardString方法
  DoublyLinkedList.prototype.forwardString = function () {
    // 2.2.1 定义变量
    let current = this.tail, resultString = ''
    // 2.2.2 依次向前遍历 获取每个节点
    while (current) {
      resultString += current.data + ' '
      current = current.prev
    }
    return resultString
  }
  // 2.3 backwardString方法
  DoublyLinkedList.prototype.backwardString = function () {
    // 2.3.1 定义变量
    let current = this.head, resultString = ''
    // 2.3.2 依次向前遍历 获取每个节点
    while (current) {
      resultString += current.data + ' '
      current = current.next
    }
    return resultString
  }

  // 3. insert方法 向链表特定位置插入一个新的项 注意和append进行区分
  DoublyLinkedList.prototype.insert = function (position, data) {
    // 3.1 对position进行越界判断
    if (position < 0 || position > this.length) return false
    let current = this.head
    // 3.2 根据data创建newNode
    let newNode = new Node(data)
    // 3.3 判断原来的链表是否为空
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      // 3.4 判断position是否为0
      if (position === 0) {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      } else if (position === this.length) { // 3.5 插入末尾
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      } else {
        // 3.6 中间位置
        let index = 0
        while (index++ < position) {
          current = current.next
        }
        // 修改指针
        newNode.next = current
        newNode.prev = current.prev
        current.prev.next = newNode
        current.prev = newNode
      }
    }
    // 3.7 长度加1
    this.length++
    return true
  }

  // 4. get方法 获取对应位置的元素
  DoublyLinkedList.prototype.get = function (position) {
    // 4.1 越界判断
    if (position < 0 || position >= this.length) return null
    // 4.2 获取对应的data
    let current = this.head, index = 0
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }

  // 5. indexOf方法 返回元素在链表中的索引 如果没有则返回-1
  DoublyLinkedList.prototype.indexOf = function (data) {
    // 5.1 定义变量
    let current = this.head, index = 0
    // 5.2 依次查找
    while (current) {
      if (current.data === data) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  // 6. update方法 修改某个位置的元素
  DoublyLinkedList.prototype.update = function (position, newData) {
    // 6.1 越界判断
    if (position < 0 || position >= this.length) return false
    // 6.2 查找索引
    let current = this.head, index = 0
    while (index++ < position) {
      current = current.next
    }
    // 6.3 将position位置的node的data修改成newData
    current.data = newData
    return true
  }

  // 7. removeAt方法 从链表的特定位置移除一项
  DoublyLinkedList.prototype.removeAt = function (position) {
    // 7.1 越界判断
    if (position < 0 || position >= this.length) return false
    let current = this.head
    // 7.2 判断是否只有一个节点
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      // 7.3 长度大于1的情况下 删除第一个节点
      if (position === 0) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position === this.length - 1) { // 7.4 删除最后一个节点
        current = this.tail
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        // 7.5 删除中间节点
        let index = 0
        while (index++ < position) {
          current = current.next
        }
        // 删除节点 只要该结点没有被其他节点指向 即使它还指向其他节点 浏览器也会自动清除 不需要手动删除
        current.prev.next = current.next
        current.next.prev = current.prev
      }
    }
    // 7.6 长度减一
    this.length--
    return current.data
  }

  // 8. remove 从链表中移除一项
  DoublyLinkedList.prototype.remove = function (data) {
    // 8.1 获取data在链表中的位置
    let position = this.indexOf(data)
    // 8.2 根据位置信息删除节点
    return this.removeAt(position)
  }

  // 9. isEmpty
  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }

  // 10. size
  DoublyLinkedList.prototype.size = function () {
    return this.length
  }

  // 11. 获取链表第一个元素
  DoublyLinkedList.prototype.getHead = function () {
    return this.head.data
  }

  // 12. 获取链表最后一个元素
  DoublyLinkedList.prototype.getTail = function () {
    return this.tail.data
  }

}




// 测试代码
let list = new DoublyLinkedList()

list.append('a')
list.append('b')
list.append('c')

console.log(list)
/**
 * DoublyLinkedList {
  head: Node {
    data: 'a',
    prev: null,
    next: Node { data: 'b', prev: [Circular], next: [Node] }
  },
  tail: Node {
    data: 'c',
    prev: Node { data: 'b', prev: [Node], next: [Circular] },
    next: null
  },
  length: 3
}
 */
console.log(list.toString()) // a b c 
console.log(list.backwardString()) // a b c
console.log(list.forwardString()) // c b a 

list.insert(0, 'd')
list.insert(4, 'e')
list.insert(2, 'f')
console.log(list.toString()) // d a f b c e 

console.log(list.get(0)) // d
console.log(list.get(2)) // f
console.log(list.get(5)) // e

console.log(list.indexOf('a')) // 1
console.log(list.indexOf('b')) // 3
console.log(list.indexOf('e')) // 5

console.log(list.toString()) // d a f b c e 
list.update(0, 'g')
list.update(3, 'h')
console.log(list.toString()) // g a f h c e 

console.log(list.removeAt(1)) // a
console.log(list.toString()) // g f h c e 
console.log(list.removeAt(0)) // g
console.log(list.toString()) // f h c e 

console.log(list.remove('h')) // h
console.log(list.remove('e')) // e
console.log(list.toString()) // f c

console.log(list.isEmpty()) // false
console.log(list.size()) // 2

console.log(list.getHead()) // f
console.log(list.getTail()) // c






