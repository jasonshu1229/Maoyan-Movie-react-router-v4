import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Nowplaying from './Nowplaying/index';
import Comingsoon from './Comingsoon/index';
import FilmHeader from './FilmHeader';
import withScroll from '../../Components/withScroll/index';

class Film extends Component {
  render() {
    // console.log(this.props)
    return <div>
      <div style={{height: '200px'}}>大轮播</div>
      <FilmHeader {...this.props}></FilmHeader>
      {/* <Switch> */}
        <Route path="/film/nowplaying" component={Nowplaying}></Route>
        <Route path="/film/comingsoon" component={Comingsoon}></Route>
        <Redirect from="/film" to="/film/nowplaying"></Redirect>
      {/* </Switch> */}
    </div> 
  }
}

export default withScroll(Film, 400)