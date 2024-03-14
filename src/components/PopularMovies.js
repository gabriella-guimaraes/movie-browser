import { useState, useEffect } from "react";
import { MovieCardComponent } from "./MovieCard";

import styles from "../css/popularMovies.module.css";

export function PopularMoviesComponent() {
  const API_KEY = "0cbfd4617462850762ba0459d1ed266f";
  const pages = 5;

  const [popularMoviesSearch, setPopularMoviesSearch] = useState([]);

  //Get movies by Popularity
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&${pages}&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularMoviesSearch(data.results);
      });
  }, []);

  return (
    <div className={styles.popularMoviesContainer}>
      <div className="container">
        <div className="row row-cols-1">
          <div className="col-lg-11 offset-lg-2 m-5">
            <h1>Popular Movies</h1>
            <p className="lead intro-text mb-5">
              Dive into the pulse of the film world with our "Trending Now" section,
              your go-to destination for the hottest and most talked-about movies in
              the industry. At Movie Browser, we curate a dynamic list of the latest
              releases, critical darlings, and audience favorites that are currently
              making waves in the cinematic landscape.
            </p>
            <div className="row">
              {popularMoviesSearch.length > 0 ? (
                popularMoviesSearch.map((movie) => (
                  <MovieCardComponent key={movie.id} movie={movie} />
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
