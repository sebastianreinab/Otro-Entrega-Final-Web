import './App.css';
import { FormuInicio } from './componentes/auth/FormuInicio';
import { CosasMenu } from './componentes/CosasMenu';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from 'react';
import { Imagenes } from './componentes/Imagenes';
import { AppRouter } from './routers/AppRouter';

export const App =()=> {


  useEffect(()=>{
    const iconos = document.querySelectorAll(".cosoDelMenu");

    function activarIconoMenu() {
      iconos.forEach(n => n.classList.remove('active'));
        this.classList.add('active');
    }
    iconos.forEach((n) => n.addEventListener("click", activarIconoMenu))
  },[])

  return (
    <>
      
      <div className="App">
        
        <div className='header'>
          <header>
            <div className='menu'>           
              <button>Inicio</button>
              <button>Hoy</button>
              <CosasMenu icono={<ExpandMoreIcon />}/>
              <div className='busqueda'>
                <input type='text' placeholder='Search'/>
              </div>              
              <CosasMenu icono={<AddAlertIcon />}/>
              <CosasMenu icono={<TextsmsRoundedIcon />}/>
              <CosasMenu icono={<PersonIcon />}/>
              <CosasMenu icono={<ExpandMoreIcon />}/>              
            </div>     
          </header>       
        </div>      

        <div className='body'>
          <body>
            <div className='principal'>
              <Imagenes tamañoPin={"pequeño"}/>
              <Imagenes tamañoPin={"mediano"}/>
              <Imagenes tamañoPin={"grande"}/>
              <Imagenes tamañoPin={"pequeño"}/>
              <Imagenes tamañoPin={"mediano"}/>
              <Imagenes tamañoPin={"grande"}/>
              <Imagenes tamañoPin={"pequeño"}/>
              <Imagenes tamañoPin={"mediano"}/>
              <Imagenes tamañoPin={"grande"}/>
              <Imagenes tamañoPin={"pequeño"}/>
              <Imagenes tamañoPin={"mediano"}/>
              <Imagenes tamañoPin={"grande"}/>
              <Imagenes tamañoPin={"pequeño"}/>
              <Imagenes tamañoPin={"mediano"}/>
              <Imagenes tamañoPin={"grande"}/>
              <Imagenes tamañoPin={"pequeño"}/>
              <Imagenes tamañoPin={"mediano"}/>
              <Imagenes tamañoPin={"grande"}/>
              <Imagenes tamañoPin={"pequeño"}/>
              <Imagenes tamañoPin={"mediano"}/>
              <Imagenes tamañoPin={"grande"}/>
              <Imagenes tamañoPin={"pequeño"}/>
              <Imagenes tamañoPin={"mediano"}/>
              <Imagenes tamañoPin={"grande"}/>
            </div>
          </body>
        </div>
        <footer>
          <div></div>
        </footer>
      </div>
      
    </>
  );

  

  
}

//export default App;


