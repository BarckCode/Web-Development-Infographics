import React from 'react'

const ImageCarousel = ({ infographic }) => {
  return (
    <figure className='carousel-item'>
      <img className='carousel-item__img' src={infographic.url} alt='Infographic' />
    </figure>
  )
}

export default ImageCarousel
