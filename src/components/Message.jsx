import { useState } from "react";

function Message(){

    return(
        <>
        <div className="max-md:w-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 border text-white rounded-2xl p-5 w-full h-full font-inter">
            <b className="text-xl">Envíanos un mensaje</b><br/>
         <label className="text-xs">Completa el formulario y te responderemos lo antes posible</label>
         
            <form className="my-4">
                <div className="max-sm:flex-col flex max-w-full gap-4 mb-3">
                    <div className="flex-1">
                     <b className="">Nombre</b><br/>
                     <input type="text" placeholder="Tu nombre" className="bg-[#2C2152] border border-[#4C3E73] rounded-md w-full px-3 py-2"/>
                   </div>
               <div className="flex-1">
                <b>Email</b><br/>
               <input type="email" placeholder="tu@gmail.com" className="bg-[#2C2152] border border-[#4C3E73] rounded-md w-full px-3 py-2"/>
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
                <select className="bg-[#2C2152] border border-[#4C3E73] rounded-md p-2 text-slate-300 opacity-50 cursor-not-allowed" disabled>
                  <option value = "">Selecciona un Servicio</option>
                  <option value = "Web">Sitio WEB</option>
                  <option value = "Bot-discord">Bot de discord</option>
                  <option value = "Other">Otros</option>
                </select>
                   
            </div>
             <b>Mensaje</b>
               <textarea placeholder="Cuéntanos en qué podemos ayudarte..." className="bg-[#2C2152] border border-[#4C3E73] rounded-md w-full h-[150px] p-4 mb-4"/>
            <button className="flex w-full justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-md py-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
               <b>Enviar mensaje</b>
            </button>
         </form>
         
        </div>
        </>       
    )
}

export default Message;