import React, { useState } from 'react'
import styled from 'styled-components'

const StyledSelectAircraft = styled.select``

export default function Aircraft(onInputChange, aircraft) {
  const [planes, setPlanes] = useState([
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
  ])

  return (
    <StyledSelectAircraft
      onChange={onInputChange}
      key="aircraft" //der key im useState auf der FlightInfo
      value={aircraft} //was auch immer für ein aircraft vom user dann selected wird
    >
      {planes.map(plane => (
        <option key={plane.aircraftName}>{plane.aircraftName}</option>
      ))}
    </StyledSelectAircraft>
  )
}
