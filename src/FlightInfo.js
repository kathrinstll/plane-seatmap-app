import React, { useState } from 'react'
import styled from 'styled-components'
import Crew from './Crew'
import Aircraft from './Aircraft'

const PageGrid = styled.section`
  display: grid;
  align-content: center;
  margin: 0 auto;
`

export default function FlightInfo() {
  const [flightInfo, setFlightInfo] = useState({
    aircraft: '',
    cpt: '',
    fo: '',
    sccm: '',
    ccm1R: '',
    ccm3L: '',
    ccm3R: '',
    additional: '',
  })

  function onInputChange(event) {
    setFlightInfo({ ...flightInfo, [event.target.key]: event.target.value })
    console.log(flightInfo)
  } //alles was vorher drin war, key, value
  return (
    <PageGrid>
      <Aircraft onInputChange={onInputChange} aircraft={flightInfo.aircraft} />
      <Crew onInputChange={onInputChange} aircraft={flightInfo.crewmember} />
    </PageGrid>
  )
}
