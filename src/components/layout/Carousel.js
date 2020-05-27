import React from 'react'
import styled from '@emotion/styled'

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h3`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-size: 1.25rem;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  padding: 1rem 0.5rem;
  color: #edf4f2;
  background-color: #000;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 2.5rem 0.75rem;
  }
`

const Carousel = ({ title, children }) => {

  return (
    <>
      <section className='carousel'>
        <Description>
          <Title>{title}</Title>
        </Description>
        <div className='carousel-container'>
          {children}
        </div>
      </section>
    </>
  )
}

export default Carousel
