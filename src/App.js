import { useState, useEffect } from 'react';
import Navegacion from './components/Navegacion';
import Introduccion from './components/Introduccion';
import Proyectos from './components/Proyectos';
import './App.css';
import Noticias from './components/Noticias';
import Contacto from './components/Contacto';

function App() {
  const [perfil, setPerfil] = useState(null);

  useEffect(()=> {
    fetch(`${process.env.PUBLIC_URL}/data/perfil.json`)
      .then((respuesta) => respuesta.json())
      .then((datos)=> setPerfil(datos));
  }, []);

  return (
    <>
      <Navegacion />
      {perfil && <Introduccion {...perfil} /> }
      <Proyectos />
      <Noticias />
      <Contacto />
    </>
  );
}

export default App;