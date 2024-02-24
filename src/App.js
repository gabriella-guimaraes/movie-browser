import './App.css';
import { NavbarComponent } from './components/Navbar';
import { Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import { HomeComponent } from './components/Home';
import { AboutViewComponent } from './components/AboutView';
import { SearchViewComponent } from './components/SearchView';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmVmNDg5MTYzOGVlZGM2YjViYjBhZjUyZDk1MGU4ZCIsInN1YiI6IjY1ZDkzNTA2YjA0NjA1MDE0OTM0NTJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.74QHjseWubVgSsgyfA-AYJZDh3Rq0DbH9xA0gvRdNfo'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setSearchResults(data.results)
        })
        .catch(err => console.error(err));
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
