function Message(){
    return(
        <>
        <div>
            <h4>Envíanos un mensaje</h4>
         <label>Completa el formulario y te responderemos lo antes posible</label>
         <form>
            <label>Nombre</label>
             <input type="text" />
            <label>Email</label>
             <input type="email" />
            <label>Asunto</label>
            <select className="selectAffair">
                <Option value = "">Selecciona un tema</Option>
                <Option value = "Question">Preguntas</Option>
                <Option value = "Service">Servicios</Option>
                <Option value = "suggestion">Sugerencias</Option>
            </select>
            <select className="selectService">
                <Option value = "">Selecciona un Servicio</Option>
                <Option value = "Web">Sitio WEB</Option>
                <Option value = "Bot-discord">Bot de discord</Option>
                <Option value = "Other">Otros</Option>
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