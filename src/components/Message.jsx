function Message(){
    return(
        <>
        <div className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 border text-white rounded-2xl p-5 w-3/5 h-auto">
            <b className="text-xl">Envíanos un mensaje</b><br/>
         <label className="text-xs">Completa el formulario y te responderemos lo antes posible</label>
         
            <form className="my-4">
                <div className="flex max-w-full gap-4 mb-3">
                    <div className="flex-1">
                     <b className="">Nombre</b><br/>
                     <input type="text" placeholder="Tu nombre" className="bg-[#2C2152] border border-[#4C3E73] rounded-md w-full p-2"/>
                   </div>
               <div className="flex-1">
                <b>Email</b><br/>
               <input type="email" placeholder="Tu@gmail.com" className="bg-[#2C2152] border border-[#4C3E73] rounded-md w-full p-2"/>
            </div>
                </div>
                <b className="">Asunto</b>
            <div className="flex flex-col gap-3 mb-3">
                <select className="bg-[#2C2152] border border-[#4C3E73] rounded-md p-2">
                  <option value = "">Selecciona un tema</option>
                  <option value = "Question">Preguntas</option>
                  <option value = "Service">Servicios</option>
                  <option value = "suggestion">Sugerencias</option>
                  <option value = "Other">Otros</option>

                </select>
                <select className="bg-[#2C2152] border border-[#4C3E73] rounded-md p-2">
                  <option value = "">Selecciona un Servicio</option>
                  <option value = "Web">Sitio WEB</option>
                  <option value = "Bot-discord">Bot de discord</option>
                  <option value = "Other">Otros</option>
                </select>
                   
            </div>
             <b>Mensaje</b>
               <textarea placeholder="Cuéntanos en que podemos ayudarte..." className="bg-[#2C2152] border border-[#4C3E73] rounded-md w-full h-[150px] p-0.5 mb-4"/>
            <button className="w-full text-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-md py-1"> Enviar mensaje</button>
         </form>
         
        </div>
        </>       
    )
}

export default Message;