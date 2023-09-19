import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar(){
    return(
        <div className="navbar">
            <nav>
            <Link to="/" className='brand'><h1>Premier League Teams</h1></Link> 
			<Link to="/">Home</Link>
			<Link to="/teams">Teams</Link>
			<Link to="/contact">Contact</Link>
            </nav>
		</div>
    )
}
export default Navbar;