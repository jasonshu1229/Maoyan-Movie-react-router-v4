import React, { Component } from 'react'

class Child extends Component{
  render() {
    return <div>
      child - {this.props.myid}
    </div>
  }

  componentDidMount() {
    console.log('componentDidMount',this.props.myid)
  }

  componentWillReceiveProps(props) {
    // todo props 拿到的是新的状态！ 而this.props 拿到的是老的状态！
    console.log('componentWillReceiveProps', props.myid)
  }
}

class App extends Component{
  state = {
    id: 'men-id'
  }
  render() {
    return <div>
      <ul>
        <li onClick={() => {
          this.setState({
            id: "men-id"
          })
        }}>men</li>
        <li onClick={() => {
          this.setState({
            id: "women-id"
          })
        }}>women</li>
        <li onClick={() => {
          this.setState({
            id: "crossborder-id"
          })
        }}>crossborder</li>
      </ul>
      <Child myid={this.state.id}></Child>
    </div>
  }
}

export default App