import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario,actualizarMostrar] = useState (false)
  const [colaboradores, actualizarColaboradores] = useState([
    {  
      id: uuidv4(),  
      equipo:"Front End",
      foto:"https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg",
      nombre:"Luffy",
      puesto:"Instructor",
      fav: true
    }, 
    {    
      id: uuidv4(),
      equipo:"Programacion",
      foto:"https://imagenes.elpais.com/resizer/p_hfMdkblIvOmZD-Vq5tVBDKEDQ=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/5IAINVVMGBEH5OY6S4EGAYX22M.jpg",
      nombre:"Ariana Grande",
      puesto:"Desarrollador de software",
      fav: false
    },
    {    
      id: uuidv4(),
      equipo:"UX y Diseño",
      foto:"https://i.blogs.es/0cafeb/naruto/1366_2000.jpeg",
      nombre:"Naruto",
      puesto:"Instructor",
      fav: false
    },
    {    
      id: uuidv4(),
      equipo:"Programacion",
      foto:"https://www.elgrafico.com.ar/media/cache/pub_news_details_large/media/i/93/aa/93aa8de92702553e21a87ba0b6d53269557b159a.jpg",
      nombre:"Messi",
      puesto:"Head Coach",
      fav: false
    },
    {    
      id: uuidv4(),
      equipo:"Innovacion y Gestion",
      foto:"https://www.infobae.com/new-resizer/k6AFlGUHNtra2A3JSO1DlbXK9wU=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/V4KDBOBEAJEADDASM6RVD7ZXMM.jpg",
      nombre:"Mollo",
      puesto:"Dev Fullstack",
      fav: false
    },
    {    
      id: uuidv4(),
      equipo:"Devops",
      foto:"https://www.xtrafondos.com/wallpapers/goku-super-saiyan-blue-de-dragon-ball-super-3737.jpg",
      nombre:"Goku",
      puesto:"Back End",
      fav: false
    }
])

  const [equipos, actualizarEquipos] = useState([
  {
    id: uuidv4(),
    titulo:"Programacion",
    colorPrimario:"#57c278",
    colorSecundario:"#d9f7e9"
  },
  {
    id: uuidv4(),
    titulo:"Front End",
    colorPrimario:"#82CFFA",
    colorSecundario:"#e8f8ff"
  },
  {
    id: uuidv4(),
    titulo:"Data Science",
    colorPrimario:"#a6d157",
    colorSecundario:"#f0f8e2"
  },
  {
    id: uuidv4(),
    titulo:"Devops",
    colorPrimario:"#e06b69",
    colorSecundario:"#fde7e8"
  },
  {
    id: uuidv4(),
    titulo:"UX y Diseño",
    colorPrimario:"#db6ebf",
    colorSecundario:"#fae9f5"
  },
  {
    id: uuidv4(),
    titulo:"Movil",
    colorPrimario:"#ffba05",
    colorSecundario:"#fff5d9"
  },
  {
    id: uuidv4(),
    titulo:"Innovacion y Gestion",
    colorPrimario:"#ff8a29",
    colorSecundario:"#ffeedf"
  }
])


  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //REGISTRAR COLABORADOR

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread Operator
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //ELMIMINAR COLABORADOR
  const eliminarColaborador =(id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //ACTUALIZAR COLOR DE EQUIPO
  const actualizarColor =(color, id) => {
    console.log("Actualizar: ",color,id)
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //CREAR EQUIPO

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo,id:uuidv4()}])
  }

  //LIKE
  const like = (id) => {
    console.log ("like", like)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
        <Header />
        {/*mostrarFormulario === true ? <Formulario/> : <div></div>*/}
        {mostrarFormulario && <Formulario 
            equipos={equipos.map((equipo)=> equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
         />
        }
        
        <MiOrg cambiarMostrar={cambiarMostrar}/>
        
        {
          equipos.map((equipo)=>{
            return <Equipo 
            datos={equipo} 
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
            />
          })
        }
        <Footer/>

    </div>
  );
}

export default App
