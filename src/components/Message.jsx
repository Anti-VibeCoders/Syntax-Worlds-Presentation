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
            <select>
                <Option value = "">Selecciona un tema</Option>
                <Option value = "Question">Preguntas</Option>
                <Option value = "Service">Servicios</Option>
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