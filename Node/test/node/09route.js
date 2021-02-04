const fs = require('fs')
const path = require('path')

console.log(__dirname);
console.log(path.join(__dirname, '01.js'))
//__dirname获取当前文件所在目录
fs.readFile(path.join(__dirname, '01.js'), 'utf8', (err, doc) => {
  console.log(err);
  console.log(doc);
})