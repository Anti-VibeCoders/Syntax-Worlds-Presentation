import { ArrowRight, MessageCircle } from "lucide-react"
import ProjectCard from "./ProjectCard"
import { gsap, ScrollTrigger } from "../gsap-init"
import { useRef, useEffect } from "react"

function Portfolio() {

    const projects = [
        {
            name: 'Vibe',
            image: '/screenshots/vibe-screenshot.webp',
            description: 'Una red social minimalista en la cual podrás conectar con todos tus seres queridos.',
            projectLanguages: ['React', 'TypeScript', 'ShadCN', 'TailwindCSS', 'Framer Motion', 'Python', 'Django'],
            projectStars: 0,
            projectForks: 0,
            projectParticipants: 5,
            githubLink: 'https://github.com/Anti-VibeCoders/vibe',
            prodLink: '',
            tag: 'En Desarrollo',
            tagsClass: 'border border-yellow-500 bg-yellow-300/50 text-yellow-500'
        },
        {
            name: 'ClearMeet',
            image: '/screenshots/clearmeet-screnshot.webp',
            description: 'Una aplicación para escanear reuniones, sacar resúmenes empresariales, analizar emociones y brindar recomendaciones.',
            projectLanguages: ['React', 'TypeScript', 'ShadCN', 'TailwindCSS', 'GSAP', 'Python', 'FastAPI'],
            projectStars: 0,
            projectForks: 0,
            projectParticipants: 3,
            githubLink: 'https://github.com/Anti-VibeCoders/clearmeet',
            prodLink: '',
            tag: 'En Desarrollo',
            tagsClass: 'border border-yellow-500 bg-yellow-300/50 text-yellow-500'
        },
        {
            name: 'Flomeco SRL',
            image: '/screenshots/flomeco-screenshot.webp',
            description: 'Página web de una empresa vendedora de productos y servicios agrícolas ecológicos de alta calidad.',
            projectLanguages: ['React', 'NextJS', 'TypeScript', 'TailwindCSS', 'GSAP', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase'],
            projectStars: 1,
            projectForks: 1,
            projectParticipants: 2,
            githubLink: 'https://github.com/JunLovin/floco',
            prodLink: 'https://v0-flomeco-website-design.vercel.app/',
            tag: 'Completada',
            tagsClass: 'border border-blue-500 bg-blue-300/50 text-blue-500'
        }
    ]

    const portfolioRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        const section = portfolioRef.current;
        const cards = cardsRef.current;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                section,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
            gsap.fromTo(
                cards,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: "power2.out",
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, section);
        return () => ctx.revert();
    }, [])

    return (
        <>
            <div ref={portfolioRef} className="portfolio-container h-auto w-full px-4 py-20 flex flex-col gap-10">
                <div className="portfolio-top flex flex-col gap-2">
                    <h2 className="text-5xl font-bold bg-linear-to-r from-pink-300 via-pink-50 to-blue-300 bg-clip-text text-transparent text-center leading-normal max-md:text-4xl max-sm:text-3xl">Nuestro Portafolio</h2>
                    <p className="text-xl text-center max-w-[70ch] mx-auto text-slate-300 max-sm:text-base">Descubre los increíbles proyectos que hemos desarrollado para nuestros clientes. Desde bots de Discord hasta aplicaciones web completas.</p>
                </div>
                <div className="projects-container grid grid-cols-3 w-full gap-10 h-max max-xl:grid-cols-2 max-md:grid-cols-1 px-12 max-sm:px-0">
                    {projects.map((project, idx) => {
                        return (
                            <div ref={el => cardsRef.current[idx] = el} key={project.name}>
                                <ProjectCard ProjectName={project.name} ProjectImage={project.image} ProjectDescription={project.description} ProjectLanguages={project.projectLanguages} ProjectStars={project.projectStars} ProjectForks={project.projectForks} ProjectParticipants={project.projectParticipants} GithubLink={project.githubLink} ProdLink={project.prodLink} Tag={project.tag} TagClass={project.tagsClass} />
                            </div>
                        )
                    })}
                </div>
                <div className="ask-for-project flex flex-col gap-6 w-[90%] justify-center items-center py-20 mx-auto rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 max-sm:w-full">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-transparent text-center max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">¿Tienes una idea para un proyecto?</h2>
                    <p className="text-slate-300 max-w-[70ch] mx-auto text-center text-lg max-lg:px-4 max-md:text-base">¿Buscas un socio tecnológico para llevar tu idea al siguiente nivel? Contáctanos para discutir tus necesidades y cómo podemos ayudarte.</p>
                    <div className="buttons flex justify-center gap-4 max-md:w-full items-center max-sm:flex-col max-sm:items-center max-sm:justify-center">
                        <button
                            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white hover:scale-[1.02] active:scale-100 hover:shadow-lg hover:shadow-purple-300/20 transition-all duration-200 rounded-md w-max flex px-12 cursor-pointer justify-center items-center py-3 font-semibold"
                            onClick={() => {
                                document.querySelector('.contact-container').scrollIntoView({ behavior: 'smooth' })
                            }}>
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Solicitar Cotización
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio