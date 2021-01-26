// 封装单向链表类
function LinkedList() {
  // 内部的类：节点类
  function Node(data) {
    this.data = data
    this.next = null
  }

  // 属性
  this.head = null
  this.length = 0

  // 1. append方法 向链表尾部添加数据
  LinkedList.prototype.append = function (data) {
    let current = this.head
    // 1.1 创建新的节点
    let newNode = new Node(data)
    // 1.2 判断添加的是否是第一个节点
    // 是第一个节点
    if (this.length === 0) {
      this.head = newNode
    } else {
      // 找到最后一个节点  
      while (current.next) {
        current = current.next
      }
      // 最后节点的next指向新节点
      current.next = newNode
    }
    this.length++
  }

  // 2. toString方法 由于列表项使用了Node类 需要重写继承自JS对象默认的toString方法 让其只输出元素的值
  LinkedList.prototype.toString = function () {
    // 2.1 定义变量
    let current = this.head, listString = ''
    while (current) {
      listString += current.data + ' '
      current = current.next
    }
    return listString
  }

  // 3. insert方法 向链表特定位置插入一个新的项 注意和append进行区分
  LinkedList.prototype.insert = function (position, data) {
    // 3.1 对position进行越界判断
    if (position < 0 || position > this.length) return false
    let current = this.head
    // 3.2 根据data创建newNode
    let newNode = new Node(data)
    // 3.3 判断插入的位置是否是第一个
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let index = 0, previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous.next = newNode
    }
    // 3.4 长度加1
    this.length++
    return true
  }

  // 4. get方法 获取对应位置的元素
  LinkedList.prototype.get = function (position) {
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
  LinkedList.prototype.indexOf = function (data) {
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
  LinkedList.prototype.update = function (position, newData) {
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
  LinkedList.prototype.removeAt = function (position) {
    // 7.1 越界判断
    if (position < 0 || position >= this.length) return false
    let current = this.head
    // 7.2 判断是否删除的是第一个节点
    if (position === 0) {
      this.head = this.head.next
    } else {
      let index = 0, previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      // 前一个节点的next指向current的next即可
      previous.next = current.next
    }
    // 7.3 长度减一
    this.length--
    return current.data
  }

  // 8. remove 从链表中移除一项
  LinkedList.prototype.remove = function (data) {
    // 8.1 获取data在链表中的位置
    let position = this.indexOf(data)
    // 8.2 根据位置信息删除节点
    return this.removeAt(position)
  }

  // 9. isEmpty
  LinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }

  // 10. size
  LinkedList.prototype.size = function () {
    return this.length
  }

}



// 测试代码
let list = new LinkedList()
list.append('abc')
list.append('cba')
list.append('nba')
console.log(list.toString()) // abc cba nba 

list.insert(0, 'a')
list.insert(3, 'b')
list.insert(5, 'c')
console.log(list.toString()) // a abc cba b nba c 

console.log(list.get(0)) // a
console.log(list.get(3)) // b
console.log(list.get(5)) // c

console.log(list.indexOf('abc')) // 1
console.log(list.indexOf('b')) // 3

console.log(list.toString()) // a abc cba b nba c 
list.update(0, 'm')
list.update(3, 'n')
console.log(list.toString()) // m abc cba n nba c

console.log(list.removeAt(0)) // m
console.log(list.removeAt(3)) // nba
console.log(list.toString()) // abc cba n c 

console.log(list.remove('cba')) // cba
console.log(list.remove('c')) // c
console.log(list.toString()) // abc n

console.log(list.isEmpty()) // false
console.log(list.size()) // 2



// 力扣 237
/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

/**
 * 
 * 常规链表删除的话是找到被删除节点的上个节点，将上个节点的next指针指向被删除节点的下一个结点就OK了，但是这题无法获取被删除节点的上一个节点。可以删除要删除节点的下一个结点，但是在删除下一个结点前将下一个结点的值转移到现在的结点上，假设想删除链表上的1，那么可以将下一个节点值9赋值给1，再将9删除
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};
// @lc code=end


// 力扣 206
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 使用双指针一前一后遍历链表 再反转双指针 n+1的next指向n
var reverseList = function (head) {
  let p1 = head, p2 = null
  while (p1) {
    const tmp = p1.next
    p1.next = p2
    p2 = p1
    p1 = tmp
  }
  return p2
};
// @lc code=end



// 力扣 2
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode()
  let p1 = l1, p2 = l2, p3 = l3, carry = 0
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0
    const v2 = p2 ? p2.val : 0
    const val = v1 + v2 + carry
    // 获取个位数上的数据以便加给下一位数
    carry = Math.floor(val / 10)
    p3.next = new ListNode(val % 10)
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    p3 = p3.next
  }
  // 考虑链表最后一位相加有进位的情况
  if (carry) {
    p3.next = new ListNode(carry)
  }
  return l3.next
};
// @lc code=end


// 力扣 83
/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 链表是有序的 重复元素一定相邻 遍历链表如果当前元素值和下* 一个元素值相同 就删除下个元素
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let p = head
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next
    } else {
      // 这边的p=p.next判断语句一定是写在else语句里面，如果写在外面的话，假设当前有3个重复的元素，当当前的元素的指针指向下下个元素的时候，之后自己又指向了下下个元素，相当于漏掉了自己 需要确保前后完全不一样的情况才可以下移
      p = p.next
    }
  }
  return head
};
// @lc code=end

// 力扣 141
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 用一快一慢两个指针遍历链表 如果指针能够相遇 则有环
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let p1 = head
  let p2 = head
  while (p1 && p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) {
      return true
    }
  }
  return false
};
// @lc code=end






