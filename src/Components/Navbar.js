import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import NavImage from './NavImage.png';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"white"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img src={NavImage} alt="logo" />
                    </Link>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="#">TODAY</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="#">COURSES</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">PRACTICE</Link>
                        </li>
                    </ul>
                    <div>
                        <button type="button" className="btn btn-light">Log In</button>
                        <button type="button" className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </nav>
        </div>
     );
}


export default Navbar;