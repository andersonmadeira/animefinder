import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
`

const LayoutContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      {children}
    </LayoutContainer>
  )
}
