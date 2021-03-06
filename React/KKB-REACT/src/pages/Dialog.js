import React, { Component } from 'react'

//组件组合
export default class Dialog extends Component {
  render() {
    return (
      <div className="dialog">
        <div className="dialog-hd">
          {this.props.title}
        </div>
        <div className="dialog-bd">
          {this.props.children}
        </div>
        <div className="dialog-footer">
          {this.props.footer}
        </div>
      </div>
    )
  }
}
