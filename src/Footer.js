import React from 'react'
import styled from 'styled-components'
import foodIcon from '../src/images/foodicon.svg'
import planeIcon from '../src/images/planeicon.svg'
import seatIcon from '../src/images/seaticon.svg'

const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  background: lightgrey;

  /* position: absolute;
  z-index: 999; */
`

const NavBarElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  margin-top: 4px;
  background: lightgrey;
`
const ImgContainer = styled.div`
  align-items: center;
  justify-content: center;
`
const StyledImg = styled.img`
  height: 53px;
  width: 53px;
`

const StyledPlane = styled.img`
  height: 48px;
  width: 48px;
`

export default function Footer({ activePageSetter }) {
  return (
    <Nav onClick={() => console.log('footer')}>
      <NavBarElement onClick={() => activePageSetter('flightinfo')}>
        <StyledPlane src={planeIcon} alt="" />
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
