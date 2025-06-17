import { ArrowRight, Code, Globe, MessageCircle } from "lucide-react";

function Hero() {
    return (
        <>
            <section className="hero-container relative h-[88dvh] overflow-hidden">
                <div className="code-card w-max h-max absolute left-30 top-40 p-3 rounded-lg flex items-center justify-center bg-purple-600/70 border-purple-400 border opacity-15 hover:scale-105 transition-all duration-200 cursor-pointer active:scale-100 float">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z" /><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330" /></svg>                </div>
                <div className="code-card w-max h-max absolute left-65 max-2xl:left-50 bottom-30 p-3 rounded-lg flex items-center justify-center bg-purple-600/70 border-purple-400 border opacity-15 hover:scale-105 transition-all duration-200 cursor-pointer active:scale-100 float">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="16 16 32 32"><path fill="url(#a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z" /><path fill="url(#b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z" /><defs><linearGradient id="a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8" /><stop offset="1" stop-color="#366994" /></linearGradient><linearGradient id="b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052" /><stop offset="1" stop-color="#FFC331" /></linearGradient></defs></svg>                </div>
                <div className="world-card code-card w-max absolute right-22 top-32 opacity-15 h-max p-3 rounded-lg flex items-center justify-center bg-purple-600 border-purple-400 border hover:scale-105 transition-all duration-200 cursor-pointer active:scale-100 float reverse-float">
                    <svg viewBox="0 0 256 199" width="24" height="24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2" /></svg>                </div>
                <div className="world-card code-card w-max absolute right-75 max-2xl:right-50 max-2xl:bottom-50 bottom-70 opacity-15 h-max p-3 rounded-lg flex items-center justify-center bg-purple-600 border-purple-400 border hover:scale-105 transition-all duration-200 cursor-pointer active:scale-100 float reverse-float">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid" viewBox="0 -1.43 255.58 290.11"><path fill="#a179dc" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76a24.4 24.4 0 0 0-9.24-9C209.17 43.05 175.1 23.5 141.1 3.86c-9.17-5.3-18.06-5.1-27.16.27-13.54 7.98-81.35 46.83-101.55 58.53C4.06 67.5.02 74.87 0 84.44v118.37c0 4.72 1 8.9 2.99 12.51 2.05 3.72 5.17 6.82 9.38 9.26 20.21 11.7 88.02 50.55 101.56 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25c1.99-3.61 2.98-7.8 2.98-12.52l-.01-118.35"/><path fill="#280068" d="M128.18 143.24 2.98 215.33c2.06 3.7 5.18 6.8 9.4 9.25 20.2 11.7 88.01 50.55 101.55 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25z"/><path fill="#390091" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76l-124.26 71.55 124.41 72.07c2-3.6 2.99-7.79 3-12.51 0 0 0-78.9-.02-118.35"/><g fill="#fff"><path d="M201.9 116.3v13.47h13.47v-13.48h6.73v13.48h13.48v6.73H222.1v13.48h13.48v6.74H222.1v13.47h-6.73V156.7h-13.48v13.48h-6.73V156.7h-13.48v-6.73h13.47V136.5h-13.47v-6.74h13.47v-13.48zm13.47 20.2h-13.48v13.48h13.48z"/><path d="M128.46 48.63a94.96 94.96 0 0 1 82.26 47.45l-.16-.27-41.35 23.8A47.28 47.28 0 0 0 129 96.33h-.54a47.3 47.3 0 0 0-47.3 47.3 47.08 47.08 0 0 0 6.23 23.47 47.28 47.28 0 0 0 82.29-.27l-.2.35 41.29 23.91a94.97 94.97 0 0 1-81.25 47.54h-1.06a94.96 94.96 0 0 1-95-95 95 95 0 0 1 95-95z"/></g></svg>
                </div>
                <div className="text-section flex flex-col items-center justify-center h-full">
                    <div className="badge flex items-center font-semibold gap-2 border-purple-500 border bg-purple-500/20 backdrop-blur-2xl rounded-full px-4 py-2 text-purple-200 cursor-pointer hover:-translate-y-0.5 transition-all duration-200 active:-translate-y-0 hover:border-purple-400 mb-4">
                        <Code className="w-5 h-5" />
                        Syntax World Development Team
                    </div>
                    <div className="title flex flex-col gap-6 items-center justify-center">
                        <h1 className="text-center text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-1.2 max-2xl:text-7xl">Desarrollo de Software <span className="block bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">a Medida</span></h1>
                        <div className="text flex flex-col gap-8">
                            <p className="text-xl max-w-[70ch] text-center text-gray-200">
                                Creamos soluciones de software innovadoras y personalizadas para tu negocio. Desde aplicaciones web hasta bots inteligentes, impulsamos tu éxito con tecnología de vanguardia.
                            </p>
                            <div className="buttons flex justify-center gap-4 items-center">
                                <button
                                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-full w-max flex cursor-pointer justify-center items-center py-3 px-12 font-semibold hover:scale-[1.02] active:scale-100 transition-all duration-200"
                                    onClick={() => {
                                        document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' })
                                    }}>
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Solicitar Cotización
                                </button>
                                <button className="bg-white text-purple-400 border border-purple-500 rounded-full w-max flex justify-center items-center h-max px-12 py-3 gap-4 cursor-pointer hover:bg-purple-300 transition-all duration-200 hover:text-white">
                                    Ver Portfolio <ArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
