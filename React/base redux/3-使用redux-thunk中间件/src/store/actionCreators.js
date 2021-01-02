import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import axios from "axios"

//对外方法
// changeInputValue = (e) => {
//   const action = {
//     type: CHANGE_INPUT,
//     value: e.target.value
//   }
//   store.dispatch(action)
// }

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

// clickBtn = () => {
//   const action = {
//     type: ADD_ITEM
//   }
//   store.dispatch(action)
// }

export const clickBtnAction = () => ({
  type: ADD_ITEM
})

// deleteItem = (index) => {
//   const action = {
//     type: DELETE_ITEM,
//     index
//   }
//   store.dispatch(action)
// }

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})

//redux-thunk 中间件 使得在action中可以返回一个函数而不是必须是一个对象 
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5f4e60d366f90555e2209893/getList')
      .then((res) => {
        const data = res.data
        const action = getListAction(data)
        dispatch(action)
      })
  }
}

