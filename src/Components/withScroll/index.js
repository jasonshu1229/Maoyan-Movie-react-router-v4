import React,{ Component } from "react"

const withScroll = (SelfComponent, height) => {
  
  return class WithScroll extends Component {
    state = {
      isFixed: false
    }
    componentDidMount() { 
      window.onscroll = () => {
        
        if (document.documentElement.scrollTop || document.body.scrollTop>= height) {
          this.setState({
            isFixed: true
          })
        } else {
          this.setState({
            isFixed: false
          })
        }
      }
    }
    render() {
      return <div>
        <SelfComponent isFixed={this.state.isFixed}></SelfComponent>
      </div>
    }
    componentWillUnmount() {
      window.onscroll = null 
    }
  }
}

export default withScroll