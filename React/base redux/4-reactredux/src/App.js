import React from 'react'
import store from './store/index'
import { connect } from 'react-redux'


//无状态组件
const App = (props) => {
  const { inputValue, list, handleInputChange, clickBtn } = props
  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={clickBtn}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
// class App extends Component {
//   render() {
//     const { inputValue, list, handleInputChange, clickBtn } = this.props
//     return (
//       <div>
//         <div>
//           <input value={inputValue} onChange={handleInputChange} />
//           <button onClick={clickBtn}>提交</button>
//         </div>
//         <ul>
//           {
//             list.map((item, index) => {
//               return (
//                 <li key={index}>{item}</li>
//               )
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input',
        value: e.target.value
      }
      dispatch(action)
    },

    clickBtn() {
      const action = {
        type: 'add_item'
      }
      dispatch(action)
    }
  }
}


export default connect(stateToProps, dispatchToProps)(App)
