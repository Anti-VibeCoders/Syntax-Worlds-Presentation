import { Code, MessageCircle } from "lucide-react";

function Header() {
    return (
        <>
            <header className="w-full h-15 flex items-center justify-around bg-gray-700/50 backdrop-blur-lg">
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
                <div className="header-center flex gap-8 items-center text-gray-200">
                    <a href="#" className="hover:text-gray-300 transition-colors duration-200">Inicio</a>
                    <a href="#" className="hover:text-gray-300 transition-colors duration-200">Proyectos</a>
                    <a href="#" className="hover:text-gray-300 transition-colors duration-200">Nosotros</a>
                    <a href="#" className="hover:text-gray-300 transition-colors duration-200">Contacto</a>
                </div>
                <div className="header-right">
                    <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-full w-max flex cursor-pointer justify-center items-center py-2 px-4" onClick={() => {
                        document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' })
                    }}>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contáctanos
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;