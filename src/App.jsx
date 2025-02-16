import './App.css';
import {Posts, Saludo, TarjetaPresentacion} from './components'

function App() {

  const tipoSaludo ={
    mañana:'Buen día',
    tarde: 'Buenas tardes',
    noche: 'Buenas noches',
    otros: {
      saludo1:'Hola!',
      saludo2: 'Encantado!',
      saludo3: 'Adios!'
    }
  }

  const nombre = 'Soledad Caria';

  const fechaActual = new Date(Date.now());
 

  return (    
    
    <div>    
      <Saludo
      tipoSaludo={tipoSaludo}
      nombre={nombre}
      fecha={fechaActual}
      />
      <TarjetaPresentacion
        nombre={nombre}
        edad={33}
        ocupacion="Desarrolladora Web"
        imagen="c:\Users\maria\Downloads\Screenshot_20240824-161315-419.png"
      />
      <Posts/>
    </div>
  )
}

export default App