import { Link } from "react-router-dom";


export function MovieCardComponent({ movie }) {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`

    function poster () {
      if(movie.poster_path){
        return <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
      }
      if(movie.poster_path == null){
        return <img src="./Images/no-poster-found.png" className="card-img-top" alt="Poster not found" />
      }
    }
    
  return (
    <div className="col-12 my-4">
        <div className="card">
            {poster()}
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <Link to={detailUrl} className="btn btn-primary">
                Show details
                </Link>
            </div>
        </div>
    </div>
    
  );
}
