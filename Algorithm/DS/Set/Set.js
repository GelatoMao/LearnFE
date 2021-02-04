// 封装集合类 
/**
 * 集合是由一组无序的，不能重复的元素组成
 * 没有顺序意味着不能通过下标值进行访问 
 * 可以把集合想象成一个既没有重复元素，也没有顺序概念的数组
 * 集合的常用操作：去重，判断某元素是否在集合中，求交集
 */

// ES6中的set

// 去重
const arr = [1, 1, 2, 2]
const arr2 = [...new Set(arr)]

// 判断元素是否在集合中
const set = new Set(arr)
const has = set.has(1)

// 求交集 set2和set两个集合的交集 set没有提供方法直接求交集 需要转化为数组 利用filter方法求解
const set2 = new Set([2, 3])
const set3 = new Set([...set].filter(item => set2.has(item)))


function Set() {
  /**
   * 属性
   * 可以使用对象也可以使用数组来表示集合
   * js对象不允许一个键指向两个不同的属性 保证了集合里的元素都是唯一的
   */
  this.items = {}

  // 方法
  // add方法
  Set.prototype.add = function (value) {
    // 判断当前元素中是否已经包含了该元素
    if (this.has(value)) return false
    // 将元素添加到集合中 添加一个值的时候 把它同时作为键和值保存 因为这样有利于查找这个值
    this.items[value] = value
    return true
  }

  // has方法
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
  }

  // remove方法
  Set.prototype.remove = function (value) {
    // 判断集合中是否包含该元素
    if (!this.has(value)) return false
    // 将元素从属性中删除
    delete this.items[value]
    return true
  }

  // clear方法 将items指向一个新对象 之前的对象因为没有引用指向它 自动会删除
  // 也可以迭代集合 用remove方法依次移除所有的值 但是这种方法太麻烦
  Set.prototype.clear = function () {
    // items设置为对象 对象的keys本身就是一个集合类
    this.items = {}
  }

  // size方法
  Set.prototype.size = function () {
    return Object.keys(this.items).length
  }

  Set.prototype.size2 = function () {
    let count = 0
    for (let prop in this.items) {
      /**
       * 不能直接使用for-in遍历items对象的属性，递增count变量的值
       * 还需要使用hasOwnProperty方法(以验证items对象具有该属性)
       * 因为对象的原型包含了额外的属性(属性既有继承自JS的Object类的) 也有属于对象自身的
       */
      if (this.items.hasOwnProperty(prop)) ++count
    }
    return count
  }

  // 获取集合中所有的值
  Set.prototype.getValues = function () {
    return Object.keys(this.items)
  }




  // 集合间操作

  // 并集
  Set.prototype.union = function (othersSet) {
    // this:集合对象A
    // otherSet:集合对象B
    // 1. 创建新的集合
    const unionSet = new Set()
    // 2. 将A集合中所有的元素插入到新集合中
    let values = this.getValues()
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    // 3. 取出B集合中的元素 判断是否需要加入到新集合
    values = othersSet.getValues()
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    return unionSet
  }

  // 交集
  Set.prototype.intersection = function (otherSet) {
    // this:集合对象A
    // otherSet:集合对象B
    // 1. 创建新的集合
    const intersectionSet = new Set()
    // 2. 从A中取出一个元素 判断是否同时存在于集合B中 存在则放入新集合中
    const values = this.getValues()
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }

  // 差集 返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合
  Set.prototype.subtraction = function (otherSet) {
    // this:集合对象A
    // otherSet:集合对象B
    // 1. 创建新的集合
    const subtractionSet = new Set()
    // 2. 取出集合A中元素 判断是否同时存在B中 不存在 则添加到新集合中
    const values = this.getValues()
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        subtractionSet.add(values[i])
      }
    }
    return subtractionSet
  }

  // 子集
  Set.prototype.subset = function (otherSet) {
    // this:集合对象A
    // otherSet:集合对象B
    // 遍历集合A中所有的元素 如果A中的元素在B中不存在 则为false 
    // 如果遍历完整个集合 依旧没有返回false 则返回true即可
    const values = this.getValues()
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) return false
    }
    return true
  }

}


//测试
let set = new Set()
console.log(set.add('abc')) // true
console.log(set.add('abc')) // false 值重复插入失败
console.log(set.add('cba')) // true
console.log(set.add('nba')) // true
console.log(set.add('mba')) // true
console.log(set.getValues()) // [ 'abc', 'cba', 'nba', 'mba' ]

console.log(set.remove('mba')) // true
console.log(set.getValues()) // [ 'abc', 'cba', 'nba' ]

console.log(set.has('abc')) // true
console.log(set.has('aaa')) // false

console.log(set.size()) // 3
set.clear()
console.log(set.size()) // 0


// 测试集合间操作方法
// 创建两个集合 并且添加元素
let setA = new Set()
setA.add('abc')
setA.add('cba')
setA.add('nba')

let setB = new Set()
setB.add('aaa')
setB.add('nba')
setB.add('cba')

// 求两个集合的并集
const unionSet = setA.union(setB)
console.log(unionSet.getValues()) // [ 'abc', 'cba', 'nba', 'aaa' ]

// 求两个集合的交集
const intersectionSet = setA.intersection(setB)
console.log(intersectionSet) // Set { items: { cba: 'cba', nba: 'nba' } }
console.log(intersectionSet.getValues()) // [ 'cba', 'nba' ]

// 求两个集合的差集
const subtractionSet = setA.subtraction(setB)
console.log(subtractionSet.getValues()) // [ 'abc' ]

// 判断子集
console.log(setA.subset(setB)) // false




// 力扣349
/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/**
 * 用集合对nums1去重
 * 遍历nums1，筛选出nums2也包含的值
 */
var intersection = function (nums1, nums2) {
  return [...new Set(nums1)].filter(item => nums2.includes(item))
}
// @lc code=end

