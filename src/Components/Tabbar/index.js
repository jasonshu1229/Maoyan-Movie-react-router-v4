import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import css from './index.module.scss';

class Tabbar extends Component {
  render() {
    return <div className={css.tabbar}>
      <ul>
        <li><NavLink to="/film" activeClassName={css.active}>film</NavLink></li>
        <li><NavLink to="/cinema" activeClassName={css.active}>cinema</NavLink></li>
        <li><NavLink to="/center" activeClassName={css.active}>center</NavLink></li>
      </ul>
    </div>
  }
}

export default Tabbar 