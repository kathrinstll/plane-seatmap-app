import React from 'react'
import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-gap: 4px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(2, 20px);
  margin: 0 auto;
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

export default function Crew({ flightInfo, onInputChange }) {
  console.log(flightInfo)
  // const [selectedField, setSelectedField] = useState({
  //   cpt: flightInfo.cpt,
  //   fo: flightInfo.fo,
  //   sccm: flightInfo.sccm,
  //   ccm1R: flightInfo.ccm1R,
  //   ccm3L: flightInfo.ccm3L,
  //   ccm3R: flightInfo.ccm3R,
  //   additional: flightInfo.additional,
  // })
  function onChangeHandler(e) {
    // setSelectedField({
    //   ...selectedField,
    //   [e.target.name]: e.target.value,
    // })
    onInputChange(e, e.target.value)
  }

  return (
    <GridContainer>
      <StyledCrewMember>Cpt</StyledCrewMember>
      <StyledInput
        onChange={onChangeHandler}
        value={(flightInfo && flightInfo.cpt) || ''}
        name="cpt"
        label="Cpt"
      />
      <StyledCrewMember>FO</StyledCrewMember>
      <StyledInput
        onChange={onChangeHandler}
        value={(flightInfo && flightInfo.fo) || ''}
        name="fo"
        label="FO"
      />
      <StyledCrewMember>SCCM</StyledCrewMember>
      <StyledInput
        onChange={onChangeHandler}
        value={(flightInfo && flightInfo.sccm) || ''}
        name="sccm"
        label="SCCM"
      />
      <StyledCrewMember>1R</StyledCrewMember>
      <StyledInput
        onChange={onChangeHandler}
        value={(flightInfo && flightInfo.ccm1R) || ''}
        name="ccm1R"
        label="1R"
      />

      <StyledCrewMember>3L</StyledCrewMember>
      <StyledInput
        onChange={onChangeHandler}
        value={(flightInfo && flightInfo.ccm3L) || ''}
        name="ccm3L"
        label="3L"
      />
      <StyledCrewMember>3R</StyledCrewMember>
      <StyledInput
        onChange={onChangeHandler}
        value={(flightInfo && flightInfo.ccm3R) || ''}
        name="ccm3R"
        label="3R"
      />
      <StyledCrewMember>Additional</StyledCrewMember>
      <StyledInput
        onChange={onChangeHandler}
        value={(flightInfo && flightInfo.additional) || ''}
        name="additional"
        label="Additional"
      />
    </GridContainer>
  )
}
