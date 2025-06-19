function InfoCards({ className, Icon, CardTitle, CardDescription, iconClass }) {
    return (
        <>
        <div className={`info-card w-full h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 text-center hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${className} px-4 py-8 flex justify-center items-center gap-4 flex-col rounded-xl border hover:border-purple-500/50`}>
            <div className={`card-icon ${iconClass}`}>
                {Icon}
            </div>
            <div className="card-text flex flex-col gap-2 items-center justify-center">
                <h3 className="text-white font-bold text-center text-4xl max-md:text-3xl">{CardTitle}</h3>
                <p className="text-slate-400 text-center">{CardDescription}</p>
            </div>
        </div>
        </>
    )
}

export default InfoCards