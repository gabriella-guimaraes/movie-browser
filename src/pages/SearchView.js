import { HeroComponent } from "../components/Hero";
import { MovieCardComponent } from "../components/MovieCard";

export function SearchViewComponent({ keyword, searchResults }) {
  const title = `You are searching for ${keyword}`;
  const movieResults = searchResults?.map((obj, i) => {
    return <MovieCardComponent movie={obj} key={i} />;
  });
  return (
    <div>
    <HeroComponent text={title} />
    {searchResults && searchResults.length > 0 && (
      <div className="container">
        <div className="row">{movieResults}</div>
      </div>
    )}
    {searchResults && searchResults.length === 0 && (
      <h2 className="p-5">
        {"Sorry, we couldn't find anything for" + keyword}
      </h2>
    )}
  </div>
  );
}