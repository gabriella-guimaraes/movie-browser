import { Link, useNavigate } from "react-router-dom";

export function NavbarComponent({searchText, setSearchText}) {
  const navigate = useNavigate();
  const updateSearchText = (e) => {
    navigate('/search');
    setSearchText(e.target.value);
  };


  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="gosomewhere">
                Coming soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              id="searchField"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <button 
            className="btn btn-outline-success" 
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
    </nav>
  );
}
