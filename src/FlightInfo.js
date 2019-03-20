import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    //document.title = 'Hallo'
    //alert(JSON.stringify(localStorage.getItem('Flightinfo')))
    let storageData = JSON.parse(localStorage.getItem('Flightinfo'))

    //if (storageData !== null) setFlightInfo(storageData)
  })

  // const [flightInfo, setFlightInfo] = useState(localStorage.getItem(FlightInfo))

  function onInputChange(event) {
    //console.log(event.target.value)
    //console.log({ ...flightInfo, [event.target.name]: event.target.value })

    //setFlightInfo({ ...flightInfo, [event.target.name]: event.target.value })
    //setFlightInfo({ hallo: 'welt' })

    console.log(flightInfo)
  } //alles was vorher drin war, key, value

  function onFormSubmit(event) {
    event.preventDefault()
    console.log(flightInfo)
    localStorage.setItem('Flightinfo', JSON.stringify(flightInfo))
  }
  return (
    <PageGrid>
      <form onSubmit={onFormSubmit}>
        <Aircraft
          onInputChange={onInputChange}
          aircraft={flightInfo.aircraft}
        />
        <Crew onInputChange={onInputChange} aircraft={flightInfo.crewmember} />
        <button type="submit">Save</button>
      </form>
    </PageGrid>
  )
}
