/**
 * 集合 字典 散列表都可以存储不重复的值
 * 在集合中 主要将值当做主要元素 以[值，值]的形式存储元素
 * 在字典中 用[键，值]的形式来存储数据 通过键值对来做映射关系
 * 在散列表中 也是用[键，值]来存储数据
 * ES6 中的 Map
 */

function Dictionary() {
  // 属性
  this.items = {}

  // 方法
  Dictionary.prototype.has = function (key) {
    return key in this.items
  }

  Dictionary.prototype.set = function (key, value) {
    this.items[key] = value
  }

  Dictionary.prototype.remove = function (key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }
    return false
  }

  // 通过键值查找特定的数值并返回
  Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined
  }

  // 将字典所包含的所有数值以数组形式返回
  Dictionary.prototype.values = function () {
    let values = []
    for (let item in this.items) {
      if (this.items.hasOwnProperty(item)) values.push(this.items[item])
    }
    return values
  }

  // 将字典所包含的所有键值以数组形式返回
  Dictionary.prototype.keys = function () {
    return Object.keys(this.items)
  }

  Dictionary.prototype.getItems = function () {
    return this.items
  }

  Dictionary.prototype.size = function () {
    return Object.keys(this.items).length
  }

  Dictionary.prototype.clear = function () {
    this.items = {}
  }

}


// 测试
let dictionary = new Dictionary()

dictionary.set('a', 'a@gmail.com')
dictionary.set('b', 'b@gmail.com')
dictionary.set('c', 'c@gmail.com')

console.log(dictionary.has('a')) // true
console.log(dictionary.has('d')) // false

console.log(dictionary.keys()) // [ 'a', 'b', 'c' ]
console.log(dictionary.values()) // [ 'a@gmail.com', 'b@gmail.com', 'c@gmail.com' ]
console.log(dictionary.get('c')) // c@gmail.com

dictionary.remove('b')

console.log(dictionary.keys()) // [ 'a', 'c' ]
console.log(dictionary.values()) // [ 'a@gmail.com', 'c@gmail.com' ]
console.log(dictionary.getItems()) // { a: 'a@gmail.com', c: 'c@gmail.com' }


// 力扣 349
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
 * 用字典建立映射关系 记录nums1里有的值
 * 映射关系的键是nums1里的值 值是一个布尔值 表示是否存在
 * 遍历nums2 遇到字典里的值就选出来 并从字典里删除
 */
var intersection = function (nums1, nums2) {
  const map = new Map()
  // 建立字典映射
  nums1.forEach(n => map.set(n, true))
  const res = []
  nums2.forEach(n => {
    if (map.get(n)) {
      res.push(n)
      // 如果有相同值 要立即删除 防止后面重复
      map.delete(n)
    }
  })
  return res
}
// @lc code=end


// 力扣20 通过map优化
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
  if (s.length % 2 === 1) return false
  const stack = [], map = new Map()
  // 建立map映射
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    // 如果是左括号 则进栈
    if (map.has(c)) {
      stack.push(c)
    } else {
      // 如果是右括号 则取栈顶元素作为键在map中查找 看其值是否与当前右括号一致
      const t = stack[stack.length - 1]
      if (map.get(t) === c) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
// @lc code=end


// 力扣1
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //建立字典 存储数字和下标
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i]
    const n2 = target - n1
    // n1当前希望找到n2 有直接返回
    if (map.has(n2)) {
      return [map.get(n2), i]
    } else {
      // 没有 则在字典中创建
      map.set(n1, i)
    }
  }
};
// @lc code=end


// 力扣 3
/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

/**
 * 用双指针维护一个滑动窗口，用来剪切子串
 * 不断移动右指针，遇到重复字符，就把左指针移动到重复字符下一位，使用* map来判断是否是重复字符
 * 过程中，记录所有窗口的长度，并返回最大值
 */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let lp = 0, maxLength = 0
  const map = new Map()
  for (let rp = 0; rp < s.length; rp++) {
    // 在字典中查找值时一定要注意在当前滑动窗口的范围内查找 即当前值的下标要大于等于左指针 我一开始是在整个map里面查找的 abbcdea的情况就会报错
    if (map.has(s[rp]) && map.get(s[rp]) >= lp) {
      // 遇到重复字符 左指针下移一位
      lp = map.get(s[rp]) + 1
    }
    map.set(s[rp], rp)
    maxLength = Math.max(maxLength, rp - lp + 1)
  }
  return maxLength
};
// @lc code=end




// 力扣 76
/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let lp = 0, rp = 0
  // 建立字典 用来表示子串需要的字符以及各个字符需要的个数
  // 键是字符 值是个数
  const need = new Map()
  for (let c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  }
  // needType记录一共需要多少种字符 是种不是个数
  let needType = need.size
  // 记录最小子串
  let res = ''
  while (rp < s.length) {
    const c = s[rp]
    // 如果右指针当前指向的字符在需求列表里面 则将需求列表里该字符对应的个数值减1
    if (need.has(c)) {
      need.set(c, need.get(c) - 1)
      // 若其中某个字符已经全部获取到 则将needType减1
      if (need.get(c) === 0) needType--
    }
    // 当包含T所有字符的时候 移动左指针 找出最小覆盖子串 
    while (needType === 0) {
      const newRes = s.substring(lp, rp + 1)
      if (!res || newRes.length < res.length) res = newRes
      const c2 = s[lp]
      if (need.has(c2)) {
        // 本来该字符是在子串中的 因为左指针的移动导致该字符不在子串中 所以个数需要增加
        need.set(c2, need.get(c2) + 1)
        if (need.get(c2) === 1) needType++
      }
      lp++
    }
    rp++
  }
  return res
};
// @lc code=end









