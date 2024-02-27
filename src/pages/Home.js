import { HeroComponent } from "../components/Hero";
import { PopularMoviesComponent } from "../components/PopularMovies";

export function HomeComponent() {
  return (
    <>
      <div className="Home-Component">
        <HeroComponent
          text="Welcome to Movie Browser"
          subtext="Your Gateway to the Cinematic World!"
        />
        <div className="container">
          <div className="row row-cols-1">
            <div className="col-lg-11 offset-lg-2 m-5">
              <p className="lead intro-text">
                Discover the realm of cinematic entertainment in an entirely new
                way with Movie Browser. We are thrilled to introduce to you a
                unique and engaging experience designed to simplify the search
                for the perfect movie for every occasion. At Movie Browser, we
                understand that choosing the perfect movie can be an art in
                itself. That's why we've designed an intuitive platform that
                goes beyond mere listings. Explore detailed information on cast
                members, directors, ratings, user reviews, and more, empowering
                you to make informed decisions tailored to your specific tastes
                and preferences.
              </p>
              <h2 className="SubTitle mt-5">Explore, Discover, Watch</h2>
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
