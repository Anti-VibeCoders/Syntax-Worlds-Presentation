function Message(){
    return(
        <>
        <div>
            <h4>Envíanos un mensaje</h4>
         <label>Completa el formulario y te responderemos lo antes posible</label>
         <form>
            <label className="">Nombre</label>
             <input type="text" />
            <label>Email</label>
             <input type="email" />
            <label>Asunto</label>
            <select>
                <option value = "">Selecciona un tema</option>
                <option value = "Question">Preguntas</option>
                <option value = "Service">Servicios</option>
                <option value = "suggestion">Sugerencias</option>
            </select>
            <select>
                <option value = "">Selecciona un Servicio</option>
                <option value = "Web">Sitio WEB</option>
                <option value = "Bot-discord">Bot de discord</option>
                <option value = "Other">Otros</option>
            </select>

            <label>Mensaje</label>
             <input type="text" />
            <button>Enviar mensaje</button>
         </form>
        </div>
        </>       
    )
}

export default Message;