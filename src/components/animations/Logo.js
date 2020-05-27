import React from 'react'
import { Global, css } from '@emotion/core'

const Logo = () => {
  return (
    <>
      <Global
        styles={css`
          .sk-cube-grid {
            width: 40px;
            height: 40px;
            margin-right: 0.5rem;
          }

          .sk-cube-grid .sk-cube {
            width: 33%;
            height: 33%;
            background-color: #000;
            float: left;
            -webkit-animation: sk-cubeGridScaleDelay 1.5s 1 ease-in-out;
                    animation: sk-cubeGridScaleDelay 1.5s 1 ease-in-out;
          }
          .sk-cube-grid .sk-cube1 {
            animation-delay: 0.4s;
            -webkit-animation-delay: 0.4s;
          }
          .sk-cube-grid .sk-cube2 {
            animation-delay: 0.6s;
            -webkit-animation-delay: 0.6s;
          }
          .sk-cube-grid .sk-cube3 {
            background-color: #edf4f2;
            animation-delay: 0.8s;
            -webkit-animation-delay: 0.8s;
          }
          .sk-cube-grid .sk-cube4 {
            animation-delay: 0.2s;
            -webkit-animation-delay: 0.2s;
          }
          .sk-cube-grid .sk-cube5 {
            background-color: #edf4f2;
            animation-delay: 0.4s;
            -webkit-animation-delay: 0.4s;
          }
          .sk-cube-grid .sk-cube6 {
            animation-delay: 0.6s;
            -webkit-animation-delay: 0.6s;
          }
          .sk-cube-grid .sk-cube7 {
            background-color: #edf4f2;
            animation-delay: 0s;
            -webkit-animation-delay: 0s;
          }
          .sk-cube-grid .sk-cube8 {
            animation-delay: 0.2s;
            -webkit-animation-delay: 0.2s;
          }
          .sk-cube-grid .sk-cube9 {
            animation-delay: 0.4s;
            -webkit-animation-delay: 0.4s;
          }

          @-webkit-keyframes sk-cubeGridScaleDelay {
            100%, 70%, 0% {
              -webkit-transform: scale3D(1, 1, 1);
                      transform: scale3D(1, 1, 1);
            } 35% {
              -webkit-transform: scale3D(0, 0, 1);
                      transform: scale3D(0, 0, 1);
            }
          }

          @keyframes sk-cubeGridScaleDelay {
            100%, 70%, 0% {
              -webkit-transform: scale3D(1, 1, 1);
                      transform: scale3D(1, 1, 1);
            } 35% {
              -webkit-transform: scale3D(0, 0, 1);
                      transform: scale3D(0, 0, 1);
            }
          }
        `}
      />
      <div className='sk-cube-grid'>
        <div className='sk-cube sk-cube1'></div>
        <div className='sk-cube sk-cube2'></div>
        <div className='sk-cube sk-cube3'></div>
        <div className='sk-cube sk-cube4'></div>
        <div className='sk-cube sk-cube5'></div>
        <div className='sk-cube sk-cube6'></div>
        <div className='sk-cube sk-cube7'></div>
        <div className='sk-cube sk-cube8'></div>
        <div className='sk-cube sk-cube9'></div>
      </div>
    </>
  )
}

export default Logo
