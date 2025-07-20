import { useState, useEffect } from "react";
import { BannerComponent } from './../components/Banner';
import { MovieCardComponent } from "../components/MovieCard";

import styles from "../css/comingSoon.module.css";

import { fetchUpcomingMovies } from "../api/moviesApi";

export function ComingSoonViewComponent() {
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
    <>
      <div className={styles.comingSoonComponent}>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col">
              <div className={styles.banner}>
                <BannerComponent
                  text="Coming Soon"
                  subtext="Stay Ahead of the Cinematic Curve"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-5">
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
    </>
  );
}
