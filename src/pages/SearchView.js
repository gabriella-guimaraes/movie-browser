import { HeroComponent } from "../components/Hero";
import { MovieCardComponent } from "../components/MovieCard";

export function SearchViewComponent({ keyword, searchResults }) {
  const title = `You are searching for ${keyword}`;
  const movieResults = searchResults?.map((obj, i) => {
    return(
      <div className="col-sm-6 col-md-4 col-lg-4 mb-4" key={i}>
        <MovieCardComponent movie={obj} key={i} />
      </div>
    ) 
  });
  return (
    <div className="text-center pt-5 search-view-component">
    <HeroComponent text={title} />
    {searchResults && searchResults.length > 0 && (
      <div className="container text-start">
        <div className="row">{movieResults}</div>
      </div>
    )}
    {searchResults && searchResults.length === 0 && (
      <h2 className="p-5">
        {"Sorry, we couldn't find anything for " + keyword}
      </h2>
    )}
  </div>
  );
}