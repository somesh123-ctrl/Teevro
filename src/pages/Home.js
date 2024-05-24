import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className="container">
      <h1>Trending Movies</h1>
      <div className="card-container">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="card-body">
                <h2>{movie.title}</h2>
                <p className="release-date">
                  Release Date: {movie.release_date}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
