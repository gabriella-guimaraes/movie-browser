import { useState, useEffect } from "react";
import { MovieCardComponent } from "./MovieCard";
import { fetchPopularMovies } from "../api/moviesApi";

import styles from "../css/popularMovies.module.css";

export function PopularMoviesComponent() {

  const [popularMoviesSearch, setPopularMoviesSearch] = useState([]);

  //Get movies by Popularity
  useEffect(() => {
    fetchPopularMovies()
      .then((data) => {
        setPopularMoviesSearch(data);
      });
  }, []);

  return (
    <div className={styles.popularMoviesContainer}>
      <div className="container">
        <div className="row row-cols-1">
          <div className="col-lg-12 mt-5">
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
                  <div className="col-sm-6 col-md-4 col-lg-4 mb-4" key={movie.id}>
                    <MovieCardComponent key={movie.id} movie={movie} />
                  </div>
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
