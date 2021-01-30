// 封装哈希表类
function HashTable() {
  // 属性
  this.storage = []
  /**
   * count 记录当前哈希表中已经存储了多少元素 后期需要用count值除以总长度来计算装载因子
   * loadFactor > 0.75 时 需要对数组进行扩容 loadFactor < 0.25 需要将数组变得小一点
   */
  this.count = 0
  this.limit = 7 // 数组当前的总长度

  // 方法

  // 哈希函数
  HashTable.prototype.hashFunc = function (str, size) {
    // 1. 定义hashCode变量
    let hashCode = 0, index = 0
    // 2. 霍纳算法 来计算hashCode的值
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    // 3. 取余操作
    index = hashCode % size
    return index
  }

  // 插入&修改操作
  HashTable.prototype.put = function (key, value) {
    // 1. 根据key值获取对应的index值
    const index = this.hashFunc(key, this.limit)
    // 2. 根据index值取出对应的bucket
    let bucket = this.storage[index]
    // 3. 判断该bucket是否为null  这边不能用全等？
    if (bucket == null) {
      bucket = []
      this.storage[index] = bucket
    }
    // 4. 判断是否是修改数据
    let tuple = null
    for (let i = 0; i < bucket.length; i++) {
      tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value
        return
      }
    }
    // 5. 进行添加操作
    bucket.push([key, value])
    this.count++

    // 6. 判断是否需要扩容操作
    if (this.count > this.limit * 0.75) {
      const newSize = this.limit * 2
      const newPrime = this.getPrime(newSize)
      this.resize(newPrime)
    }
  }

  // 获取操作
  HashTable.prototype.get = function (key) {
    // 1. 根据key值获取对应的index值
    const index = this.hashFunc(key, this.limit)
    // 2. 根据index值取出对应的bucket
    let bucket = this.storage[index]
    // 3. 判断该bucket是否为null
    if (bucket === null) return null
    // 4. 有bucket就进行线性查找
    let tuple = null
    for (let i = 0; i < bucket.length; i++) {
      tuple = bucket[i]
      if (tuple[i] === key) return tuple[1]
    }
    // 5. 依旧没有找到 返回null
    return null
  }

  // 删除操作
  HashTable.prototype.remove = function (key) {
    // 1. 根据key值获取对应的index值
    const index = this.hashFunc(key, this.limit)
    // 2. 根据index值取出对应的bucket
    let bucket = this.storage[index]
    // 3. 判断该bucket是否为null
    if (bucket === null) return null
    // 4. 有bucket 就进行线性查找 并且删除
    let tuple = null
    for (let i = 0; i < bucket.length; i++) {
      tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count--
        // 缩小容量
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          const newSize = Math.floor(this.limit / 2)
          const newPrime = this.getPrime(newSize)
          this.resize(newPrime)
        }
        return tuple[1]
      }
    }
    // 5. 依旧没有找到 返回null
    return null
  }

  // 判断哈希表是否为null
  HashTable.prototype.isEmpty = function () {
    return this.count === 0
  }

  // 获取哈希表中元素的个数
  HashTable.prototype.size = function () {
    return this.count
  }

  // 哈希表扩容
  HashTable.prototype.resize = function (newLimit) {
    // 1. 保存旧的数组内容
    const oldStorage = this.storage
    // 2. 重置所有属性
    this.storage = []
    this.count = 0
    this.limit = newLimit
    // 3. 遍历oldStorage中的所有bucket
    let bucket = null, tuple = null
    for (let i = 0; i < oldStorage.length; i++) {
      bucket = oldStorage[i]
      if (bucket === null) continue
      // 如果bucket有数据 则取出数据重新插入
      for (let j = 0; j < bucket.length; j++) {
        tuple = bucket[j]
        this.put(tuple[0], tuple[1])
      }
    }
  }

  // 判断某个数字是否是质数
  HashTable.prototype.isPrime = function (num) {
    const temp = parseInt(Math.sqrt(num))
    for (let i = 2; i <= temp; i++) {
      if (num % i === 0) return false
    }
    return true
  }

  HashTable.prototype.getPrime = function (num) {
    while (!this.isPrime(num)) num++
  }
}


// 测试哈希表
let ht = new HashTable()

// 插入数据
ht.put('abc', '123')
ht.put('cba', '321')
ht.put('nba', '521')
ht.put('mba', '520')

console.log(ht.get('abc')) // 123

// 修改方法
ht.put('abc', '111')
ht.get('abc')
console.log(ht.get('abc')) // 111

ht.remove('abc')
console.log(ht.get('abc')) // null

console.log(ht.isEmpty()) // false
console.log(ht.size()) // 3