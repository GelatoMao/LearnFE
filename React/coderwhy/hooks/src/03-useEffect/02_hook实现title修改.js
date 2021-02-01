import React, { useState, useEffect } from 'react'

export default function HookCounterChangeTitle() {
  const [counter, setCounter] = useState(0)

  // useEffect在元素渲染到页面上后会自动执行回调函数 不管是第一次渲染还是更新后渲染
  // 模拟生命周期的一些基本函数
  useEffect(() => {
    document.title = counter
  })

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}
