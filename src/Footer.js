import React from 'react'
import styled from 'styled-components'
import foodIcon from '../src/images/foodicon.svg'
import planeIcon from '../src/images/planeicon.svg'
import seatIcon from '../src/images/seaticon.svg'

const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
`

const NavBarElement = styled.div`
  background: lightgrey;
  padding: 5px;
  border-radius: 2px;
  align-self: center;
`

const StyledImg = styled.img`
  height: 53px;
  width: 53px;
`

export default function Footer({ activePageSetter }) {
  return (
    <Nav>
      <NavBarElement onClick={() => activePageSetter('flightinfo')}>
        <StyledImg src={planeIcon} alt="" />
      </NavBarElement>
      <NavBarElement onClick={() => activePageSetter('stockcount')}>
        <StyledImg src={foodIcon} alt="" />
      </NavBarElement>
      <NavBarElement onClick={() => activePageSetter('seatmap')}>
        <StyledImg src={seatIcon} alt="" />
      </NavBarElement>
    </Nav>
  )
}
