function FastConctacs(){
    const WindowGithub = ()=> window.open("https://github.com/Anti-VibeCoders","_blank");
    
    return(
        <>
        <div className="max-md:w-full flex flex-col gap-4 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 border text-white rounded-2xl p-5 w-full h-full font-inter">
            <b className="text-xl">Contacto Rápido</b>
            <div className="flex gap-2 bg-[#34295c] border border-[#4C3E73] rounded-md p-2 w-auto h-auto">
                <div className="card-icon stroke-puyrple-500 text-purple-500 bg-purple-800/50 p-3 border border-purple-500 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 3q-2.5.5-5 2q-3 5-3 12q2 2.5 6 4q1-1.5 1.5-3.5M7 17q5 2 10 0m-1.5.5q.5 2 1.5 3.5q4-1.5 6-4q0-7-3-12q-2.5-1.5-5-2l-1 2q-2-.5-4 0L9 3"/><circle cx="8" cy="12" r="1"/><circle cx="16" cy="12" r="1"/></g></svg>
                </div>
                <div className="flex flex-col">
                    <b>Discord</b>
                    <label className="text-xs">Unete a nuestro servidor</label>
                </div>
            </div>

            <div className="flex gap-2 bg-[#34295c] border border-[#4C3E73] rounded-md p-2 w-auto h-auto">
                <div className="card-icon stroke-blue-500 text-cyan-500 bg-blue-800/50 p-3 border border-blue-500 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                </div>
                <div className="flex flex-col">
                    <b>Email</b>
                    <label className="text-xs">syntaxworld36@gmail.com</label>
                </div>
            </div>

            <div className="flex gap-2 bg-[#34295c] border border-[#4C3E73] rounded-md p-2 w-auto h-auto" onClick={WindowGithub}>
                <div className="card-icon stroke-green-500 text-green-500 bg-green-800/50 p-3 border border-green-500 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div>
                <div className="flex flex-col">
                    <b>GitHub</b>
                    <label className="text-xs">Unete a nuestro servidor</label>
                </div>
            </div>

        </div>
        </>
    )
}
export default FastConctacs;