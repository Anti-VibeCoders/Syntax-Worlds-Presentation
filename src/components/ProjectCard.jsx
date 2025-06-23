import { ExternalLink, GitFork, Github, Star, User } from "lucide-react"

function ProjectCard({ ProjectName, ProjectImage = "https://kzmfrjt5vrzr76692jbj.lite.vusercontent.net/placeholder.svg?height=200&width=400", ProjectDescription, ProjectLanguages, ProjectStars, ProjectForks, ProjectParticipants, GithubLink, ProdLink, Tag, TagClass, ClassName}) {
    return (
        <>
            <div className={`project-card rounded-xl w-full h-max relative bg-slate-800/50 backdrop-blur-sm border-slate-700/50 overflow-hidden group ${ClassName}`}>
                <div className="project-tags absolute right-4 top-4">
                    <span className={`${TagClass} px-2 py-1 rounded-full text-xs`}>{Tag}</span>
                </div>
                <div className="proyect-img h-64 w-full mb-3">
                    <img src={ProjectImage} alt={ProjectName} className="w-full h-full object-cover" />
                </div>
                <div className="proyeect-desc px-6 mb-4">
                    <h3 className="text-4xl font-bold leading-normal text-white max-2xl:text-3xl">{ProjectName}</h3>
                    <p className="text-left text-slate-300">{ProjectDescription}</p>
                </div>
                <div className="project-Languages px-6 flex gap-2 mb-4 flex-wrap">
                    {ProjectLanguages.map((language) => {
                        return (
                            <div className="w-max h-max project-languages px-3 py-1 rounded-full border-purple-300/50 bg-purple-600/50 flex justify-center items-center text-xs text-purple-200 font-semibold" key={language}>
                                <span className="text-center">{language}</span>
                            </div>
                        )
                    })}
                </div>
                <div className="project-stats w-full px-6 flex gap-2 mb-4">
                    <div className="stars flex gap-1 items-center text-slate-300">
                        <Star className="text-slate-400 stroke-slate-400 size-4" />
                        <span>{ProjectStars}</span>
                    </div>
                    <div className="stars flex gap-1 items-center text-slate-300">
                        <GitFork className="text-slate-400 stroke-slate-400 size-4" />
                        <span>{ProjectForks}</span>
                    </div>
                    <div className="stars flex gap-1 items-center text-slate-300">
                        <User className="text-slate-400 stroke-slate-400 size-4" />
                        <span>{ProjectParticipants}</span>
                    </div>
                </div>
                <div className="proyect-buttons w-full flex justify-between gap-2 px-6 pb-6">
                    <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white active:scale-100 hover:shadow-lg rounded-md w-full flex cursor-pointer justify-center items-center py-2 font-semibold" onClick={() => {
                        window.open(GithubLink, '_blank')
                    }}>
                        <Github className="w-4 h-4 mr-2 text-white stroke-white" />
                        GitHub
                    </button>
                    <div className="preview-btn w-16">
                        <button className="bg-white flex items-center justify-center rounded-md w-full cursor-pointer h-full hover:bg-purple-300 hover:text-white hover:stroke-white transition-all duration-200" onClick={() => {
                            window.open(ProdLink, '_blank')
                        }}>
                            <ExternalLink className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard