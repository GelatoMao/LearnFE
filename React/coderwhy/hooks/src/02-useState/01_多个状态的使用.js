import React, { useState } from 'react'

export default function MutiHookState() {

  const [count, setCount] = useState(0)
  const [age, setAge] = useState(18)
  const [friends, setFriends] = useState(['haha', 'hehe'])
  return (
    <div>
      <h2>当前计数：{count}</h2>
      <h2>我的年龄：{age}</h2>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
