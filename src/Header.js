import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header``

const Headline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ;
  margin-bottom: 4px;
  background: lightgrey;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
`

export default function Header({ activePageTitle }) {
  return (
    <StyledHeader>
      <Headline>{activePageTitle}</Headline>
    </StyledHeader>
  )
}
