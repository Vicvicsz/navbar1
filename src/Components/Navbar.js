import{useRef} from "react";
import{FaBars, FaTimes} from "react-icons/fa";
import "../Styles/Main.css"
import logo from "../imgs/Logo laranja original.png";

function Navbar(){
    const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return( 
        <header>
            <div className="logo-container">    
            <a href="#">        
                <img src={logo} alt="" />
            </a>
            </div>
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Galeria</a>
                <a href="#">Contato</a>
                <button className="nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn"  onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );

}

export default Navbar;