import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Crew from './Crew'
import Aircraft from './Aircraft'
import BriefingInfo from './BriefingInfo'

const PageGrid = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`
const StyledButtonSave = styled.button`
  background: lightgrey;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  width: max-content;
  margin-top: 2%;
`
const StyledButtonDelete = styled.button`
  background: lightgrey;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  width: max-content;
  margin-top: 2%;
`

const StyledForm = styled.form`
  display: grid;
  justify-content: center; /* center horizontally */
  align-items: center; /* center vertically */
  width: auto;
  grid-auto-rows: auto;
`

export default function FlightInfo({
  setCurrentFlightInfo,
  currentFlightInfo,
}) {
  const [flightInfo, setFlightInfo] = useState({
    aircraft: '',
    cpt: '',
    fo: '',
    sccm: '',
    ccm1R: '',
    ccm3L: '',
    ccm3R: '',
    additional: '',
    briefinginfo: '',
  })

  useEffect(() => {
    setFlightInfo(JSON.parse(localStorage.getItem('flightInfo')))
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'flightInfo', //name den ich für den local storage vergeben muss, damit der einen key hat für die Daten die er speichert.
      JSON.stringify(flightInfo)
    )
  }, [flightInfo])

  function onInputChange(event) {
    setFlightInfo({ ...flightInfo, [event.target.name]: event.target.value })
  } //alles was vorher drin war, key, value

  function onFormSubmit(event, flightInfo) {
    event.preventDefault()

    localStorage.setItem(
      'flightInfo', //name den ich für den local storage vergeben muss, damit der einen key hat für die Daten die er speichert.
      JSON.stringify(flightInfo)
    )
  }

  function onFormDelete(event) {
    event.preventDefault()
    setFlightInfo({
      aircraft: '',
      cpt: '',
      fo: '',
      sccm: '',
      ccm1R: '',
      ccm3L: '',
      ccm3R: '',
      additional: '',
      briefinginfo: '',
    })
  }

  return (
    <PageGrid>
      <StyledForm onSubmit={e => onFormSubmit(e, flightInfo)}>
        <Aircraft onInputChange={onInputChange} flightInfo={flightInfo} />
        <Crew
          onInputChange={e => onInputChange(e, flightInfo)}
          flightInfo={flightInfo}
        />
        <BriefingInfo
          onInputChange={e => onInputChange(e, flightInfo)}
          flightInfo={flightInfo}
        />
        <StyledButtonDelete onClick={onFormDelete}>Delete</StyledButtonDelete>
      </StyledForm>
    </PageGrid>
  )
}
