'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* module3使用【默认暴露】,只能暴露一次。
* */
// export default 2

exports.default = {
  name: 'haha',
  age: 18,
  speak: function speak() {
    console.log('\u6211\u7684\u540D\u5B57\u662F' + this.name + ',\u6211\u7684\u5E74\u9F84\u662F' + this.age);
  }
};