import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo.js"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo,actualizarTitulo] =useState ("")
    const [color, actualizarColor] =useState("")

    const {registrarColaborador,crearEquipo} = props

    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log ("Manejar envio",)
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto:foto,
            equipo
        }
       registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEqipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
            <form onSubmit={manejarEnvio} >
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
                />             
                <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
                />
                <Campo
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto}
                actualizarValor={actualizarFoto}
                />
                <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
                />
                <Boton texto="Crear" />
            </form>
            <form onSubmit={manejarNuevoEqipo} >
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
                />             
                <Campo 
                titulo="Color" 
                placeholder="Ingresar Color" 
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
                />
                <Boton texto="Registrar equipo">
                </Boton>
            </form>    
        </section>
}

export default Formulario