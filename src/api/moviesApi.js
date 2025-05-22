const url = "https://api.themoviedb.org/3";

const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2JmZDQ2MTc0NjI4NTA3NjJiYTA0NTlkMWVkMjY2ZiIsIm5iZiI6MTcwODczMzcwMi42ODYsInN1YiI6IjY1ZDkzNTA2YjA0NjA1MDE0OTM0NTJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1bnesA0MEgiQiDy5wirdYN8fQ5Z3J2ztqOzFYgMaUVI'
      }
};

export async function fetchMovieDetails(id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2JmZDQ2MTc0NjI4NTA3NjJiYTA0NTlkMWVkMjY2ZiIsIm5iZiI6MTcwODczMzcwMi42ODYsInN1YiI6IjY1ZDkzNTA2YjA0NjA1MDE0OTM0NTJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1bnesA0MEgiQiDy5wirdYN8fQ5Z3J2ztqOzFYgMaUVI'
    }
  };
  try {
    const response = await fetch(`${url}/movie/${id}`, options);
    if (!response.ok) {
      throw new Error("Erro ao obter detalhes do filme");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ocorreu um erro:", error);
    throw error;
  }
}

export async function fetchCredits(id) {
    try {
      const response = await fetch(
        `${url}/movie/${id}/credits?language=en-US`, options
      );
      if (!response.ok) {
        throw new Error("Erro ao obter créditos do filme");
      }
      const data = await response.json();
      return data.cast; // Retorna apenas a parte do elenco dos dados recebidos
    } catch (error) {
      console.error("Ocorreu um erro ao obter créditos:", error);
      throw error;
    }
  }

  export async function fetchRecommendations(id) {
    try {
      const response = await fetch(
        `${url}/movie/${id}/recommendations?language=en-US&page=1`, options
      );
      if(!response.ok) {
        throw new Error("Ocorreu um erro ao obter recomendações");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  export async function fetchPopularMovies(pages = 5) {
    try {
      const response = await fetch(`${url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pages}&sort_by=popularity.desc`, options);
      const data = await response.json();
      return data.results;

    } catch (error) {
      console.log("Error ao obter filmes populares:", error);
      throw error;
    }
  }