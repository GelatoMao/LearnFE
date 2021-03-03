import React, { Component } from 'react'

export default class Dangerous extends Component {
  constructor(props) {
    super(props)
    this.state = {
      demo: '<div>demo</div>',
      domDanger: {
        //绑定对象 必须有__html属性 属性值就是绑定页面上去的内容
        __html: `<div>demo</div>
        <p>gelatomao</p>
        `
      }
    }
  }
  render() {
    return (
      <div>
        {this.state.demo}
        <div dangerouslySetInnerHTML={this.state.domDanger}></div>
      </div>
    )
  }
}
