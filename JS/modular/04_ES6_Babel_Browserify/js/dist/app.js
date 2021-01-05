'use strict';

var _module = require('./module1');

var haha = _interopRequireWildcard(_module);

var _module2 = require('./module2');

var haha2 = _interopRequireWildcard(_module2);

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var _module6 = _interopRequireDefault(_module5);

var _uniq = require('uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//如果模块是默认暴露的，尽量就不要用如下的写法
//import * as module3 from './module3'

//混合暴露
//引入module4，module4里用了多种暴露的方式

//【另外一种写法】，引入module2,module2是【统一暴露】的，此种引入方式会将module2暴露的内容，收集成一个对象

//【另外一种写法】：引入module1，module1是【分别暴露】的，此种引入方式会将module1暴露的内容，收集成一个对象haha
console.log('-----原始import方法-------');

//引入第三方模块uniq，几乎所有的第三方模块，都用默认暴露的方式。
//默认暴露方法形式简单 而且可以避免命名冲突


//引入module2,module2是【统一暴露】的（module2里面给暴露的内容起了别名）
//import {haha1,haha2} from './module2'

//【引入module3,module3是默认暴露的】


//引入module2,module2是【统一暴露】的
/*
* 主文件，用于汇总各个模块
浏览器不认识es6的模块化语法

第一步：使用babel将es6编译成es5代码:命令为：babel js/src -d js/dist 
第二步： 使用browserify编译上一步生成的js 命令为：browserify js/dist/app.js -o js/dist/dist.js 解决浏览器不认识require的问题 最终在index.html中引入dist.js文件
* */

//在es6的模块化规范中，用哪一种方式引入，取决于用何种方式暴露的

//引入module1，module1是【分别暴露】的

console.log(_module.data);
(0, _module.demo1)();
(0, _module.test1)();
(0, _module2.demo2)();
(0, _module2.test2)();
console.log(_module4.default.name);
console.log(_module4.default.age);
_module4.default.speak();
console.log('-----原始import方法-------');

console.log('-----通过*的方式引入------');
console.log(haha.data);
console.log(haha.demo1());
console.log(haha.test1());
console.log(haha2.demo2());
console.log(haha2.test2());
console.log('-----通过*的方式引入------');

console.log(_module4.default);
console.log((0, _uniq2.default)([1, 3, 3, 3, 2, 5, 4, 6, 7, 9, 8, 11, 10]));
console.log(_module5.arr0, _module5.str, _module5.student, _module5.d1);
(0, _module5.bar)();
(0, _module5.foo)();
_module5.d1.run();
console.log(_module6.default);