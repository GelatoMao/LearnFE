// 设计哈希函数
// 1. 将字符串转成比较大的数字：hashCode
// 2. 将大的数字hashCode压缩到数组范围(大小)之内

// size数组大小
function hashFunc(str, size) {
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


// 测试哈希函数
console.log(hashFunc('abc', 7)) // 4
console.log(hashFunc('cba', 7)) // 3
console.log(hashFunc('nba', 7)) // 5
console.log(hashFunc('mba', 7)) // 1