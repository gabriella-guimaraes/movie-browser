import { HeroComponent } from "./Hero";
import { MovieCardComponent } from "./MovieCard";

export function SearchViewComponent({ keyword, searchResults }) {
  const tittle = `You are searching for ${keyword}`;

  const movieResults = searchResults.map((obj, i) => {
    return <MovieCardComponent movie={obj} key={i} />;
  });
  return (
    <div>
      <HeroComponent text={tittle} />
      {movieResults && (
        <div className="container">
          <div className="row">{movieResults}</div>
        </div>
      )}
    </div>
  );
}

//<div key={obj.id}>{obj.original_title}</div>
