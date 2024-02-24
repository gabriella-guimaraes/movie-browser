import { HeroComponent } from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function MovieViewComponent () {
    const { id } = useParams();
    console.log(id);

    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const API_KEY = "0cbfd4617462850762ba0459d1ed266f"

    useEffect(() => {
        console.log("API request goes here lol", id);
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data);
                setIsLoading(false);
            })
    }, [id])

    function renderMovieDetails () {
        if(isLoading){
            return <HeroComponent text="Loading..." />
        }
        if(movieDetails) {
            console.log(movieDetails)
            //TO-DO: criar uma tratativa para filmes que não tenham imagem de poster
            const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            return(
                <>
                    <HeroComponent text={movieDetails.original_title} />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterUrl} alt="..." className="img-fluid shadow rounded" />
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">{movieDetails.overview}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return renderMovieDetails();
}