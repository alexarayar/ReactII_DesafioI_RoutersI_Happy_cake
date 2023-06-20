import React, { Link } from "react-router-dom"

const NotFound =()=> {
    return (
        <main>
            <h1>404</h1>
            <h2>Pagina no encontrada</h2>
            <Link to="/" className="btn">Home</Link>
        </main>
    )
    
}

export default NotFound