import React from 'react'
import { Global, css } from '@emotion/core'

const InfographicHtml = ({ htmlData }) => {

  const [ originData ] = htmlData

  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #F06429;
          }

          .carousel {
            width: 100%;
            margin-top: 2rem;
            overflow: scroll;
            position: relative;
          }

          .carousel-container {
            white-space: nowrap;
          }

          .carousel-item {
            width: 50%;
            max-width: 450px;
            border-radius: 25px;
            overflow: hidden;
            display: inline-block;
            transition: all 450ms;
            transform-origin: center left;
            margin-right: 10px;
          }

          .carousel-container:hover .carousel-item {
            opacity: .15;
          }

          .carousel-container:hover .carousel-item:hover {
            margin: 120px 0;
            transform: scale(1.9);
            opacity: 1;
            @media (min-width: 768px) {
              transform: scale(1.5);
            }
          }

          .carousel-item:hover ~ .carousel-item {
            transform: translate3d(125px, 0, 0);
          }

          .carousel-item__img {
            width: 100%;
            border-radius: 25px;
          }
        `}
      />
      <section className='carousel'>
        <div className='carousel-container'>
          {originData.origin.map(infographic => (
            <figure className='carousel-item' key={infographic.id}>
              <img className='carousel-item__img' src={infographic.url} alt='Infographic' />
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}

export default InfographicHtml
