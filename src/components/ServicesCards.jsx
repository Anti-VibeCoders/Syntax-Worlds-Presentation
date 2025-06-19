function ServicesCards({ serviceIcon, serviceTitle, iconClass, serviceDescription, className }) {
    return (
        <>
        <div className={`service-card ${className} flex flex-col bg-slate-800/50 backdrop-blur-sm border-slate-700/50 transition-all duration-300 transform hover:scale-105 border hover:border-purple-500/50`}>
            <div className={`service-icon ${iconClass} mb-2`}>
                { serviceIcon }
            </div>
            <div className="service-title text-white font-bold text-3xl max-xl:text-2xl">
                { serviceTitle }
            </div>
            <div className="service-description">
                { serviceDescription }
            </div>
        </div>
        </>
    )
}

export default ServicesCards