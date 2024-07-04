import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../../axios'
import './RowPoster.css'
import { API_KEY, imgeUrl } from '../../constansts/constants'

// props for each row component, which contain title and url
function RowPoster(props) {
  const [movies, setMovies] = useState([])
  const [UrlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    }).catch(() => {
      alert('Network error. Please try again!')
    })
  },[])
  const handleClick = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if (response.data.results.length!==0) {
        setUrlId(response.data.results[0])
      } else {
        alert('Movie Trailer Not Found')
      }
    })
  }
  return (
      <div className='row_poster'>
        <h3>{props.title}</h3> 
        <div className="posters">
           {movies.map((movie) => (
            // Using dynamic class name
            <img onClick={() => handleClick(movie.id)} className={ props.isSmall ? 'small-poster' : 'poster'} src={ `${imgeUrl}${movie.poster_path}: 'Loading'}`} alt={movie.name} />
          ))}
        </div>
        { UrlId && <YouTube videoId={UrlId.key} opts={{height: '390', width: '100%', playerVars: {autoplay: 1}}} />}      </div>
  )
}

export default RowPoster
