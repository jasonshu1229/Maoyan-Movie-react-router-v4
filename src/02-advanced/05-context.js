import React from 'react'
import GlobalContext from './context'

class Child1 extends React.Component{
  render() {
    return <GlobalContext.Consumer>
      {
        (context) => {
          return <div>
            我是 - Child1
            我是 - {context.mystate}
            <button onClick={() => {
              console.log(context)
              context.sendmessage("11111")
            }}>btn</button>
          </div>
        }
      }
    </GlobalContext.Consumer>
  }
}

class Child2 extends React.Component{
  render() {
    return <GlobalContext.Consumer>
      {
        (context) => {
          return <div>
            我是 - Child2
            我是 - {context.mystate}
            <button onClick={() => {
              context.sendmessage("22222")
            }}>btn</button>
          </div>
        }
      }
    </GlobalContext.Consumer>
  }
}

class App extends React.Component{
  state = {
    mytext: '要传的话'
  }

  render() {
    return <GlobalContext.Provider value={{
      myname: "lsh",
      mystate: this.state.mytext,
      sendmessage: (data) => {
        this.setState({
          mytext: data
        })
      }
    }}>
      <div>
        <Child1/>
        <Child2/>
      </div>
    </GlobalContext.Provider>
  }
}

export default App