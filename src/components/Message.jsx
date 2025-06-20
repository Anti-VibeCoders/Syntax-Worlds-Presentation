import { useState } from "react";
import emailjs from "@emailjs/browser";
emailjs.init("46EUndvdqXr8Qw5xt");

function Message() {
  const [activate, setActivate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    service: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const activateService = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, subject: value, service: value === "Service" ? formData.service : "" });
    setActivate(value === "Service");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    // Validación de campos obligatorios
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Validación básica del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Por favor, ingresa un email válido.");
      return;
    }

    emailjs
      .send(
        "service_cuei0zl", // Service ID
        "template_ydnttub", // Template ID
        {
          name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          service: formData.service || "N/A", // Incluye el servicio si existe
        },
        "46EUndvdqXr8Qw5xt" // Public Key
      )
      .then(
        () => {
          setStatus("Correo enviado con éxito");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            service: "",
          });
          setActivate(false);
          setTimeout(() => setStatus(""), 3000); // Limpia el mensaje después de 3 segundos
        },
        (error) => {
          setStatus(`Error al enviar el correo: ${error.message || "Desconocido"}`);
        }
      );
  };

    return(
        <>
        <div className="max-md:w-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 border text-white rounded-2xl p-5 w-full h-full font-inter">
            <b className="text-xl">Envíanos un mensaje</b><br/>
         <label className="text-xs">Completa el formulario y te responderemos lo antes posible</label>
         
            <form className="my-4" >
                <div className="max-sm:flex-col flex max-w-full gap-4 mb-3">
                    <div className="flex-1">
                     <b className="">Nombre</b><br/>
                     <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Tu nombre" className="bg-[#2C2152] border border-[#4C3E73] rounded-md w-full px-3 py-2"/>
                   </div>
               <div className="flex-1">
                <b>Email</b><br/>
               <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="tu@gmail.com" className="bg-[#2C2152] border border-[#4C3E73] rounded-md w-full px-3 py-2"/>
            </div>
                </div>
                <b className="">Asunto</b>
            <div className="flex flex-col gap-3 mb-3">
                <select name="subject" className="bg-[#2C2152] border border-[#4C3E73] rounded-md p-2" onChange={activateService}>
                  <option value = "">Selecciona un tema</option>
                  <option value = "Question">Preguntas</option>
                  <option value = "Service">Servicios</option>
                  <option value = "suggestion">Sugerencias</option>
                  <option value = "Other">Otros</option>

                </select>
                <select name="service" value={formData.service} onChange={handleChange} className={`bg-[#2C2152] border border-[#4C3E73] rounded-md p-2 text-slate-300 ${!activate ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!activate}>
                  <option value = "">Selecciona un Servicio</option>
                  <option value = "Site Web">Sitio WEB</option>
                  <option value = "Bot-discord">Bot de discord</option>
                  <option value = "Other">Otros</option>
                </select>
                   
            </div>
             <b>Mensaje</b>
               <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Cuéntanos en qué podemos ayudarte..." className="bg-[#2C2152] border border-[#4C3E73] rounded-md w-full h-[150px] p-4 mb-4"/>
            <button type="submit" onClick={sendEmail} className="flex w-full justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-md py-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
               <b>Enviar mensaje</b>
            </button>
         </form>
         
        </div>
        </>       
    )
}

export default Message;