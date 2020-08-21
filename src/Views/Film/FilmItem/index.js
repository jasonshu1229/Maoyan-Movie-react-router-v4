import React, { Component } from 'react';
import {withRouter} from 'react-router'

class FilmItem extends Component {
  render() {
    let item = this.props.item
    return <li className="active" onClick={() => this.handleClick(item.id)}>
      <img src={item.img.replace('w.h', '128.180')}></img>
      <p>{item.nm}</p>
    </li>
  } 
  handleClick(id) {
    // this.props.history.push(`/detail/${id}`)
    this.props.history.push(`/detail/${id}`)
  }
}

export default withRouter(FilmItem)