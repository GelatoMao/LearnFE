import React, { Component } from 'react'

export default class Dom extends Component {
  constructor(props) {
    super(props)
    // 两种方式
    this.refDiv = null
    this.refDiv2 = React.createRef()
  }

  handleBtn = () => {
    console.log(this.refDiv.offsetHeight)
    console.log(this.refDiv2.current.offsetHeight)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleBtn}>获取页面元素</button>
        <div ref={el => this.refDiv = el}>
          sssssss<br />lallalalalal<br />
        </div>
        <div ref={this.refDiv2}>哈哈哈哈哈哈哈<br />hehehhehehe<br /></div>
      </div>
    )
  }
}
