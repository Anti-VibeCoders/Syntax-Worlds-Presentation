import Message from "./Message";
import FastConctacs from "./FastConctacs";
import WorkingHours from "./WorkingHours";

function Conctacs(){
    return(
     <>
     <div className="flex flex-col gap-4 items-center justify-center w-full py-20"> 
        <div className="flex flex-col gap-4 text-center w-full items-center overflow-hidden">
            <label className="text-5xl font-bold bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-transparent text-center max-lg:text-4xl max-md:text-3xl max-sm:text-3xl">Cóntactanos</label>
            <p className="text-sm text-slate-300 font-inter max-w-[70ch] mx-auto text-center max-sm:px-4">¿Tienes preguntas, sugerencias o quiere colaborar con nosotros? estamos aquí para ayudarte y escuchar tus ideas.</p>
        </div>
     <div className=" max-xl:px-6 max-md:flex-col max-md:items-center flex justify-center gap-8 text-white font-inter w-full"> 
        <div className="max-md:w-full">
            <Message/>
        </div>
        <div className="flex flex-col gap-4 items-center w-sm max-md:w-full">
            <FastConctacs/>
            <WorkingHours/>
        </div>
     </div>
     </div>
     
      </>
    )
}

export default Conctacs;