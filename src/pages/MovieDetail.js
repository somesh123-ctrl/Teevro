import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div className="loading">Loading...</div>;

  // Function to generate star icons based on rating
  const generateStars = (rating) => {
    const roundedRating = Math.round(rating / 2); // Convert 10-point rating to 5-point scale
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        stars.push(<i key={i} className="fas fa-star"></i>); // Full star
      } else {
        stars.push(<i key={i} className="far fa-star"></i>); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <h1>{movie.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <p className="overview">{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <div className="rating">
          <p>Rating: {generateStars(movie.vote_average)}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
