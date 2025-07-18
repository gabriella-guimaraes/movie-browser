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
import { fetchMoviesByKeyword } from './api/moviesApi';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetchMoviesByKeyword(searchText)
        .then(results => {
          setSearchResults(results);
        })
        .catch(error => {
          console.log("Error fetching movies:", error);
        });
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
