import React, { useState, useEffect } from 'react'

export default function MutiEffectHookDemo() {

  const [count, setCount] = useState(0)
  /**
   * 之前在componentDidMount中修改dom,订阅事件，网络请求等都放在这一个生命周期中，会显得很复杂
   * 在hooks中 可以使用多个useEffect分别对这些事件进行处理
   * 根据这些事件处理函数定义的顺序依次调用
   * 
   * useEffect的第二个参数如果没有写 则默认只要组件发生更新 则useEffect就会重新执行一遍
   * 如果想让useEffect在特定的情况下调用 需要传入第二个参数 数组 数组里写入这个函数所要依赖的变量
   * 如果传入空的数组 则表示这个函数谁都不依赖 就意味着这个函数只会在组件第一次渲染的时候执行一次
   */
  useEffect(() => {
    console.log('修改dom')
  },[count])

  useEffect(() => {
    console.log('订阅事件')
  }, [])

  useEffect(() => {
    console.log('网络请求')
  }, [])

  return (
    <div>
      <h2>MutiEffectHookDemo</h2>
      <h2>{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}
