/*
* 主文件，用于汇总各个模块
浏览器不认识es6的模块化语法

第一步：使用babel将es6编译成es5代码:命令为：babel js/src -d js/dist 
第二步： 使用browserify编译上一步生成的js 命令为：browserify js/dist/app.js -o js/dist/dist.js 解决浏览器不认识require的问题 最终在index.html中引入dist.js文件
* */

//在es6的模块化规范中，用哪一种方式引入，取决于用何种方式暴露的

//引入module1，module1是【分别暴露】的
import { data, demo1, test1 } from './module1'
//【另外一种写法】：引入module1，module1是【分别暴露】的，此种引入方式会将module1暴露的内容，收集成一个对象haha
import * as haha from './module1'

//引入module2,module2是【统一暴露】的
import { demo2, test2 } from './module2'
//【另外一种写法】，引入module2,module2是【统一暴露】的，此种引入方式会将module2暴露的内容，收集成一个对象
import * as haha2 from './module2'

//引入module2,module2是【统一暴露】的（module2里面给暴露的内容起了别名）
//import {haha1,haha2} from './module2'

//【引入module3,module3是默认暴露的】
import module3 from './module3'
//如果模块是默认暴露的，尽量就不要用如下的写法
//import * as module3 from './module3'

//混合暴露
//引入module4，module4里用了多种暴露的方式
//module4对应默认暴露 大括号里面对应的是分别暴露和统一暴露 但是要注意 默认暴露的必须放在前面
import module4, { arr0, bar, foo, str, student, d1 } from './module4'

//引入第三方模块uniq，几乎所有的第三方模块，都用默认暴露的方式。
//默认暴露方法形式简单 而且可以避免命名冲突
import uniq from 'uniq'

console.log('-----原始import方法-------')
console.log(data)
demo1()
test1()
demo2()
test2()
console.log(module3.name)
console.log(module3.age)
module3.speak()
console.log('-----原始import方法-------')

console.log('-----通过*的方式引入------')
console.log(haha.data)
console.log(haha.demo1())
console.log(haha.test1())
console.log(haha2.demo2())
console.log(haha2.test2())
console.log('-----通过*的方式引入------')

console.log(module3)
console.log(uniq([1, 3, 3, 3, 2, 5, 4, 6, 7, 9, 8, 11, 10]));
console.log(arr0, str, student, d1)
bar()
foo()
d1.run()
console.log(module4)
