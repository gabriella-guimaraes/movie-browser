import './App.css';
import { NavbarComponent } from './components/Navbar';
import { HomeComponent } from './components/Home';
import { AboutViewComponent } from './components/About-View';
import { Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavbarComponent />
      {/* <Router> */}
        <Routes>
          <Route exact path="/" element={<HomeComponent/>}/>
          <Route path="/about" element={<AboutViewComponent/>} />
        </Routes>
      {/* </Router> */}
      
    </div>
  );
}

export default App;
