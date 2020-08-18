import React from 'react';
//Routes
import { useHistory } from 'react-router';
//Components
import H1 from 'src/components/Typography/H1';
import H3 from 'src/components/Typography/H3';
import { Back } from 'src/components/Buttons';
import { NotFound } from 'src/components/Images';
//Styles
import './Error404.css';

function Error404() {

  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  return (
    <div className="Error-Container">
      <H1 text="Lo sentimos, está página no existe." />
      <H3 
        text="Intentaste ingresar una ruta desconocida o llegaste aquí por algún error. Te sugerimos, usar la navegación para acceder a la aplicación de forma segura."
      />
      <NotFound />
      <Back onClick={ goBack }
        title="Volver al Inicio"
      />
    </div>
  );
}

export default Error404;
