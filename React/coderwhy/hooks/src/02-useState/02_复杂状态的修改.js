import React, { useState } from 'react'

export default function ComplexHookState() {

  const [friends, setFriends] = useState(['haha', 'hehe'])
  const [students, setStudents] = useState([{ id: 110, name: 'why', age: 18 }, { id: 111, name: 'am', age: 13 }, { id: 112, name: 'i', age: 20 }])


  function incrementAgeWithIndex(index) {
    // 需要创建新的对象来进行赋值改变
    const newStudents = [...students]
    newStudents[index].age += 1
    setStudents(newStudents)
  }
  return (
    <div>
      <h2>好友列表：</h2>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <button onClick={e => setFriends([...friends, 'lala'])}>添加朋友</button>

      <h2>学生列表：</h2>
      <ul>
        {
          students.map((item, index) => {
            return (
              <li key={item.id}>
                <span>名字：{item.name} 年龄：{item.age}</span>
                <button onClick={e => incrementAgeWithIndex(index)}>age+1</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
