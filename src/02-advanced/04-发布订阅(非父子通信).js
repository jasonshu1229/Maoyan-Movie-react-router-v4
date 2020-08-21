import React from 'react'

// 中央调度中心
let store = {
  list: [],
  subscribe(callback) {
    this.list.push(callback)
  },
  publish(data) {
    this.list.forEach(cb => cb(data))
  }
}

class WeixinUser extends React.Component{
  componentDidMount() {
    store.subscribe((data) => {
      console.log('订阅者被通知了', data)
    })
  } 
  render() {
    return <div>
      我是订阅者
    </div>
  }
} 

class WeixinPublish extends React.Component{
  render() {
    return <div>
      我是发布者
      <button onClick={() => {
        store.publish('发布者发布大事了')
      }}>发布</button>
    </div>
  }
}

class App extends React.Component{
  render() {
    return <div>
      <WeixinUser></WeixinUser>
      <WeixinPublish></WeixinPublish>
    </div>
  }
}

export default App