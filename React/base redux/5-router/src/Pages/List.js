import React, { Component } from 'react'

export default class List extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    let tempId = this.props.match.params.id
    this.setState({ id: tempId })
  }
  

  render() {
    return (
      <div>
        <h2>List{this.state.id}</h2>
      </div>
    )
  }
}
