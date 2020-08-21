import React, { Component } from 'react';

class App extends Component {
    state = {
        myname:"old-name"
    }

    componentWillUpdate(){
        console.log("componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    //todo: 当达到某一状态改变，而后续不再改变时，应该阻止运行中生命周期再次触发

    // todo: 性能调优生命周期 
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate",this.state.myname)

        //todo: 如果状态发生了改变，应设为false,让运行中的生命周期不重复执行
        if (this.state.myname === nextState.myname) {
            return false  // todo: componentWillUpdate...等禁止执行
        }
        return true
    }
    
    render() {
        console.log("render")
        return (
            <div>
                hello--{this.state.myname}
                <button onClick={()=>{
                    this.setState({
                        myname:"new-name"
                    })
                }}>click</button>
            </div>
        );
    }
}

export default App;

//todo: 问：在运行中时，如果状态没发生改变的话，运行中的update的生命周期还会再执行吗？
// todo: Vue 不会(因为发生了set get拦截),而React中会，原因：无论状态改变与否，React运行中的生命周期都会再执行一遍，因为触发了setState
//todo:  setState 生命周期更新阶段执行一次，创建虚拟dom，diff对比新老节点，更新dom
//todo:  只要触发setState， 运行中的生命周期就会再触发，新老节点会重新进行对比