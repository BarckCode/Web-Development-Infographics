import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

const Nav = styled.nav`
  margin: 1rem;
  padding: 2rem 0;
  text-align: center;
`

const Navigation = ({ background, setBackground }) => {

  return (
    <>
      <Global
        styles={css`
          .nav-container {
            width: 90%;
            max-width: 500px;
            margin: 0 auto;
          }

          .btn {
            background-color: #edf4f2;
            border-color: #edf4f2;
            border-radius: 25px;
            padding: 0.5rem 1rem;
            margin: 0 0.25rem;
            font-family: 'Balsamiq Sans', cursive;
            font-weight: 700;
            font-size: 14px;
            outline: none;
          }

          .btn:hover {
            background-color: #000;
            border-color: #000;
            color: #edf4f2;
          }

          .btn-active {
            background-color: #000;
            border-color: #000;
            color: #edf4f2;
          }
        `}
      />
      <div className={`nav-container ${background}-neumorphism`}>
        <Nav>
          <button
            type='button'
            className={`
              btn
              ${background === 'javascript' ? 'btn-active' : ''}
            `}
            onClick={() => setBackground('javascript')}
          >
            JavaScript
          </button>
          <button
            type='button'
            className={`
              btn
              ${background === 'css' ? 'btn-active' : ''}
            `}
            onClick={() => setBackground('css')}
          >
            CSS
          </button>
          <button
            type='button'
            className={`
              btn
              ${background === 'html' ? 'btn-active' : ''}
            `}
            onClick={() => setBackground('html')}
          >
            HTML
          </button>
        </Nav>
      </div>
    </>
  )
}

export default Navigation
