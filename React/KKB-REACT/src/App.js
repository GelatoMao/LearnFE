import React from 'react';
import ClassComponent from './pages/ClassComponent'
import './App.css';
import FunctionComponent from './pages/FunctionComponent';
import SetStatePage from './pages/setState';
import Life from './pages/Life'
import HomePage from './pages/HomePage'
import Dom from './other/dom'
import Dom3 from './other/dom2'
import Dom4 from './other/dom4'
import FormDemo from './pages/FormDemo'
import FormSome from './pages/FormSome'
import FormSub from './pages/FormSub'
import Ul from './pages/Ul'
import Greeting from './pages/Greeting'
import StateLifting from './pages/StateLifting'
import Dialog from './pages/Dialog'
import Demo from './pages/JSXFunction'
import RefsDemo from './pages/RefsDemo'
import DomvsJSX from './pages/DomvsJSX'
import Dangerous from './pages/Dangerous'
import PropChildren from './pages/PropChildren'

function App() {
  return (
    <div>
      {/* <ClassComponent /> */}
      {/* <FunctionComponent /> */}
      {/* <SetStatePage /> */}
      {/* <Life /> */}
      {/* <HomePage /> */}
      {/* <Dom /> */}
      {/* <Dom3 /> */}
      {/* <Dom4 /> */}
      {/* <FormDemo /> */}
      {/* <FormSome /> */}
      {/* <FormSub /> */}
      {/* <Ul /> */}
      {/* <Greeting /> */}
      {/* <StateLifting /> */}
      {/* <RefsDemo /> */}
      {/* <Dialog
        title="添加用户的对话框"
        footer={
          <div>footer</div>
        }
      >
        <p>这是一个子嵌套的内容!</p>
        <StateLifting />
        <Demo cname="Msg" />
      </Dialog> */}
      {/* <DomvsJSX /> */}
      {/* <Dangerous /> */}
      <PropChildren />
    </div>
  );
}

export default App;
