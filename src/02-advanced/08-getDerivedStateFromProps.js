import React, { Component } from 'react';

class Child extends Component{
  state = {
    childname: ''
  }

  static getDerivedStateFromProps(newProps) {
    console.log('getDerivedStateFromProps')
    return {
      childname: newProps.myname
    }
  }

  render() {
    return <div>
      child - {this.state.childname}
    </div>
  }

  /*
    取代了 componetWillUpdate,
    触发时间为 update发生的时候，
    在render之后dom渲染之前返回一个值，
    作为 componentDidUpdate的第三个参数。
  */
  // 通常用来快照 迅速在更新前 记录 某一位置
  getSnapshotBeforeUpdate() {
    return {
      newState: {
        x: 2,
        y: 5 
      }
    }
  }

  componentDidUpdate(prevProps, prevState, data) {
    // 新状态 老状态
    console.log('componentDidUpdate', this.state.childname, prevState.childname)
    console.log('data', data)
  }
}

class App extends Component{
  state = {
    myname: 'AppParent-name'
  }

  render() {
    return <div>
      hello - {this.state.myname}
      <Child myname={this.state.myname}/>
      <button onClick={() => {
        this.setState({
          myname: 'lshhhhhh'
        })
      }}>button</button>
    </div>
  }
}

export default App