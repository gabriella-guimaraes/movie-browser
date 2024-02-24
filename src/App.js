import './App.css';
import { NavbarComponent } from './components/Navbar';
import { Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import { HomeComponent } from './components/Home';
import { AboutViewComponent } from './components/AboutView';
import { SearchViewComponent } from './components/SearchView';
import { MovieViewComponent } from './components/MovieView';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  // TO-DO: pegue searchText como prop e separe os requests da API em um arquivop separado!!

  useEffect(() => {
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
          <Route path="/movies/:id" element={<MovieViewComponent/>} />
        </Routes>
      {/* </Router> */}
      
    </div>
  );
}

export default App;
