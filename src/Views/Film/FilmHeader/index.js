import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'

class FilmHeader extends Component {
  state = {  }
  render() {
    // console.log(this.props.isFixed)
    return (
      <div className={css.filmheader +" "+ (this.props.isFixed?css.fixedheader:'')}>
        <ul>
          <li><NavLink to="/film/nowplaying" activeClassName={css.active} replace>正在上映</NavLink></li>
          <li><NavLink to="/film/comingsoon " activeClassName={css.active} replace>即将上映</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default FilmHeader; 