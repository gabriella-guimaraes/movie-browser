import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export function NotFoundViewComponent () {
    const navigate = useNavigate();
    const goHome = useCallback(() => {
        navigate("/");
    }, []);
    return (
        <div className="container text-center my-5">
            <div className="row justify-content-md-center mt-5">
                <h2>Ooops... This page does not exist :/</h2>
                <p>Return to the home page clicking  on this button:</p>
            </div>
                <button onClick={goHome} type="button" className="btn btn-outline-primary mt-2">Go back to Home</button>
        </div>
    )
}