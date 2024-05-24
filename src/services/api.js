const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWM1OWE0ZTk2MmYxNTJjN2VmOTQxOTcwM2ZmZTg4YiIsInN1YiI6IjY2NTAxYjgyYTkxYzJiOTcwYWRkODY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.koJTV76A-rvh1GMCMKSRtG6iY-uoBdqxuL0HUnRbALc";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/day`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_KEY,
    },
  });
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_KEY,
    },
  });
  return response.json();
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?query=${query}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_KEY,
    },
  });
  const data = await response.json();
  return data.results;
};
