function WorkingHours() {
    return (
        <>
            <div className=" max-md:w-full flex flex-col gap-4 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 border text-white rounded-2xl p-5 w-full h-full font-inter">
                <b className="text-xl">Horarios de atención</b>
                <div className="flex justify-between text-sm">
                    <span className="text-[#7a7396]">Lunes-Viernes</span><b>9:00 - 18:00 UTC</b>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-[#7a7396]">Sábado</span><b>10:00 - 16:00 UTC</b>
                </div>
                <div className="flex justify-between text-sm text-[#7a7396]">
                    <span>Domingo</span><span className="text-red-500 font-semibold">Cerrado</span>
                </div>
                <div className="bg-[#3c2b64] border border-[#7f57a7] rounded-lg px-4 py-2 flex justify-center items-center">
                    <p className="text-xs leading-normal text-[#c290f4]">💡 Para respuestas más rapidas, únete a nuestro Discord donde la actividad está activa 24/7.</p>
                </div>
            </div>
        </>
    )
}

export default WorkingHours;