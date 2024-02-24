import './App.css';
import { NavbarComponent } from './components/Navbar';
import { Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import { HomeComponent } from './components/Home';
import { AboutViewComponent } from './components/AboutView';
import { SearchViewComponent } from './components/SearchView';
// import { getMovies } from './components/hooks/useMovies';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  // TO-DO: pegue searchText como prop e separe os requests da API em um arquivop separado!!

  useEffect(() => {
    // if (searchText) {
    //   console.log('this is a search text', searchText);
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2JmZDQ2MTc0NjI4NTA3NjJiYTA0NTlkMWVkMjY2ZiIsInN1YiI6IjY1ZDkzNTA2YjA0NjA1MDE0OTM0NTJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q-47DIFoAHSCavpeG1UB4WtjWRvFr3Vr6HZyQ7u1a-w'
    //     }
    //   };
      
    //   fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data)
    //       setSearchResults(data.results)
    //     })
    //     .catch(err => console.error(err));

    // }
    const API_KEY = "0cbfd4617462850762ba0459d1ed266f";
    
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
    
  }, [searchText]);


  return (
    <div>
      <NavbarComponent searchText={searchText} setSearchText={setSearchText}/>
      {/* <Router> */}
        <Routes>
          <Route exact path="/" element={<HomeComponent/>}/>
          <Route path="/about" element={<AboutViewComponent/>} />
          <Route path="/search" element={<SearchViewComponent keyword={searchText} searchResults={searchResults}/>} />
        </Routes>
      {/* </Router> */}
      
    </div>
  );
}

export default App;
