import { Code, MessageCircle } from "lucide-react";

function Header() {
    return (
        <>
            <header className="w-full h-15 flex items-center justify-around bg-white/5 backdrop-blur-2xl max-md:justify-between max-md:px-4 header fixed top-0 z-50">
                <div className="header-left">
                    <a href="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Code className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Syntax World
                        </span>
                    </a>
                </div>
                <div className="header-center flex gap-8 items-center text-gray-200 max-md:hidden">
                    <a className="hover:text-gray-300 transition-colors duration-200 cursor-pointer" onClick={() => {
                        document.querySelector('.hero-container').scrollIntoView({ behavior: 'smooth' })
                    }}>Inicio</a>
                    <a className="hover:text-gray-300 transition-colors duration-200 cursor-pointer" onClick={() => {
                        document.querySelector('.portfolio-container').scrollIntoView({ behavior: 'smooth' })
                    }}>Proyectos</a>
                    <a className="hover:text-gray-300 transition-colors duration-200 cursor-pointer" onClick={() => {
                        document.querySelector('.about-container').scrollIntoView({ behavior: 'smooth' })
                    }}>Nosotros</a>
                    <a className="hover:text-gray-300 transition-colors duration-200 cursor-pointer" onClick={() => {
                        document.querySelector('.contact-container').scrollIntoView({ behavior: 'smooth' })
                    }}>Contacto</a>
                </div>
                <div className="header-right">
                    <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-full w-max flex cursor-pointer justify-center items-center py-2 px-4" onClick={() => {
                        document.querySelector('.contact-container').scrollIntoView({ behavior: 'smooth' })
                    }}>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Cotización
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;