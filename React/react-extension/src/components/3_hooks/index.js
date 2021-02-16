import React, { Component } from 'react'

// 类式组件
// class DemoHooks extends Component {
//   state = {
//     count: 0
//   }

//   add = () => {
//     this.setState(state => ({
//       count: state.count + 1
//     }))
//   }

//   render() {
//     return (
//       <div>
//         <h2>当前求和为: {this.state.count}</h2>
//         <button onClick={this.add}>+1</button>
//       </div>
//     )
//   }
// }

function DemoHooks() {

  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    console.log('@')
  }, [count])

  const add = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>当前求和: {count}</h2>
      <button onClick={add}>+1</button>
    </div>
  )
}

export default DemoHooks
