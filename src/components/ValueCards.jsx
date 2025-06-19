function ValueCards({ className, Icon, Title, Description, iconClass }) {
    return (
        <>
        <div className={`value-cards bg-slate-800/50 backdrop-blur-sm border-slate-700/50 border hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-center gap-6 px-8 py-10 rounded-2xl ${className}`}>
        <div className="top-card flex gap-4 justify-start items-center">
            <div className={`icon ${iconClass}`}>
                {Icon}
            </div>
            <h2 className="text-3xl font-bold bg-linear-to-r from-purple-100 via-white to-purple-200 bg-clip-text text-transparent max-xl:text-2xl max-md:text-xl">{Title}</h2>
        </div>
        <div className="description flex justify-start items-center">
            <p className="text-slate-400 text-lg max-xl:text-base">{Description}</p>
        </div>
        </div>
        </>
    )
}

export default ValueCards