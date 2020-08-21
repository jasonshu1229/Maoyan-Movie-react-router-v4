import React from 'react'

class Child extends React.Component{
  state = {
    childName: "子组件名字"
  }
  render() {
    return <div>child
      <button onClick={() => {
        console.log(this.props.event(this.state.childName))
      }}>button</button>
    </div>
  }
}

class App extends React.Component{
  render() {
    return <div>
      <Child event={(data) => {
        console.log('父组件中定义的回调函数',data)
      }}/>
    </div>
  }
}

export default App

// 父传子 - 属性
// 子传父 - 回调函数