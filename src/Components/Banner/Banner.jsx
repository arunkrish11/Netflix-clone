import React, { useEffect, useState } from "react";
import { imageUrl } from "../../Constants/constants";

// importing axios.js
import "./Banner.css";
import instance from "../../axios";

function Banner() {
  const [movie, setMovie] = useState();
  
  // We need movies details while loading or mounting Banner. So we use useEffect here.
  // useEffect: This hook runs after every render cycle. Which means useEffect work while loading this Banner and execute code inside it.
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const fetchMovie = async () => {
      try {
        const response = await instance.get(
          `trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        setMovie(response.data.results[0]);
      } catch (error) {
        console.log(API_KEY);
        console.error("Banner movie not found", error.message);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${
          movie ? imageUrl + movie?.backdrop_path : "Loading"
        })`,
      }}
      className="banner"
    >
      <div className="content">
        {/* if movie there show movie title or loading */}
        <h1 className="title">{movie ? movie.title : "Loading..."}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : "Loading..."}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
