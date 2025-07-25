import { Link, useNavigate } from "react-router-dom";

import GlassSurface from "./GlassSurface";

export function NavbarComponent({searchText, setSearchText}) {
  const navigate = useNavigate();
  const updateSearchText = (e) => {
    e.preventDefault();
    navigate('/search');
    setSearchText(e.target.value);
  };


  return (
    <nav className="navbar navbar-expand-lg nav-bar-container" data-bs-theme="dark">
      <GlassSurface 
        width={"100%"} 
        height={70}
        borderRadius={24}
        displace={5}
        distortionScale={-150}
        redOffset={5}
        greenOffset={15}
        blueOffset={25}
        brightness={60}
        opacity={0.6}
        className="d-flex flex-row w-100 align-items-center justify-content-between"
      >
        <div className="container-fluid ps-5 pe-5 d-flex flex-row">
          <Link className="navbar-brand" id="logo" to="/">
            Movie Browser
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/comingSoon">
                  Coming soon
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 text-white"
                id="searchField"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={updateSearchText}
              />
              <button 
              className="btn btn-outline-dark" 
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("searchField").value = "";
              }}>
                Search
              </button>
            </form>
          </div>
        </div>
      </GlassSurface>
    </nav>
  );
}
