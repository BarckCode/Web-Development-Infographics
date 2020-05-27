import React from 'react'
import styled from '@emotion/styled'
import Logo from '../animations/Logo'

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: 'Balsamiq Sans', cursive;
`

const Header = () => {
  return (
    <Container>
      <Logo />
      <Title>Infographics</Title>
    </Container>
  )
}

export default Header
