import './App.css';
import { NavbarComponent } from './components/Navbar';
import { Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { HomeComponent } from './pages/Home';
import { AboutViewComponent } from './pages/AboutView';
import { SearchViewComponent } from './pages/SearchView';
import { MovieViewComponent } from './pages/MovieView';
import { NotFoundViewComponent } from './pages/NotFoundView';
import { ComingSoonViewComponent } from './pages/ComingSoonView';
import { LoginViewComponent } from './pages/LoginView';
import { RegisterViewComponent } from './pages/RegisterView';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const API_KEY = "0cbfd4617462850762ba0459d1ed266f";

    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
          //console.log(data.results)
        })
    }
    
  }, [searchText]);
 


  return (
    <div>
      <NavbarComponent searchText={searchText} setSearchText={setSearchText}/>

        <Routes>
          <Route exact path="/" element={<HomeComponent/>}/>
          <Route path="/about" element={<AboutViewComponent/>} />
          <Route path="/search" element={<SearchViewComponent keyword={searchText} searchResults={searchResults}/>} />
          <Route path="/movies/:id" element={<MovieViewComponent/>} />
          <Route path="/comingSoon" element={<ComingSoonViewComponent/>} />
          <Route path='/login' element={<LoginViewComponent/>}/>
          <Route path='/register' element={<RegisterViewComponent/>} />
          <Route path="/404" element={<NotFoundViewComponent/>} />
          <Route path="*" element={<Navigate to='/404' />}/>
        </Routes>
      
    </div>
  );
}

export default App;
