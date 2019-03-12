import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header``

const Headline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-bottom: 4px;
  background: hotpink;
  color: white;
`

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const TitleElement = styled.div`
  background: red;
  padding: 5px;
  border-radius: 2px;
`

export default function Header({ activePageSetter, activePageTitle }) {
  return (
    <StyledHeader>
      <Headline>{activePageTitle}</Headline>
      <Nav>
        <TitleElement onClick={() => activePageSetter('seatmap')}>
          Seatmap
        </TitleElement>
        <TitleElement onClick={() => activePageSetter('stockcount')}>
          StockCount
        </TitleElement>
      </Nav>
    </StyledHeader>
  )
}
