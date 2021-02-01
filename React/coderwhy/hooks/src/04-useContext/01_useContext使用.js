import React, { useContext } from 'react'
import { UserContext, ThemeContext } from '../App'

export default function ContextHookDemo() {

  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  // useContext实现UserContext和ThemeContext中的数据在ContextHookDemo中共享
  // 但是useContext还是不能替代redux
  console.log(user, theme)

  return (
    <div>
      <h2>ContextHookDemo</h2>
    </div>
  )
}
