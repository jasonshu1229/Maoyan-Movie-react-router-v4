// import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import App from "../App";
import Film from '../Views/Film'
import Center from '../Views/Center'
import Cinema from '../Views/Cinema'
import Detail from '../Views/Detail'

const Auth = {
  isLogin() {
    return true
  }
}

const router = <Router>
  <App>
    <Switch>
      <Route path='/film' component={Film}/> 
      <Route path='/cinema' component={Cinema}/> 
      <Route path='/center' render = {() => 
        Auth.isLogin() ? <Center/> : <Redirect to='/login'/>
      }/> 
      <Route path='/detail/:myid' component={Detail}/> 
      <Redirect from='/' to='/film'></Redirect>
    </Switch>
  </App>
</Router> 

export default router