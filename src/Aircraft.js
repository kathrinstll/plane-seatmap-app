import React, { useState } from 'react'
import styled from 'styled-components'

const StyledSelectAircraft = styled.select`
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  border: grey;
  width: max-content;
  text-align: center;
`

export default function Aircraft({ onInputChange, flightInfo }) {
  console.log(onInputChange)
  console.log(flightInfo, 'Aircraft')
  const planes = [
    { aircraftName: 'DABKI' },
    { aircraftName: 'DABKM' },
    { aircraftName: 'DASUN' },
    { aircraftName: 'DARIK' },
    { aircraftName: 'DABKA' },
    { aircraftName: 'DABAK' },
    { aircraftName: 'DABAS' },
    { aircraftName: 'DABRI' },
    { aircraftName: 'DABLM' },
    { aircraftName: 'DABFA' },
  ]

  const [selectedField, setSelectedField] = useState('')
  console.log(selectedField, 'selected Field')
  function onChangeHandler(e) {
    e.preventDefault()
    setSelectedField(e.target.value)
    onInputChange(e)
  }
  return (
    <StyledSelectAircraft
      // if (selectedAircraft.value === 'Select Aircraft') {return }
      name="aircraft"
      onChange={e => onChangeHandler(e)}
      key="aircraft" //der key im useState auf der FlightInfo
      value={(flightInfo && flightInfo.aircraft) || ''} //was auch immer für ein aircraft vom user dann selected wird
      //   defaultValue={'Choose your aircraft'}
    >
      <option label="Choose your aircraft">Choose your Aircraft</option>
      {planes.map(plane => (
        <option key={plane.aircraftName}>{plane.aircraftName}</option>
      ))}
    </StyledSelectAircraft>
  )
}
