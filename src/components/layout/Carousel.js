import React from 'react'

const Carousel = ({ children }) => {

  return (
    <>
      <section className='carousel'>
        <div className='carousel-container'>
          {children}
        </div>
      </section>
    </>
  )
}

export default Carousel
