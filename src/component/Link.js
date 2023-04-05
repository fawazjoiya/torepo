import { Link } from "react-router-dom";
function Linktime() {
    return (
        <div className="mainimgset">
        <div className="header-bg">
            <div className="logo">
                <img src="img/logo-image.png" />
            </div>
            <div className="navset">
                

                
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/buttolog">Rezien</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/landen">Landen</Link>
                <Link to="/overons">Overone</Link>
                

            </div>
            <div className="naviconset">
                <a href="#" className="buttonser mt-3">sign up</a>
                <p><i class="bi bi-person-circle"></i></p>
            </div>
        </div>
        </div>
    )
}

export default Linktime;