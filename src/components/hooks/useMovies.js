// export function getMovies(searchText) {
//     const API_URL = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`;
  
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjUzYjllNmJlYmM4MGUxYjMzMGU1MGJjYWJhNmE1YiIsInN1YiI6IjY1ZDkzNTA2YjA0NjA1MDE0OTM0NTJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b5WVVHw2CQWYLPVNOd0XlIoeSxo77LKzwGzIzL7Q4JY',
//       },
//     };
  
//     return fetch(API_URL, options)
//       .then((response) => response.json())
//       .catch((err) => console.error(err));
// }

//ALT

// const API_URL = 'https://api.themoviedb.org/3/search/movie';
// const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjUzYjllNmJlYmM4MGUxYjMzMGU1MGJjYWJhNmE1YiIsInN1YiI6IjY1ZDkzNTA2YjA0NjA1MDE0OTM0NTJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b5WVVHw2CQWYLPVNOd0XlIoeSxo77LKzwGzIzL7Q4JY';

// export function getMovies(searchText) {
//   const url = `${API_URL}?query=${searchText}&include_adult=false&language=en-US&page=1`;

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: API_KEY,
//     },
//   };

//   return fetch(url, options)
//     .then((response) => response.json())
//     .catch((err) => console.error(err));
// }