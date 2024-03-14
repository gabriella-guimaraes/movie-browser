const API_KEY = "0cbfd4617462850762ba0459d1ed266f";
const url = "https://api.themoviedb.org/3/movie/";

export async function fetchMovieDetails(id) {
  try {
    const response = await fetch(`${url}${id}?api_key=${API_KEY}&language=en-US`);
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
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
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
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
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