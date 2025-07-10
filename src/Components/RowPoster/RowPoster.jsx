import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./RowPoster.css";
import { API_KEY, imageUrl } from "../../Constants/constants";
import instance from "../../axios";

// props for each row component, which contain title and url
function RowPoster(props) {
  const [movies, setMovies] = useState([]);
  const [UrlId, setUrlId] = useState("");
  const [showPlayer, setShowPlayer] = useState(false);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await instance.get(props.url);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Movies not found", error.message);
      }
    };

    fetchMovies();
  }, [props.url]);

  const handleClick = async (id) => {
    try {
      const response = await instance.get(
        `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      if (response.data.results.length !== 0) {
        console.log(response.data.results[0].key);
        setUrlId(response.data.results[0]);
        setShowPlayer(true);
      } else {
        console.error("Trailer not found");
        alert("Tailer not found");
      }
    } catch (error) {
      console.error("Trailer not found", error.message);
      alert("Tailer not found");
    }
  };

  return (
    <div className="row_poster">
      <br />
      <h3>{props.title}</h3>
      <div className="posters">
        {movies.map((movie, i) => (
          // Using dynamic class name
          <img
            key={i}
            onClick={() => handleClick(movie.id)}
            className={props.isSmall ? "small-poster" : "poster"}
            src={`${imageUrl}${movie.poster_path}: 'Loading'}`}
            alt={movie.name}
          />
        ))}
      </div>
      {showPlayer && (
        <div className="video-section">
          <button
            className="video-close-btn"
            onClick={() => setShowPlayer(false)}
          >
            X
          </button>
          <div className="video-container">
            <YouTube
              videoId={UrlId.key}
              opts={{
                height: "390",
                width: "100%",
                playerVars: {
                  autoplay: 0,
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default RowPoster;
