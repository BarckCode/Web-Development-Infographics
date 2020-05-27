import React from 'react'
import { Global, css } from '@emotion/core'

//COMPONENTS:
import Carousel from './layout/Carousel'
import ImageCarousel from './layout/ImageCarousel';

//DATA:
import { javascriptData, cssData, htmlData } from './services/urlImages'


const Infographics = ({ background }) => {

  // Componente condicional:
  let infographics
  if(background === 'javascript') {
    const [ originData, variablesData, functionsData ] = javascriptData

    infographics = (
      <>
        <Global
          styles={css`
            body {
              background-color: #FFD600;
            }
          `}
        />
        <Carousel title='Functions'>
          {functionsData.functions.map(infographic => (
              <ImageCarousel
                key={infographic.id}
                infographic={infographic}
              />
          ))}
        </Carousel>
        <Carousel title='Variables'>
          {variablesData.variables.map(infographic => (
              <ImageCarousel
                key={infographic.id}
                infographic={infographic}
              />
          ))}
        </Carousel>
        <Carousel title='History'>
          {originData.origin.map(infographic => (
              <ImageCarousel
                key={infographic.id}
                infographic={infographic}
              />
          ))}
        </Carousel>
      </>
    )
  } else if(background === 'css') {
    const [ originData ] = cssData

    infographics = (
      <>
        <Global
          styles={css`
            body {
              background-color: #008CFF;
            }
          `}
        />
        <Carousel title='History'>
          {originData.origin.map(infographic => (
              <ImageCarousel
                key={infographic.id}
                infographic={infographic}
              />
          ))}
        </Carousel>
      </>
    )

  } else {
    const [ originData ] = htmlData

    infographics = (
      <>
        <Global
          styles={css`
            body {
              background-color: #F06429;
            }
          `}
        />
        <Carousel title='History'>
          {originData.origin.map(infographic => (
              <ImageCarousel
                key={infographic.id}
                infographic={infographic}
              />
          ))}
        </Carousel>
      </>
    )
  }

  return (
    <>
      {infographics}
    </>
  )
}

export default Infographics
