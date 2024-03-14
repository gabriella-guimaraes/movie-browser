import React from "react";

export function CastComponent({ movieCast }) {
  if (!movieCast || !movieCast.length) {
    return <p>No cast available.</p>;
  }
  return (
    <div className="container">
      <h3>Starring:</h3>
      <div className="row">
        {movieCast.map((actor) => (
          <div className="col-lg-6 col-md-6 col-sm-12 my-2" key={actor.id}>
            <div className="castWrapper">
              <p>{actor.name} as <i>{actor.character}</i></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
