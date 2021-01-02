import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM ,GET_LIST} from './actionTypes'

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

