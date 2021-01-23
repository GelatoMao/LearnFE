// 函数调用堆栈 

const fun1 = () => {
  fun2()
}
const fun2 = () => {
  fun3()
}
const fun3 = () => {

}

fun1()