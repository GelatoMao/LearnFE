import React from 'react';
//将BrowserRouter重新命名成Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'

//设置规则  传递值 接受值  显示内容
const App = () => {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/456">列表</Link></li>
      </ul>
      {/* 首页一般需要精确匹配 */}
      <Route path="/" exact component={Index} />
      <Route path="/list/:id" component={List} />
    </Router>
  )
}

export default App

