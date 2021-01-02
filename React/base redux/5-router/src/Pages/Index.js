import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [
        { cid: 123, title: 'a' },
        { cid: 456, title: 'b' },
        { cid: 789, title: 'c' }
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>Index</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={'/list/' + item.cid}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
