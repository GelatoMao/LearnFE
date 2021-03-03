import React, { Component } from "react";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";

export default class Layout extends Component {

  render() {
    const { children, showTopBar, showBottomBar } = this.props
    console.log(children)
    return (
      <div>
        {/* 当showTopBar为true才展示topBar */}
        {showTopBar && <TopBar />}
        {/* {this.props.children} */}
        {children.content}
        {children.txt}
        <button onClick={children.btnClick}>button</button>
        {showBottomBar && <BottomBar />}
      </div>
    )
  }
}
