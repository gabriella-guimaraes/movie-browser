import { HeroComponent } from "../components/Hero";
import { MovieCardComponent } from "../components/MovieCard";

export function SearchViewComponent({ keyword, searchResults }) {
  const tittle = `You are searching for ${keyword}`;
  const movieResults = searchResults?.map((obj, i) => {
    return <MovieCardComponent movie={obj} key={i} />;
  });
  return (
    <div>
      <HeroComponent text={tittle} />
      {movieResults && (
        <div className="container">
          <div className="row">{movieResults}</div>
        </div>
      )}{" "}
      <h2 className="p-5">
        {"Sorry, we couldn't find anything for" + keyword}
      </h2>
    </div>
  );
}