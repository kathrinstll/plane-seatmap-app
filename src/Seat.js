import React from 'react'
import styled from 'styled-components'

const StyledSeat = styled.div`
  background-color: darkblue;
  border-radius: 2vw;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Seat({ name }) {
  return <StyledSeat>{name}</StyledSeat>
}
