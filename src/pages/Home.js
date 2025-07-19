import { HeroComponent } from "../components/Hero";
import { PopularMoviesComponent } from "../components/PopularMovies";
import { BannerComponent } from './../components/Banner';

import styles from "../css/home.module.css"

export function HomeComponent() {
  return (
    <>
      <div className={styles.homeComponent}>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col">
              <div className={styles.banner}>
                <BannerComponent
                  text="Movie Browser"
                  subtext="Your Gateway to the Cinematic World!"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
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
        </div> */}
      </div>
      <PopularMoviesComponent />
    </>
  );
}
