import React, { useState } from 'react'
import styled from 'styled-components'
import Seat from './Seat'

const StyledCabin = styled.div`
  display: grid;
  grid-gap: 1vw;
  grid-template-columns: repeat(7, 10vw);
  grid-template-rows: repeat(32, 10vw);
  margin: 0 auto;
  font-size: 4vw;
  overflow-y: scroll;

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(7, 10vw);
    grid-template-rows: repeat(32, 10vw);
  }
`

const StyledAisle = styled.div`
  grid-column-start: 4;
  grid-row: 1 / 33;
`
const StyledEmpty = styled.div`
  grid-column: 5 / 8;
  grid-row-start: 1;
`

export default function Cabin() {
  const [seats, setSeats] = useState([
    { seatnumber: '1A' },
    { seatnumber: '1B' },
    { seatnumber: '1C' },
    { seatnumber: '2A' },
    { seatnumber: '2B' },
    { seatnumber: '2C' },
    { seatnumber: '2D' },
    { seatnumber: '2E' },
    { seatnumber: '2F' },
    { seatnumber: '3A' },
    { seatnumber: '3B' },
    { seatnumber: '3C' },
    { seatnumber: '3D' },
    { seatnumber: '3E' },
    { seatnumber: '3F' },
    { seatnumber: '4A' },
    { seatnumber: '4B' },
    { seatnumber: '4C' },
    { seatnumber: '4D' },
    { seatnumber: '4E' },
    { seatnumber: '4F' },
    { seatnumber: '5A' },
    { seatnumber: '5B' },
    { seatnumber: '5C' },
    { seatnumber: '5D' },
    { seatnumber: '5E' },
    { seatnumber: '5F' },
    { seatnumber: '6A' },
    { seatnumber: '6B' },
    { seatnumber: '6C' },
    { seatnumber: '6D' },
    { seatnumber: '6E' },
    { seatnumber: '6F' },
    { seatnumber: '7A' },
    { seatnumber: '7B' },
    { seatnumber: '7C' },
    { seatnumber: '7D' },
    { seatnumber: '7E' },
    { seatnumber: '7F' },
    { seatnumber: '8A' },
    { seatnumber: '8B' },
    { seatnumber: '9C' },
    { seatnumber: '9D' },
    { seatnumber: '9E' },
    { seatnumber: '9F' },
    { seatnumber: '10A' },
    { seatnumber: '10B' },
    { seatnumber: '10C' },
    { seatnumber: '10D' },
    { seatnumber: '10E' },
    { seatnumber: '10F' },
    { seatnumber: '11A' },
    { seatnumber: '11B' },
    { seatnumber: '11C' },
    { seatnumber: '11D' },
    { seatnumber: '11E' },
    { seatnumber: '11F' },
    { seatnumber: '12A' },
    { seatnumber: '12B' },
    { seatnumber: '12C' },
    { seatnumber: '12D' },
    { seatnumber: '12E' },
    { seatnumber: '12F' },
    { seatnumber: '13A' },
    { seatnumber: '13B' },
    { seatnumber: '13C' },
    { seatnumber: '13D' },
    { seatnumber: '13E' },
    { seatnumber: '13F' },
    { seatnumber: '14A' },
    { seatnumber: '14B' },
    { seatnumber: '14C' },
    { seatnumber: '14D' },
    { seatnumber: '14E' },
    { seatnumber: '14F' },
    { seatnumber: '15A' },
    { seatnumber: '15B' },
    { seatnumber: '15C' },
    { seatnumber: '15D' },
    { seatnumber: '15E' },
    { seatnumber: '15F' },
    { seatnumber: '16A' },
    { seatnumber: '16B' },
    { seatnumber: '16C' },
    { seatnumber: '16D' },
    { seatnumber: '16E' },
    { seatnumber: '16F' },
    { seatnumber: '17A' },
    { seatnumber: '17B' },
    { seatnumber: '17C' },
    { seatnumber: '17D' },
    { seatnumber: '17E' },
    { seatnumber: '17F' },
    { seatnumber: '18A' },
    { seatnumber: '18B' },
    { seatnumber: '18C' },
    { seatnumber: '18D' },
    { seatnumber: '18E' },
    { seatnumber: '18F' },
    { seatnumber: '19A' },
    { seatnumber: '19B' },
    { seatnumber: '19C' },
    { seatnumber: '19D' },
    { seatnumber: '19E' },
    { seatnumber: '19F' },
    { seatnumber: '20A' },
    { seatnumber: '20B' },
    { seatnumber: '20C' },
    { seatnumber: '20D' },
    { seatnumber: '20E' },
    { seatnumber: '20F' },
    { seatnumber: '21A' },
    { seatnumber: '21B' },
    { seatnumber: '21C' },
    { seatnumber: '21D' },
    { seatnumber: '21E' },
    { seatnumber: '22F' },
    { seatnumber: '23A' },
    { seatnumber: '23B' },
    { seatnumber: '23C' },
    { seatnumber: '23D' },
    { seatnumber: '23E' },
    { seatnumber: '23F' },
    { seatnumber: '24A' },
    { seatnumber: '24B' },
    { seatnumber: '24C' },
    { seatnumber: '24D' },
    { seatnumber: '24E' },
    { seatnumber: '24F' },
    { seatnumber: '25A' },
    { seatnumber: '25B' },
    { seatnumber: '25C' },
    { seatnumber: '26D' },
    { seatnumber: '26E' },
    { seatnumber: '26F' },
    { seatnumber: '27A' },
    { seatnumber: '27B' },
    { seatnumber: '27C' },
    { seatnumber: '27D' },
    { seatnumber: '27E' },
    { seatnumber: '27F' },
    { seatnumber: '28A' },
    { seatnumber: '28B' },
    { seatnumber: '28C' },
    { seatnumber: '28D' },
    { seatnumber: '28E' },
    { seatnumber: '28F' },
    { seatnumber: '29A' },
    { seatnumber: '29B' },
    { seatnumber: '29C' },
    { seatnumber: '29D' },
    { seatnumber: '29E' },
    { seatnumber: '29F' },
    { seatnumber: '30A' },
    { seatnumber: '30B' },
    { seatnumber: '30C' },
    { seatnumber: '30D' },
    { seatnumber: '30E' },
    { seatnumber: '30F' },
    { seatnumber: '31A' },
    { seatnumber: '31B' },
    { seatnumber: '31C' },
    { seatnumber: '31D' },
    { seatnumber: '31E' },
    { seatnumber: '31F' },
    { seatnumber: '32A' },
    { seatnumber: '32B' },
    { seatnumber: '32C' },
    { seatnumber: '32D' },
    { seatnumber: '32E' },
    { seatnumber: '32F' },
  ])

  return (
    <StyledCabin>
      {seats.map(seat => (
        <Seat key={seat.seatnumber} name={seat.seatnumber} />
      ))}

      <StyledEmpty />
      <StyledAisle />
    </StyledCabin>
  )
}
