import { Code, Globe, Heart, Lightbulb, Rocket, UserPlus, Users, Zap } from "lucide-react"
import InfoCards from "./InfoCards"
import ValueCards from "./ValueCards"
import TeamCard from "./TeamCard"
import Timeline from "./Timeline"

function About() {

    const info = [
        {
            icon: <UserPlus />,
            iconClass: "stroke-puyrple-500 text-purple-500 bg-purple-800/50 p-3 border border-purple-500 rounded-lg",
            title: '10+',
            description: 'Clientes Satisfechos'
        },
        {
            icon: <Globe />,
            iconClass: "stroke-green-500 text-green-500 bg-green-800/50 p-3 border border-green-500 rounded-lg",
            title: '1+',
            description: 'Años de Experiencia'
        },
        {
            icon: <Zap />,
            iconClass: "stroke-yellow-500 text-yellow-500 bg-yellow-800/50 p-3 border border-yellow-500 rounded-lg",
            title: '500k+',
            description: 'Líneas de código'
        }
    ]

    const values = [
        {
            icon: <Heart />,
            iconClass: "stroke-purple-500 text-purple-500 bg-purple-800/50 p-3 border border-purple-500 rounded-lg",
            title: "Excelencia en el Código",
            description: "Nos esforzamos por escribir código limpio, eficiente y mantenible. La calidad es nuestra prioridad",
        },
        {
            icon: <Users />,
            iconClass: "stroke-purple-500 text-purple-500 bg-purple-800/50 p-3 border border-purple-500 rounded-lg",
            title: "Compromiso con el Cliente",
            description: "Entendemos las necesidades de nuestros clientes y trabajamos en estrecha colaboración para superar sus expectativas.",
        },
        {
            icon: <Lightbulb />,
            iconClass: "stroke-purple-500 text-purple-500 bg-purple-800/50 p-3 border border-purple-500 rounded-lg",
            title: "Innovación Constante",
            description: "Buscamos continuamente nuevas formas de mejorar nuestros procesos y ofrecer soluciones innovadoras.",
        },
        {
            icon: <Rocket />,
            iconClass: "stroke-purple-500 text-purple-500 bg-purple-800/50 p-3 border border-purple-500 rounded-lg",
            title: "Entrega a Tiempo",
            description: "Cumplimos nuestros plazos y entregamos proyectos a tiempo, sin comprometer la calidad.",
        },
    ]

    const team = [
        {
            icon: '/team/lobo.webp',
            name: 'Santiago Parra',
            description: 'Lobosanplay',
            tags: ["Backend Developer"]
        },
        {
            icon: '/team/aram.webp',
            name: "Aram Musset",
            description: "RamCode",
            tags: ["Backend Developer", "Future Full-Stack Dev"]
        },
        {
            icon: '/team/jota.webp',
            name: "Jeferson Ramos",
            description: "Jota",
            tags: ["Backend Developer", "C# Developer"]
        },
        {
            icon: '/team/said.webp',
            name: "Said Ruíz",
            description: "JunLovin",
            tags: ["Full-Stack Developer"]
        }
    ]

    const timeline = [
        {
            numberClass: 'stroke-purple-500 text-purple-500 bg-purple-800/50 border border-purple-500 text-3xl max-xl:text-2xl font-bold',
            number: 2024,
            title: 'Fundación',
            description: 'Syntax World se fundó con la visión de ofrecer soluciones de software innovadoras.'
        },
        {
            numberClass: 'stroke-blue-500 text-cyan-500 bg-blue-800/50 border border-blue-500 text-3xl max-xl:text-2xl font-bold',
            number: 2025,
            title: 'Expansión',
            description: 'Ampliamos nuestros servicios y comenzamos a trabajar con clientes internacionales.'
        },
    ]

    return (
        <>
            <div className="about-container py-20 flex flex-col gap-12 items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div className="about-text flex justify-center items-center flex-col">
                    <h2 className="text-5xl font-bold bg-linear-to-r from-purple-300 via-purple-50 to-blue-500 bg-clip-text text-transparent leading-normal mb-2 text-center max-sm:text-3xl max-xl:text-4xl">Conoce a Syntax World</h2>
                    <p className="text-slate-300 text-xl max-w-[70ch] text-center mx-auto max-md:text-base max-md:px-4">Somos un equipo de desarrollo de software dedicado a ofrecer soluciones innovadoras y de alta calidad a nuestros clientes.</p>
                </div>
                <div className="info-cards grid grid-cols-3 gap-12 w-full px-12 max-2xl:gap-8 max-xl:grid-cols-2 max-md:grid-cols-1">
                    {info.map(inf => {
                        return (
                            <InfoCards Icon={inf.icon} CardTitle={inf.title} CardDescription={inf.description} iconClass={inf.iconClass} key={inf.title} />
                        )
                    })}
                </div>
                <div className="ask-for-team flex flex-col gap-6 w-[90%] justify-center items-center py-20 mx-auto rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-transparent text-center max-lg:text-4xl max-md:text-3xl max-sm:text-3xl">Nuestra Misión</h2>
                    <p className="text-slate-300 max-w-[80ch] mx-auto text-center text-lg max-lg:px-4 max-md:text-base">En Syntax World, nuestra misión es proporcionar servicios de desarrollo de software excepcionales que impulsen el éxito de nuestros clientes. Nos comprometemos a ofrecer soluciones personalizadas, innovadoras y de alta calidad que superen sus expectativas.</p>
                </div>
                <div className="valores flex flex-col gap-12 justify-center items-center mt-8">
                    <h3 className="text-center text-4xl bg-linear-to-r from-purple-200 via-white to-purple-300 bg-clip-text text-transparent font-bold">Nuestra Valores</h3>
                    <div className="valores-cards grid grid-cols-2 gap-8 grid-rows-2 w-full px-12 max-lg:grid-cols-1">
                        {values.map(value => {
                            return (
                                <ValueCards Icon={value.icon} Title={value.title} Description={value.description} iconClass={value.iconClass} key={value.title} />
                            )
                        })}
                    </div>
                </div>
                <div className="team flex flex-col gap-12 justify-center items-center mt-8">
                    <h3 className="text-center text-4xl bg-linear-to-r from-purple-200 via-white to-purple-300 bg-clip-text text-transparent font-bold">Nuestro Equipo</h3>
                    <div className="valores-cards grid grid-cols-4 max-xl:grid-cols-3 gap-8 w-full px-12 max-lg:grid-cols-2 max-md:grid-cols-1">
                        {team.map(member => {
                            return (
                                <TeamCard pfp={member.icon} Name={member.name} About={member.description} Badges={member.tags} key={member.name} />
                            )
                        })}
                    </div>
                </div>
                <div className="our-history bg-slate-800/50 backdrop-blur-sm border-slate-700/50 flex justify-center items-center flex-col w-[97%] mx-auto rounded-xl py-8 px-8 gap-10">
                    <h3 className="font-bold bg-linear-to-r from-purple-200 via-white to-purple-300 bg-clip-text text-transparent text-3xl">Nuestra Historia</h3>
                    <div className="timeline grid grid-cols-2 gap-12 max-md:grid-cols-2 max-sm:grid-cols-1">
                        {timeline.map(time => {
                            return (
                                <Timeline key={time.title} Number={time.number} Title={time.title} Description={time.description} numberClass={time.numberClass} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About