export default function Contacto(){

    return(
       
        <div className="layout__contacto">
            <h2 className="contacto__h2">Cuentanos, ¿en que te podemos ayudar?</h2>
            
            <form className="contacto__form">
                <span>Correo:</span>
                <input id="inputCorreo" type="text" placeholder="name@example.com"></input> 
                <span>Descripcion: </span>
                <textarea id="inputArea"></textarea>

                <button style={{marginTop:"1rem", padding:"1.2rem"}}> Enviar </button>
            </form>

        </div>
    
    )

}