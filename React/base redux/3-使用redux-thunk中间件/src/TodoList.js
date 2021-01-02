import React, { Component } from 'react';
import store from './store'
import TodoListUI from './TodoListUI'
import { changeInputAction, clickBtnAction, deleteItemAction, getTodoList } from './store/actionCreators'

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

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }


  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }
}

export default TodoList;