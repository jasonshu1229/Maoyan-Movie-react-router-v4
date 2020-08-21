import React from 'react'

// class Navbar extends React.Component{
//   render(){
//     return <div>
//       navbar- 
//       <button onClick={this.props.event}>click</button>
//     </div>
//   }
// }

function Navbar(props) {
  console.log(props)
  return <div>
    navbar-<button onClick={props.event}>click</button>
  </div>
}

class Siderbar extends React.Component{
  render(){
    return <div>
      <ul>
        <li>sidebar1</li>
        <li>sidebar2</li>
        <li>sidebar3</li>
      </ul>
    </div>
  }
}

class App extends React.Component{
  state = {
    isShow: false
  }
  render(){
    return <div>
      <Navbar event={() => {
        this.setState({
          isShow: !this.state.isShow
        })
      }}/>
      {
        this.state.isShow?<Siderbar/>: null
      }
    </div>
  }
}

export default App