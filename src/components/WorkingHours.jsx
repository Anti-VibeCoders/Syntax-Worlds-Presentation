function WorkingHours(){
    return(
        <>
          <div className=" max-md:w-full flex flex-col gap-4 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 border text-white rounded-2xl p-5 w-full h-full font-inter">
            <b className="text-xl">Horarios de atención</b>
            <div className="flex justify-between text-sm">
                <label className="text-[#7a7396]">Lunes-Viernes</label><b>9:00 - 18:00 UTC</b>
            </div>
            <div className="flex justify-between text-sm">
                <label className="text-[#7a7396]">Sabado</label><b>10:00 - 16:00 UTC</b>
            </div>
            <div className="flex justify-between text-sm text-[#7a7396]">
                <label>Domingo</label><label>Cerrado</label>
            </div>
            <div className="bg-[#3c2b64] border border-[#7f57a7] rounded-lg px-2 py-1">
                <label className="text-xs text-[#c290f4]">💡 Para respuestas más rapidas, únete a nuestro Discord donde la actividad está activa 24/7.</label>
            </div>
          </div>
        </>
    )
}

export default WorkingHours;