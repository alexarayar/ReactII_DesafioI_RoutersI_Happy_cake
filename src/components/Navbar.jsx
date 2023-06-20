import { Link } from "react-router-dom"

const Navbar= () => {
    return (
   <header>
    <nav>
        <ul>

            <li>
                <Link to="/"><i className="fa-sharp fa-solid fa-house-user"></i>Home</Link>
            </li>

            <li>
                <Link to="/contacto"><i className="fa-sharp fa-solid fa-phone"></i>Contacto</Link>
            </li>
        </ul>
    </nav>

        <Link to="/" className="logo"><h3>Happy Cake</h3><i className="fa-solid fa-cake-candles"></i>
        </Link>
   </header>
    )
    }
    
    export default Navbar