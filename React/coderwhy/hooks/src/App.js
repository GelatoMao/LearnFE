import React, { createContext, useState } from 'react'
import CounterClass from './01-learnHooks/01_counter-class'
import CounterHooks1 from './01-learnHooks/02_counter-hooks'
import CounterHooks2 from './01-learnHooks/03_counter-hooks'
import MutiHookState from './02-useState/01_多个状态的使用'
import ComplexHookState from './02-useState/02_复杂状态的修改'
import ClassCounterTitleChange from './03-useEffect/01_class实现title修改'
import HookCounterChangeTitle from './03-useEffect/02_hook实现title修改'
import EffectHookCancelDemo from './03-useEffect/03_模拟订阅和取消订阅'
import MutiEffectHookDemo from './03-useEffect/04_多useEffect一起使用'
import ContextHookDemo from './04-useContext/01_useContext使用'

// 创建context对象
export const UserContext = createContext()
export const ThemeContext = createContext()

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {/* learn base hooks */}
      {/* <CounterClass /> */}
      {/* <CounterHooks1 /> */}
      {/* <CounterHooks2 /> */}

      {/* useState */}
      {/* <MutiHookState /> */}
      {/* <ComplexHookState /> */}

      {/* useEffect */}
      {/* <ClassCounterTitleChange /> */}
      {/* <HookCounterChangeTitle /> */}
      {/* {show && <EffectHookCancelDemo />} */}
      {/* <button onClick={e => setShow(!show)}>切换</button> */}
      {/* <MutiEffectHookDemo /> */}
      <UserContext.Provider value={{ name: 'why', age: 18 }}>
        <ThemeContext.Provider value={{ fontSize: '30px', color: 'red' }}>
          <ContextHookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
