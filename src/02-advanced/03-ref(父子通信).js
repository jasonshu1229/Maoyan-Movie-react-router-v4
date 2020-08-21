import React from 'react'

class Child extends React.Component{
  state = {
    myname:"111111"
  }
  mymethod(data) {
    console.log(data)
  }
  render(){
    return <div>
      navbar- 
      <button>click</button>
    </div>
  }
}

class App extends React.Component{
  state = {
    isShow: false
  }
  render(){
    return <div>
      <button onClick={() => {
        console.log(this.refs.mychild)
        this.refs.mychild.mymethod('2222')
      }}>parent-click</button>
      <Child ref="mychild"/>
    </div>
  }
}

export default App