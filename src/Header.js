import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header``

const Headline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: 4px;
  background: lightgrey;
  font-size: 20px;
`

export default function Header({ activePageTitle }) {
  return (
    <StyledHeader>
      <Headline>{activePageTitle}</Headline>
    </StyledHeader>
  )
}
