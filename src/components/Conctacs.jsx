import Message from "./Message";
import FastConctacs from "./FastConctacs";
import WorkingHours from "./WorkingHours";
import { gsap, ScrollTrigger } from "../gsap-init";
import { useRef, useEffect } from "react";

function Conctacs() {
    const containerRef = useRef(null);
    const columnsRef = useRef([]);

    useEffect(() => {
        const section = containerRef.current;
        const cols = columnsRef.current;
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
                cols,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.18,
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
    }, []);

    return (
        <>
            <div ref={containerRef} className="contact-container flex flex-col gap-8 items-center justify-center w-full py-16" id="contact-container">
                <div className="flex flex-col gap-4 text-center w-full items-center overflow-hidden">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-transparent text-center max-lg:text-4xl max-md:text-3xl max-sm:text-3xl ;leading-normal">Cóntactanos</h2>
                    <p className="text-base max-md:text-base text-slate-300 font-inter max-w-[70ch] mx-auto text-center max-sm:px-4">¿Tienes preguntas, sugerencias o quiere colaborar con nosotros? estamos aquí para ayudarte y escuchar tus ideas.</p>
                </div>
                <div className=" max-xl:px-6 max-md:flex-col max-md:items-center flex justify-center gap-8 text-white font-inter w-full">
                    <div ref={el => columnsRef.current[0] = el} className="max-md:w-full w-2xl">
                        <Message />
                    </div>
                    <div ref={el => columnsRef.current[1] = el} className="flex flex-col gap-4 items-center w-sm max-md:w-full">
                        <FastConctacs />
                        <WorkingHours />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Conctacs;