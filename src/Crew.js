import React from 'react'
import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-gap: 4px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(2, 20px);
  margin: 0 auto;
  width: 400px;
`

const StyledInput = styled.input`
  border: 3px, solid grey;
  border-radius: 5px;
  grid-column-start: 3;
  grid-column-end: 6;
  height: 20px;
  align-items: center;
  justify-items: center;
`

const StyledCrewMember = styled.label`
  font-size: 14px;
  grid-column-start: 1;
  grid-column-end: 3;
  height: auto;
  display: grid;
  align-items: center;
  justify-items: center;
`

export default function Crew(onInputChange) {
  return (
    <GridContainer>
      <StyledCrewMember>Cpt</StyledCrewMember>
      <StyledInput onChange={onInputChange} key="cpt" label="Cpt" />
      <StyledCrewMember>FO</StyledCrewMember>
      <StyledInput onChange={onInputChange} key="fo" label="FO" />
      <StyledCrewMember>SCCM</StyledCrewMember>
      <StyledInput onChange={onInputChange} key="sccm" label="SCCM" />
      <StyledCrewMember>1R</StyledCrewMember>
      <StyledInput onChange={onInputChange} key="ccm1R" label="1R" />
      <StyledCrewMember>3L</StyledCrewMember>
      <StyledInput onChange={onInputChange} key="ccm3L" label="3L" />
      <StyledCrewMember>3R</StyledCrewMember>
      <StyledInput onChange={onInputChange} key="ccm3R" label="3R" />
      <StyledCrewMember>Additional</StyledCrewMember>
      <StyledInput label="Additional" />
    </GridContainer>
  )
}
