import React from 'react'
import './css/index.css'

class Tabbar1 extends React.Component{

  render(){
    return <div>
        <ul>
            <li className="active">111</li>
            <li>222</li>
            <li>333</li>
        </ul>
    </div>
  }
}

class Tabbar2 extends React.Component{
  render(){
    // 给予一个默认值 0
    var currentIndex = this.props.index === undefined ? 0 : this.props.index
    return <div>
      <ul>
        <li className={currentIndex===0?'active':''}>111</li>
        <li className={currentIndex===1?'active':''}>222</li>
        <li className={currentIndex===2?'active':''}>333</li>
      </ul>
    </div>
  }
}

class App extends React.Component{
  render() {
    return <div>
      <Tabbar1/>
      <Tabbar2 index={1}/>
    </div>
  }
}
export default App