import { HeroComponent } from "../components/Hero";
import { PopularMoviesComponent } from "../components/PopularMovies";

import styles from "../css/home.module.css"

export function HomeComponent() {
  return (
    <>
      <div className={styles.homeComponent}>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-6 order-lg-1 order-md-1">
              <HeroComponent
                text="Welcome to Movie Browser"
                subtext="Your Gateway to the Cinematic World!"
              />

              <p className="lead intro-text m-5">
                Discover the realm of cinematic entertainment in an entirely new
                way with Movie Browser. We are thrilled to introduce to you a
                unique and engaging experience designed to simplify the search
                for the perfect movie for every occasion. At Movie Browser, we
                understand that choosing the perfect movie can be an art in
                itself. Explore detailed information on cast
                members, directors, ratings, user reviews, and more, empowering
                you to make informed decisions tailored to your specific tastes
                and preferences.
              </p>
            </div>
            <div class="col-lg-6 col-md-6 order-lg-2 order-md-2">
              <img
                src="../Images/movieBrowser-concept-art7.png"
                className="float-right"
                id={styles.headerImage}
                alt="Movie Browser Ilustration"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-1">
            <div className="col-lg-11 offset-lg-2 m-5">
              <h2 className="SubTitle ">Explore, Discover, Watch</h2>
              <p className="lead intro-text">
                Movie Browser is more than just a movie catalog; it's your
                personalized guide to the seventh art. Browse through a vast
                selection of movies spanning different genres, decades, and
                cultures. Find detailed information about the cast, directors,
                ratings, user reviews, and more, all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
      <PopularMoviesComponent />
    </>
  );
}
