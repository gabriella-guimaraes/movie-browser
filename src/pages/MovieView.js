import { HeroComponent } from "../components/Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function MovieViewComponent() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = "0cbfd4617462850762ba0459d1ed266f";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <HeroComponent text="Loading..." />;
    }
    if (movieDetails) {
      const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

      function poster(movieDetails) {
        if (movieDetails.poster_path) {
          return (
            <img
              src={posterUrl}
              alt="..."
              className="img-fluid shadow rounded"
            />
          );
        }
        if (movieDetails.poster_path == null) {
          return (
            <img
              src="../Images/no-poster-found.png"
              className="img-fluid shadow rounded"
              alt="Poster not found"
            />
          );
        }
      }

      //const productionCompanyName = movieDetails.production_companies[0]?.name // 'N/A' if the return is null;

      const productionCompanies = movieDetails.production_companies?.map(
        (company, index) => (
          <span key={index}>
            {company.name}
            {index < movieDetails.production_companies.length - 1 ? ", " : ""}
          </span>
        )
      ) || <span>N/A</span>;

      return (
        <div className="Movie-Component">
          <HeroComponent
            text={movieDetails.original_title}
            backdrop={backdropUrl}
          />
          <div className="container my-5 movie-card">
            <div className="row">
              <div className="col-md-3">{poster(movieDetails)}</div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <span>{productionCompanies}</span>
                <p className="lead intro-text mt-3">{movieDetails.overview}</p>
                <p className="lead">
                  <b>Release date: </b>
                  {movieDetails.release_date}
                </p>
                <p className="lead">
                  <b>Runtime: </b>
                  {movieDetails.runtime + " min"}
                </p>
                <h3>Genres:</h3>
                <ul className="list-inline">
                  {movieDetails.genres?.map((genre, index) => (
                    <span key={index} className="badge list-inline-item genres">
                      {genre.name}
                    </span>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return renderMovieDetails();
}
