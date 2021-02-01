import React, { useState } from 'react'

export default function CounterHooks() {
  // 真实开发中写的形式
  // 数组解构 0用来初始化count值
  const [count, setCount] = useState(0)

  console.log('counterhook被渲染')

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      {/* setCount中也可以传入一个函数 */}
      <button onClick={e => setCount((prevCount) => prevCount + 10)}>+10</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
    </div>
  )
}
