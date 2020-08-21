import React from 'react';
import './App.css';
import Tabbar from './Components/Tabbar/index';
import store from './Redux';
class App extends React.Component{

  state = {
    isShow: true
  }

  // 一定要早早监控，早于 Detail组件 dispatch出去的action，监听晚了，就收不到改变的状态了
  componentWillMount() {

    // todo 早早监听 strore中的 状态被 reducer修改成了什么
    // todo React组件中只能监听到 store状态什么时候改变，但改成什么，需要 store.getState() 自己访问一下
    store.subscribe(() => {
      console.log('store被修改了',store.getState())
      this.setState({
        isShow: store.getState().isTabbar
      })
    })
  }

  render() {
    return <div>
      {/* 路由容器 给 根路由 留位置 */}
      {
        this.state.isShow?
        <Tabbar/>
        : null
      }
      { this.props.children}
    </div>
  }
}

export default App;
 