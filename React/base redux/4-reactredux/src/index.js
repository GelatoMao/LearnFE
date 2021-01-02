import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//provide的作用是只要是被provide包裹的组件，里面都可以获得store里面的数据 就不用使用订阅的方式来实现
import { Provider } from 'react-redux'
import store from './store'

const Todolist = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  Todolist,
  document.getElementById('root')
);

