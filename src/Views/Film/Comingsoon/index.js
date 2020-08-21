import React, { Component } from 'react';
import store from '../../../Redux/index';
import {getList} from './actionCreator';
import FilmItem from '../FilmItem/index';

class Comingsoon extends Component{

  state= {
    datalist: []
  }

  unsubscribe = null; 

  componentDidMount() {
    if (store.getState().isList.length === 0) {
      store.dispatch(getList()) //action
    } else {
      // 缓存数据
      console.log('缓存数据')
      this.setState({
        datalist: store.getState().isList
      })
    }

    // todo store.subscribe 每次刷新当前组件后，会重复注册
    // TODO 如果不在 willUnmount中 解绑注册的事件，等再一次进来时，会找之前组件留下的回调函数和状态
    // TODO 所以会报错

    // TODO 从Detail页面回来时，comingsoon组件中，无列表显示信息的原因？？（需要走缓存数据）
    // TODO store.subscribe 只有在组件状态修改时才能调用，
    // TODO 所以 从详情页回来时，datalist 状态并未改变，还是上次数据回来的之后赋予的数组
    this.unsubscribe = store.subscribe(() => {
      console.log("store修改了", store.getState())
      this.setState({
        datalist: store.getState().isList
      })
    })

    // console.log(unsubscribe) 
    /*
     ƒ unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error
      }
      */
  }

  componentWillUnmount() {
    // 解绑注册的回调函数
    this.unsubscribe()
  }
  render() {
    return <div>
      {
        this.state.datalist.map(item =>
          <FilmItem key={item.id} item={item}></FilmItem>
        )
      }
    </div>
  }
}

export default Comingsoon