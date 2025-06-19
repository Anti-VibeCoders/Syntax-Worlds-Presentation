function Timeline({ className, numberClass, Number, Title, Description }) {
    return (
        <>
        <div className={`timeline-container ${className} flex flex-col items-center justify-center bg-transparent gap-4`}>
            <div className={`number-icon rounded-full ${numberClass} size-18 flex justify-center items-center`}>
                <span className="rounded-full text-center">{Number}</span>
            </div>
            <div className="timeline-text flex flex-col items-center justify-center gap-3">
                <h4 className="text-white text-center font-bold text-2xl max-xl:text-xl">{Title}</h4>
                <p className="text-slate-400 text-center max-w-[40ch] mx-auto">{Description}</p>
            </div>
        </div>
        </>
    )
}

export default Timeline