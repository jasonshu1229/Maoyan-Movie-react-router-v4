import React from 'react'

class App extends React.Component{
  state = {
    datalist: []
  }

  render() {
    return <div>
      <input type="text" ref="mytext"></input>
      <button onClick={this.handleClick}>add</button>
      {
        this.state.datalist.map((item,index) => 
          <li key={index}>
            {item}
            
            {/* <button onClick={this.handleDelClick.bind(this, index)}>del</button> */} 
            <button onClick={() => this.handleDelClick(index)}>del</button>
          </li>
        )
      }
      
    </div>
  }
  handleClick = () => {
    console.log(this.refs.mytext.value)
    this.setState({
      datalist: [...this.state.datalist, this.refs.mytext.value]
    }, () => {
      this.refs.mytext.value = ''
      })
  }
  handleDelClick = (index) => {
    console.log('del', index)
    var newlist = this.state.datalist.slice()
    newlist.splice(index, 1)
    this.setState({
      datalist: newlist
    })
  }
  
}

export default App