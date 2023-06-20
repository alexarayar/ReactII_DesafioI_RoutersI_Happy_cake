import { Link } from "react-router-dom"

const Contacto= () => {
    return(
     <main>
        <h1>Cuentanos, ¿en que podemos ayudarte?</h1>
        <form>
            <label htmlFor="email" className="form-label">Correo:</label>
            <input className="form-input" type="email" placeholder="name@example.com" />
            <label htmlFor="descripcion" className="form-label">Descripción:</label>
            <textarea id="descripcion" className="form-textarea" placeholder="Ingresa tu descripción"></textarea>
            <button className="btn btn-submit">Enviar</button>

        </form>

    </main>
    )
}


export default Contacto