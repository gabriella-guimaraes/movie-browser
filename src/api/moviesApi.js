const url = "https://api.themoviedb.org/3";
const token = process.env.REACT_APP_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export async function fetchMoviesByKeyword(searchText) {
  try {
    const response = await fetch(`${url}/search/movie?language=en-US&query=${searchText}&page=1&include_adult=false`, options);
    const data = await response.json();

    return data.results;

  } catch (error) {
    console.log("Error ao obter filmes:", error);
    throw error;
  }
}

export async function fetchMovieDetails(id) {
  try {
    const response = await fetch(`${url}/movie/${id}?language=en-US`, options);
    const data = await response.json();

    return data;

  } catch (error) {
    console.log("Error ao obter filmes:", error);
    throw error;
  }
}

export async function fetchCredits(id) {
  try {
    const response = await fetch(`${url}/movie/${id}/credits?language=en-US`, options);
    const data = await response.json();
    
    return data.cast; // Retorna apenas a parte do elenco dos dados recebidos

  } catch (error) {
    console.error("Ocorreu um erro ao obter créditos:", error);
    throw error;
  }
}

export async function fetchRecommendations(id) {
  try {
    const response = await fetch(`${url}/movie/${id}/recommendations?language=en-US&page=1`, options);
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

export async function fetchUpcomingMovies() {
  try {
    const response = await fetch(`${url}/movie/upcoming?language=en-US&page=1`, options);
    console.log(response);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log("Error ao obter filmes futuros:", error);
    throw error;
  }
}
