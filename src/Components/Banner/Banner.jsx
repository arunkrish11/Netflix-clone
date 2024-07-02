import React, { Component } from 'react'
import './Banner.css'

export class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <div className="content">
            <h1 className="title">Movie Name</h1>
            <div className="banner_buttons">
              <button className="button">Play</button>
              <button className="button">My List</button>
            </div>
            <h1 className="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    )
  }
}

export default Banner
