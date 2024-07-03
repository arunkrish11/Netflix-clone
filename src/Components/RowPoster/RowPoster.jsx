import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './RowPoster.css'
import { imgeUrl } from '../../constansts/constants'

// props for each row component, which contain title and url
function RowPoster(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results[0] )
      setMovies(response.data.results)
    }).catch((err) => {
      alert('Network error. Please try again!')
    })
  },[])
  return (
      <div className='row_poster'>
        <h3>{props.title}</h3> 
        <div className="posters">
           {movies.map((movie) => (
            // Using dynamic class name
            <img className={ props.isSmall ? 'small-poster' : 'poster'} src={ `${imgeUrl}${movie.poster_path}: 'Loading'}`} alt={movie.name} />
          ))}
        </div>
      </div>
  )
}

export default RowPoster
