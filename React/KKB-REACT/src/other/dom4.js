import React, { Component } from 'react'

class Dom5 extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={this.props.parentRef} />
      </div>
    )
  }
}

//this.textInput是在父组件中定义的 但是确指向了子组件 这样可以在父组件的方法中定位到子组件
export default class Dom4 extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.textInput = React.createRef()
  }

  handleClick = () => {
    // 这边获取的是 <input type="text"/>  也就是dom5
    console.log(this.textInput.current)
    this.textInput.current.focus()
  }
  render() {
    return (
      <div>
        <input type="button" value="让子组件的文本框获得焦点" onClick={this.handleClick} />
        <Dom5 parentRef={this.textInput} />
      </div>
    )
  }
}
