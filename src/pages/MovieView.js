import { HeroComponent } from "../components/Hero";
import { fetchMovieDetails, fetchCredits } from "../api/moviesApi";
import { CastComponent } from "../components/Cast";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "../css/movieView.module.css";

export function MovieViewComponent() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [movieCast, setMovieCast] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("section1");

  useEffect(() => {
    async function fetchData() {
      try {
        const details = await fetchMovieDetails(id);
        setMovieDetails(details);
        setIsLoading(false);

        // Chamando a segunda solicitação Fetch de Créditos após a primeira ser bem-sucedida
        const credits = await fetchCredits(id);
        setMovieCast(credits);
      } catch (error) {
        console.error("Ocorreu um erro:", error);
      }
    }

    fetchData();
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

      const productionCompanies = movieDetails.production_companies?.map(
        (company, index) => (
          <span key={index}>
            {company.name}
            {index < movieDetails.production_companies.length - 1 ? ", " : ""}
          </span>
        )
      ) || <span>N/A</span>;

      // Função para renderizar o componente com base na aba ativa
      const renderComponent = () => {
        switch (activeTab) {
          case "section1":
            return <CastComponent movieCast={movieCast} />;
          case "section2":
            return <p>Renderização 2</p>;
          case "section3":
            return <p>Renderização 3</p>;
          default:
            return null;
        }
      };

      return (
        <div className={styles.movieComponent}>
          <HeroComponent
            text={movieDetails.original_title}
            backdrop={backdropUrl}
          />
          <div className="container movie-card">
            <div className="row">
              <div className="col-md-3">{poster(movieDetails)}</div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <span>{productionCompanies}</span>
                <p className="lead intro-text mt-3">{movieDetails.overview}</p>
                <figure className="text-end m-3">
                  <blockquote className="blockquote">
                    <p>{movieDetails.tagline}</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <cite title="Source Title">
                      {movieDetails.original_title}
                    </cite>
                  </figcaption>
                </figure>
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
                  {movieDetails.genres?.map((genre) => (
                    <span key={genre.id} className="badge list-inline-item genres">
                      {genre.name}
                    </span>
                  ))}
                </ul>
              </div>
            </div>
            <div className="moreSectionWrapper">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "section1" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("section1")}
                  >
                    Cast
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "section2" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("section2")}
                  >
                    Link
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "section3" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("section3")}
                  >
                    Link
                  </button>
                </li>
              </ul>
              {renderComponent()}
            </div>
          </div>
        </div>
      );
    }
  }

  return renderMovieDetails();
}

// TODO: Implementar mais informações sobre o filme!
// - Cast
// - Algumas imagens?
// - Budget do filme
// Avaliações - talvez um badge ao lado da imagem?
