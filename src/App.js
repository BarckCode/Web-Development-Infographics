import React, { useState } from 'react';
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

import Navigation from './components/layout/Navigation'
import Infographics from './components/Infographics'
import Footer from './components/layout/Footer';

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: 'Balsamiq Sans', cursive;
`

const App = () => {

  //Estado de los botones seleccionados
  const [ background, setBackground ] = useState('javascript')

  return (
    <>
      <Global
        styles={css`
          * {
            font-family: 'Dosis', sans-serif;
            box-sizing: border-box;
            margin: 0;
          }

          .main {
            padding: 3rem 0rem;
            max-width: 1024px;
            margin: 0 auto;
          }

          .javascript {
            background-color: #FFD600;
          }

          .javascript-neumorphism {
            border-radius: 25px;
            background: #FFD600;
            box-shadow:  5px 5px 15px #edc700,
                        -5px -5px 15px #ffe500;
          }

          .css {
            background-color: #008CFF;
          }

          .css-neumorphism {
            border-radius: 25px;
            background: #008CFF;
            box-shadow:  5px 5px 15px #0082ed,
                        -5px -5px 15px #0096ff;
          }

          .html {
            background-color: #F06429;
          }

          .html-neumorphism {
            border-radius: 25px;
            background: #F06429;
            box-shadow:  5px 5px 15px #df5d26,
                        -5px -5px 15px #ff6b2c;
          }
        `}
      />
      <main className={`main ${background}`}>

        <Title>Infographics</Title>

        <Navigation
          background={background}
          setBackground={setBackground}
        />

        <Infographics
          background={background}
        />

        <Footer />
      </main>
    </>
  );
}

export default App;
