import React from "react";

export function CastComponent({ movieCast }) {
  if (!movieCast || !movieCast.length) {
    return <p>No cast available.</p>;
  }
  return (
    <div className="container">
      <h3 className="mt-2">Starring:</h3>
      <div className="row align-items-center">
        {movieCast.map((actor) => (
          <div className="col-lg-6 col-md-6 col-sm-12 my-2" key={actor.id}>
            <div className="castWrapper">
              <p>{actor.name} as <em>{actor.character}</em></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
