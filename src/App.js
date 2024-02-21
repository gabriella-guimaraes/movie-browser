import './App.css';
import { NavbarComponent } from './components/Navbar';
import { Router, Route, Routes } from 'react-router-dom';
import { HomeComponent } from './components/Home';
import { AboutViewComponent } from './components/About-View';


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
