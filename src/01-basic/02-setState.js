import React from 'react'

class App extends React.Component{
  state = {
    count: 0
  }

  render() {
    return <div>
      {this.state.count}
      <button onClick = {this.handleCount1}>click-1</button>
      <button onClick = {this.handleCount2}>click-2</button>
      <button onClick = {this.handleCount3}>click-3</button>
      <button onClick = {this.handleCount4}>click-4</button>
    </div>
  }
  handleCount1 = () => {
    // setState 用法1
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count) // 此时访问的是真实的dom，dom已经渲染完毕
    })
  }
  handleCount2 = () => {
    this.setState({
      count: this.state.count + 1
    })
    
    this.setState({
      count: this.state.count + 1
    })
    
    this.setState({
      count: this.state.count + 5
    })
    console.log(this.state.count)
  }
  handleCount3 = () => {
    this.setState((prevstate) => ({
      count: prevstate.count +1 
    }))
    this.setState((prevstate) => ({
      count: prevstate.count +1 
    }))
    this.setState((prevstate) => ({
      count: prevstate.count +1 
    }))
  }
  handleCount4 = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
    setTimeout(_ => {
      this.setState({count: this.state.count + 1})
      console.log(this.state.count)
    },2000)
    setTimeout(_ => {
      this.setState({count: this.state.count + 1})
      console.log(this.state.count)
    },2000)
  }
}
export default App