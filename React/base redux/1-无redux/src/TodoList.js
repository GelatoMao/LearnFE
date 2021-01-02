import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import store from './store'
import 'antd/dist/antd.css'
import { changeInputAction, clickBtnAction, deleteItemAction } from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props)
    //获取store里面的值 将值赋值给state
    // console.log(store.getState())
    this.state = store.getState()
    //进行订阅
    store.subscribe(this.storeChange)
  }

  storeChange = () => {
    this.setState(store.getState())
  }

  // changeInputValue = (e) => {
  //   const action = {
  //     type: CHANGE_INPUT,
  //     value: e.target.value
  //   }
  //   store.dispatch(action)
  // }

  changeInputValue = (e) => {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  // clickBtn = () => {
  //   const action = {
  //     type: ADD_ITEM
  //   }
  //   store.dispatch(action)
  // }

  clickBtn = () => {
    const action = clickBtnAction()
    store.dispatch(action)
  }


  // deleteItem = (index) => {
  //   const action = {
  //     type: DELETE_ITEM,
  //     index
  //   }
  //   store.dispatch(action)
  // }

  deleteItem = (index) => {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }


  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.changeInputValue}
            value={this.state.inputValue}
          />
          <Button type="primary" onClick={this.clickBtn}>增加</Button>
        </div>

        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (<List.Item onClick={() => this.deleteItem(index)}>{item}</List.Item>)}
          />
        </div>

      </div>
    );
  }
}

export default TodoList;