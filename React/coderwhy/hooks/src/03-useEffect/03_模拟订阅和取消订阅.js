import React, { useEffect } from 'react'

export default function EffectHookCancelDemo() {

  // useEffect接收一个函数 这个函数本身又返回一个函数
  useEffect(() => {
    console.log('订阅一些事件')
    return () => {
      console.log('取消订阅操作')
    }
  }, [])
  return (
    <div>
      <h2>EffectHookCancelDemo</h2>
    </div>
  )
}
