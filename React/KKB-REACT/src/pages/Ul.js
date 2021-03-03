import React, { Component } from 'react'

class Lis extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  handleTop = () => {
    console.log(this.props.parentRef.current.offsetTop)
  }
  //如果是接收
  render() {
    const { parentRef, content } = this.props
    return (
      <li ref={parentRef} onClick={this.handleTop}>{content}</li>
    )
  }
}


export default class Ul extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: ['1', '2', '3', '4', '5']
    }
    this.liRef = React.createRef()
  }
  render() {
    const { arr } = this.state
    return (
      <div>
        {
          arr.map((item => (
            <Lis key={item} parentRef={this.liRef} content={item} />
          )))
        }
      </div>
    )
  }
}
