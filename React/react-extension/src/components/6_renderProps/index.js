import React, { Component } from 'react'
import './index.css'

export default class DemoRenderProps extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是parent组件</h3>
        <A>hello</A>
      </div>
    )
  }
}

class A extends Component {
  render() {
    return (
      <div className="a">
        <h3>我是A组件 {this.props.children}</h3>

        {/* <B /> */}
      </div>
    )
  }
}

// class B extends Component {
//   render() {
//     return (
//       <div className="b">
//         <h3>我是B组件</h3>
//       </div>
//     )
//   }
// }
