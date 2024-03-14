import { Link } from "react-router-dom";

export function FormControlComponent({ intro, description, redirect }) {
    function FormRedirect () {
        if(redirect === false) {
            return <p>Don't you have an account? <Link className="form-redirect" to="/register">Register now!</Link></p>
        } else {
            return <p>Already have an account? <Link className="form-redirect" to="/register">LogIn</Link></p>
        }
    }
    
  return (
    <div className="FormContainer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img className="formImage" alt="" src="../Images/movieBrowser-concept-art7.png" />
          </div>
          <div className="col-lg-6 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
            <div className="mb-3">
                <h1 className="form-intro">{intro}</h1>
                <p className="form-description">{description}</p>
              {/* Email */}
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />

              {/* Password */}
              <label className="form-label">Password</label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control"
                aria-describedby="passwordHelpBlock"
              />
              <div id="passwordHelpBlock" className="form-text">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </div>

              <div className="col-auto mt-3 text-center">
                <button type="submit" className="btn btn-primary mb-3 align-items-center form-button">
                  Login
                </button>
                {FormRedirect()} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
