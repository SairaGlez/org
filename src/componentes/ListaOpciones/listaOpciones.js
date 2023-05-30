import "./listaOpciones.css"

const ListaOpciones = (props) => {

    //Método MAP -> arreglo.map((equipo, index) => {
    // return <option></option> 
    // })

    const manejarCambio=(event) => {
        console.log("cambio", event.target.value)
        props.actualizarEquipo(event.target.value)
    }

    /* const equipos= [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y  Gestión"
    ] */

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones