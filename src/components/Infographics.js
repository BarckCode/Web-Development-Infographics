import React from 'react'

//COMPONENTS:
import InfographicsJavascript from './InfographicJavascript';
import InfographicsCss from './InfographicCss';
import InfographicsHtml from './InfographicHtml';

//DATA:
import { javascriptData, cssData, htmlData } from './services/urlImages'

const Infographics = ({ background }) => {

  // Condición que indica que datos de la "API de Imagenes" se van a utilizar dependiendo del botón seleccionado:
  let infographics
  if(background === 'javascript') {
    infographics = <InfographicsJavascript javascriptData={javascriptData}/>

  } else if(background === 'css') {
    infographics = <InfographicsCss cssData={cssData}/>

  } else {
    infographics = <InfographicsHtml htmlData={htmlData}/>
  }

  return (
    <>
      {infographics}
    </>
  )
}

export default Infographics
