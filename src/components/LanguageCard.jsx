function LanguageCard({ className, languageIcon, languageName }) {
    return (
        <>
        <div className={`${className} flex flex-col items-center justify-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10`}>
            {languageIcon}
            <h3>{languageName[0].toUpperCase() + languageName.slice(1)}</h3>
        </div>
        </>
    )
}

export default LanguageCard