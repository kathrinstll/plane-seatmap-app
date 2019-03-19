import React from 'react'
import styled from 'styled-components'
import MealSelect from './MealSelect'

const StyledSeat = styled.div`
  background-color: darkblue;
  border-radius: 2vw;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledXLSeat = styled.div`
  background-color: cornflowerblue;
  border-radius: 2vw;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Seat({ name }) {
  if (name.includes('15') || name.includes('16')) {
    return <StyledXLSeat>{name}</StyledXLSeat>
  } else {
    return <StyledSeat>{name}</StyledSeat>
  }
}
