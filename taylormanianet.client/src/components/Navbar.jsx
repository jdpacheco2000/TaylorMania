import { Link } from "react-router-dom";
import LoveIcon from '../assets/noun-love-5417528.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="icon-container">
                    <img src={LoveIcon} alt="Love Icon" width="50" height="50" />
                </div>
                <Link to="/" className="navbar-brand">
                    <h1>TaylorMania</h1>
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">New Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ratings" className="nav-link">Ratings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
