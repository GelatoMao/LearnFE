import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'
//暴露一个方法
const defaultState = {
  inputValue: 'write something',
  list: [
    'aaaaaa',
    'bbbbbb',
    'ccccc'
  ]
}
export default (state = defaultState, action) => {
  //reducer只能接受state，不能改变state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}