import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/">
                <h1>TaylorMania</h1>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/ratings">Ratings</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;