import React, { Component } from 'react'

export default class SetStatePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  changeValue = (v) => {
    this.setState({
      counter: this.state.counter + v
    })
    console.log(this.state.counter)
  }

  setCounter = () => {
    this.changeValue(1)
  }
  render() {
    return (
      <div>
        <h3>setState</h3>
        <button onClick={this.setCounter}>{this.state.counter}</button>
      </div>
    )
  }
}
