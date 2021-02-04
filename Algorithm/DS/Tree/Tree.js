// 封装二叉搜索树 左侧节点存储比父节点小的值 在右侧节点存储比父节点大或者等于的值 

function BinarySearchTree() {

  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  // 属性
  this.root = null

  // 方法
  // 插入数据
  BinarySearchTree.prototype.insert = function (key) {
    // 1. 根据key创建节点
    let newNode = new Node(key)
    // 2. 判断根节点是否有值
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    // 向左查找
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else { // 向右查找
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }


  // 树的遍历 都是用的递归写法 有空补非递归

  // 1. 先序遍历 接收一个handler回调函数作为参数 该回调函数用来定义对遍历到的每个节点进行的操作 访问者模式
  BinarySearchTree.prototype.preOrderTraverse = function (handler) {
    this.preOrderTraverseNode(this.root, handler)
  }
  BinarySearchTree.prototype.preOrderTraverseNode = function (node, handler) {
    if (node !== null) {
      handler(node.key)
      this.preOrderTraverseNode(node.left, handler)
      this.preOrderTraverseNode(node.right, handler)
    }
  }

  // 2. 中序遍历
  BinarySearchTree.prototype.midOrderTraverse = function (handler) {
    this.midOrderTraverseNode(this.root, handler)
  }
  BinarySearchTree.prototype.midOrderTraverseNode = function (node, handler) {
    if (node !== null) {
      this.midOrderTraverseNode(node.left, handler)
      handler(node.key)
      this.midOrderTraverseNode(node.right, handler)
    }
  }

  // 3. 后序遍历
  BinarySearchTree.prototype.postOrderTraverse = function (handler) {
    this.postOrderTraverseNode(this.root, handler)
  }
  BinarySearchTree.prototype.postOrderTraverseNode = function (node, handler) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, handler)
      this.postOrderTraverseNode(node.right, handler)
      handler(node.key)
    }
  }

  // 寻找最值

  // 寻找最大值 BST中最右侧的节点
  BinarySearchTree.prototype.getMax = function () {
    let node = this.root, key = null
    // 依次向右不断查找 直到节点为null
    while (node !== null) {
      key = node.key
      node = node.right
    }
    return key
  }

  // 寻找最小值 BST中最左侧的节点
  BinarySearchTree.prototype.getMin = function () {
    let node = this.root, key = null
    // 依次向左不断查找 直到节点为null
    while (node !== null) {
      key = node.key
      node = node.left
    }
    return key
  }

  // 搜索特定的值
  BinarySearchTree.prototype.search = function (key) {
    let node = this.root
    while (node !== null) {
      if (key < node.key) {
        node = node.left
      } else if (key > node.key) {
        node = node.right
      } else {
        return true
      }
    }
    return false
  }

  // 删除节点
  /**
   * 删除节点首先需要查找到要删除的节点，找到节点后，需要考虑三种情况：
   * 该节点没有子节点
   * 该节点有一个子节点
   * 该节点有两个子节点
   */
  BinarySearchTree.prototype.remove = function (key) {
    // 1.寻找要删除的节点
    // 1.1 定义变量 保存一些信息 
    // current记录当前节点 parent记录当前节点的父节点 isLeftChild记录当前节点是否是父节点的左节点
    let current = this.root, parent = null, isLeftChild = true
    // 1.2 寻找要删除的节点
    while (current.key !== key) {
      parent = current
      if (key < current.key) {
        isLeftChild = true
        current = current.left
      } else {
        isLeftChild = false
        current = current.right
      }
      // 已经找到了最后的节点 依然没有找到key的情况
      if (current === null) return false
    }
    // 2.根据对应的情况删除节点
    // 找到key的情况
    // 2.1 删除的节点没有子节点
    if (current.left === null && current.right === null) {
      // 删除的节点是根节点
      if (current === this.root) {
        this.root = null
      } else if (isLeftChild) { // 删除节点是左叶子节点
        parent.left = null
      } else {
        parent.right = null
      }
    } else if (current.right === null) { // 2.2 删除的节点有一个子节点
      // 补上考虑current是根的情况 一开始没有考虑 下次要注意！！！！
      if (current === this.root) {
        this.root = current.left
      } else if (isLeftChild) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right
      } else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    } else { // 2.3 删除的节点有两个子节点
      // 1. 获取后继节点
      let successor = this.getSuccessor(current)
      // 2. 判断当前节点是否是根
      if (current === this.root) {
        this.root = successor
      } else if (isLeftChild) {
        parent.left = successor
      } else {
        parent.right = successor
      }
      // 3.将删除节点的左子树赋值给successor
      successor.left = current.left
    }
    return true
  }

  // 找后继的方法
  /**
   * 当删除节点有2个子节点的时候
   * 要么在左子树中找最大值赋给该节点
   * 要么在右子树中找最小值赋给该节点
   * 总结就是找与删除节点最接近的节点
   * 这边采取在右子树中找最小值的方法 
   */
  BinarySearchTree.prototype.getSuccessor = function (delNode) {
    // 1.定义变量 保存找到的后继
    let successor = delNode, current = delNode.right, successorParent = delNode
    // 2.循环查找
    while (current !== null) {
      successorParent = successor
      successor = current
      current = current.left
    }
    // 3.判断寻找到的后继节点是否直接就是delNode的right节点
    if (successor !== delNode.right) {
      // 这边有点难理解 画图！！！
      successorParent.left = successor.right
      successor.right = delNode.right
    }
    return successor
  }
}


// 测试
let bst = new BinarySearchTree()

// 插入数据
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)

// 测试遍历
let resultStr = ''
bst.preOrderTraverse(function (key) {
  resultStr += key + ' '
})
console.log(resultStr)  // 11 7 5 3 9 8 10 15 13 12 14 20 18 25 

resultStr = ''
bst.midOrderTraverse(function (key) {
  resultStr += key + ' '
})
console.log(resultStr)  // 3 5 7 8 9 10 11 12 13 14 15 18 20 25 

resultStr = ''
bst.postOrderTraverse(function (key) {
  resultStr += key + ' '
})
console.log(resultStr)  // 3 5 8 10 9 7 12 14 13 18 25 20 15 11 

console.log(bst.getMax()) // 25
console.log(bst.getMin()) // 3

console.log(bst.search(25)) // true
console.log(bst.search(24)) // false
console.log(bst.search(2)) // false

// 测试删除代码
bst.remove(12)
resultStr = ''
bst.postOrderTraverse(function (key) {
  resultStr += key + ' '
})
console.log(resultStr) // 3 5 8 10 9 7 14 13 18 25 20 15 11 

bst.remove(5)
resultStr = ''
bst.postOrderTraverse(function (key) {
  resultStr += key + ' '
})
console.log(resultStr) // 3 8 10 9 7 14 13 18 25 20 15 11

bst.remove(15)
resultStr = ''
bst.postOrderTraverse(function (key) {
  resultStr += key + ' '
})
console.log(resultStr) // 3 8 10 9 7 14 13 25 20 18 11 
