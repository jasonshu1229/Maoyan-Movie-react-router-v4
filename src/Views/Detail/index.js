import React, { Component } from 'react';
import axios from 'axios';
import store from '../../Redux';
import { show,hide } from '../Detail/actionCreator';

class Detail extends Component {
  
  state = {
    detailMoive:null
  }

  // type 关键字 固定 payload 只是习惯 负载
  componentWillMount() {
    console.log('隐藏tabbar')
    store.dispatch(hide()) // action 就是传的参数
  }

  componentWillUnmount() {
    console.log('显示tabbar')
    store.dispatch(show()) // action 就是传的参数
  }

  componentDidMount(){
    // this.props.match.params 拿到详情页面的id值
    // console.log(this.props.match.params.myid)

    axios.get(`/ajax/detailmovie?movieId=${this.props.match.params.myid}`)
    .then((res)=>{
        console.log(res.data);
        this.setState({
            detailMoive:res.data.detailMovie
        })
    })
  }
  
  render() {
    let item = this.state.detailMoive
    return <div>
      {
        item?<div>
          <img src={item.img.replace('w.h', '128.180')} alt={item.nm}/>
          {item.nm}
        </div>
        :null
      }
    </div>
  }
}

export default Detail