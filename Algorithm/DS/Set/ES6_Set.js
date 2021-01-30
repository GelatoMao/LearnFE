let mySet = new Set()
mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add('some text')
const o = { a: 1, b: 2 }
mySet.add(o)

// 迭代set
// 法一
for (let item of mySet) console.log(item)
/**
 * 1
 * 5
 * some text
 * { a: 1, b: 2 }
 */

// 法二
for (let [key, value] of mySet.entries()) console.log(key, value)
/**
 * 1 1
 * 5 5
 * some text some text
 * { a: 1, b: 2 } { a: 1, b: 2 }
 */

// 法三
for (let item of mySet.keys()) console.log(item)
/**
 * 1
 * 5
 * some text
 * { a: 1, b: 2 }
 */


// Set和Array互转

// Set转成Array
const myArr = [...mySet]
const myArr2 = Array.from(mySet)

// Array转成Set
const mySet2 = new Set([1, 2, 3, 4])

// 交集 差集

const intersection = new Set([...mySet].filter(item => mySet2.has(item)))
const subtraction = new Set([...mySet].filter(item => !mySet2.has(item)))
console.log(intersection, subtraction) // Set { 1 } Set { 5, 'some text', { a: 1, b: 2 } }

