import { useState } from "react"
import ImagePreviewPortal from "./ImagePreviewPortal"

function TeamCard({ className, pfp, Name, About, Badges, GitUser }) {
    const [activePfp, setActivePfp] = useState(false)

    return (
        <>
            <div className={`bg-slate-800/50 backdrop-blur-sm border-slate-700/50 border hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 text-center ${className} flex flex-col items-center justify-center px-6 py-8 rounded-xl gap-4`} >
                <div className="pfp flex justify-center items-center cursor-pointer" onClick={() => {
                    setActivePfp(true)
                }}>
                    <div className="image size-26 rounded-full border border-purple-500/50">
                        <img src={pfp} className="w-full h-full rounded-full" />
                    </div>
                </div>
                <div className="user-info flex flex-col gap-2">
                    <h3 className="text-2xl font-bold bg-linear-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent text-center cursor-pointer" onClick={() => {
                        window.open(`https://github.com/${GitUser}`, '_blank')
                    }}>{Name}</h3>
                    <p className="text-purple-300/70 text-center font-semibold">{About}</p>
                </div>
                <div className="badges flex justify-center flex-wrap gap-3">
                    {Badges.map(badge => {
                        return (
                            <div className="w-max h-max project-languages px-3 py-1 rounded-full border border-blue-500 bg-blue-700/40 flex justify-center items-center text-xs text-cyan-400 font-semibold" key={badge}>
                                <span className="text-center">{badge}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <ImagePreviewPortal open={activePfp} src={pfp} onClose={() => setActivePfp(false)} />
        </>
    )
}

export default TeamCard