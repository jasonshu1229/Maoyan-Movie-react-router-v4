import React, { Component } from 'react';
import FilmItem from '../FilmItem/index';
import axios from 'axios';

class Nowplaying extends Component{

  state = {
    datalist: []
  }

  componentDidMount() {
    axios.get("/ajax/movieOnInfoList?token=&optimus_uuid=77804710E2CD11EA821F697A9E23ADA2AE942CA0A7924F2688852CCE0026FA30&optimus_risk_level=71&optimus_code=10").then(res => {

      this.setState({
        datalist: res.data.movieList
      })
    })
  }

  render() {
    // console.log(this.props)  // {history: {…}, location: {…}, match: {…}, staticContext: undefined}
    return <div>Nowplaying
      <ul>
        {
          this.state.datalist.map((item =>
            // <li key ={item} onclick={() => this.handleClick(item)}}>{item}</li>
          // <FilmItem key={item} item={item} history = {this.props.history}></FilmItem>
          <FilmItem key={item.id} item={item}></FilmItem>
          ))
        }
      </ul>
    </div>
  }
}

export default Nowplaying