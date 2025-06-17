function WorkingHours(){
    return(
        <>
        <div className="containerHours">
            <Span>Horarios de atención</Span>
            <div className="subConteiner">
                <label>Lunes-Viernes</label><label>9:00 - 18:00 UTC</label>
            </div>
            <div className="subConteiner">
                <label>Sabado</label><label>10:00 - 16:00 UTC</label>
            </div>
            <div className="subConteiner">
                <label>Domingo</label><label>Cerrado</label>
            </div>
            <div className="subConteiner">
                <label>💡 Para respuestas más rapidas, únete a nuestro Discord donde la actividad está activa 24/7.</label>
            </div>
        </div>
        </>
    )
}

export default WorkingHours;