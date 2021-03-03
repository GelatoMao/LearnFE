import React, { Component } from 'react'
import Greeting from './Greeting'

export default class RefsDemo extends Component {

  /**
   * 应用场景
   * 1.需要直接操作dom元素,执行dom的api的情况，比如：直接控制按钮
   * 2.父组件中需要直接操作子组件的实例
   * 3.引用第三方库，需要直接操作dom
   */
  constructor(props) {
    super(props)
    this.state = {}
    //给当前的组件添加一个textInput属性，属性是一个ref
    //ref可以帮我们直接拿到
    this.textInput = React.createRef()
    this.greetRef = React.createRef()
    this.pElement = null
  }

  focusInput = () => {
    //直接可以拿到ref指向的dom元素
    this.textInput.current.focus()
  }

  getGreeting = () => {
    //通过ref可以直接拿到子的React组件 这边获取的就是Greeting组件的实例
    console.log(this.greetRef.current);
  }
  render() {
    return (
      <div>
        {/* 第一种写法拿到dom元素 */}
        <input type="text" ref={this.textInput} />
        <input type="button" value="获取焦点" onClick={this.focusInput} />
        {/* 第二种写法，拿到react子元素组件 */}
        <Greeting ref={this.greetRef} />
        <input type="button" value="获取组件实例" onClick={this.getGreeting} />
        {/* 第三种：可以直接使用函数的方式拿到dom或者react实例 */}
        {/*ref可以直接等于一个回调函数，回调函数里面可以直接接收一个element参数，element参数就是当前的p标签dom元素*/}
        {/* 假设当前组件中有一个属性是pElement，ref直接等于一个回调函数 这种一般在初始状态，这种方式一般要赋予null的初始值 */}
        <input type="text" ref={element => this.pElement = element}/>
        <input type="button" value="获得p标签焦点" onClick={() => { this.pElement && this.pElement.focus() }} />
      </div>
    )
  }
}
