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
