import { useState, useEffect } from "react";
import { HeroComponent } from "../components/Hero";
import { MovieCardComponent } from "../components/MovieCard";

import styles from "../css/comingSoon.module.css";
import { fetchUpcomingMovies } from "../api/moviesApi";

export function ComingSoonViewComponent() {
  const API_KEY = "0cbfd4617462850762ba0459d1ed266f";
  const pages = 5;
  const releaseDate = "2024-03-01"

  const [comingSoonSearch, setComingSoonSearch] = useState([]);

  //Get upcoming movies
  useEffect(() => {
    fetchUpcomingMovies()
    .then((results) => {
      setComingSoonSearch(results);
    })
    .catch((error) => {
      console.log("Error fetching upcoming movies:", error);
    });
  }, []);



  return (
    <div className={styles.comingSoonComponent}>
      <HeroComponent
        text="Coming Soon"
        subtext="Stay Ahead of the Cinematic Curve"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-11 offset-lg-2 m-5">
            <p className="lead intro-text mb-5">
              Be the cinephile in the know. Our Trending Now feature is
              constantly updated to reflect the real-time buzz surrounding
              films. Stay ahead of the curve by discovering new releases,
              breakthrough performances, and cinematic trends that are shaping
              the industry. Checkout the most popular upcoming movies for 2024:
            </p>
            <div className="row">
                {comingSoonSearch.length > 0 ? (
                    comingSoonSearch.map((movie) => (
                        <MovieCardComponent key={movie.id} movie={movie} />
                    ))
                ): (
                    <p>Loading...</p>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
