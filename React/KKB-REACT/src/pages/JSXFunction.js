import React from 'react'

const MyMsg = function (props) {
  return (
    <p>hi,my message</p>
  )
}

//Component组件中有Msg和Dialog两个子属性
const Component = {
  Msg: MyMsg,
  Dialog: function (props) {
    return (
      <div>
        这是dialog!
      </div>
    )
  }
}

export default function Demo(props) {
  let { cname } = props
  let Comp = Component[cname]
  return (
    <div>
      h1,demo
      <Component.Msg />
      <Component.Dialog />
      <Comp />
    </div>
  )
}