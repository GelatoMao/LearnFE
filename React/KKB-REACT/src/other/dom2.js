import React, { Component } from 'react'

//ref指向类组件的实例
class Dom2 extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  focusTextInput = () => {
    this.textInput.current.focus()
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="button" value="focus the text input" onClick={this.focusTextInput} />
      </div>
    )
  }
}

export default class Dom3 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.textInput = React.createRef()
  }
  componentDidMount() {
    //Dom2实例 这样可以实现组件被挂载后自动进行聚焦 就不用在点击之后实现聚焦了
    //this.textInput可以获取到focusTextInput方法，所以这边的this.textInput其实是Dom2组件的实例
    console.log(this.textInput.current)
    this.textInput.current.focusTextInput()
  }
  render() {
    return (
      <div>
        <Dom2 ref={this.textInput} />
      </div>
    )
  }
}


