import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../Constants/constants'
// importing axios.js
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()

  // We need movies detailes while loading or mounting Banner. So we use useEffect here.
  // useEffect: This hook runs after every render cycle. Which means useEffect work while loading this Banner and execute code inside it. 
  useEffect(() => {
    // You can access API_KEY in bleow, for that you need to use in axion.get(`${API_KEY`}`)
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US` ).then((response) => {
      // Movie detailes are in response.data.results[0]
      setMovie(response.data.results[0])
      console.log(response.data.results[0]);
    })
  },[])
  
  return (
    <div
     style={{backgroundImage: `url(${movie ? imageUrl+movie?.backdrop_path : "Loading" })`}}
     className='banner'>
        <div className="content">
            {/* if movie there show movie title or loading */}
            <h1 className="title">{movie ? movie.title : 'Loading...'}</h1>
            <div className="banner_buttons">
              <button className="button">Play</button>
              <button className="button">My List</button>
            </div>
            <h1 className="discription">{movie ? movie.overview : 'Loading...'}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    )
}

export default Banner
