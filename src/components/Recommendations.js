import React from "react";
import { MovieCardComponent } from "./MovieCard";

export function RecommendationsComponent ({ recommendations}) {
    if(!recommendations || !recommendations.length) {
        return <p>No recommendations found!</p>
    }
    return(
        <div className="recommendationsContainer">
            <div className="container">
                <h3 className="mt-2">Movies you'll also like:</h3>
                <div className="row">
                    {recommendations.map((movie) => (
                        <MovieCardComponent key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    )
}