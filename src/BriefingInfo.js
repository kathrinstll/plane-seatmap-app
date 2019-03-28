import React from 'react'
import styled from 'styled-components'

const StyledBriefingInfo = styled.textarea`
  border-radius: 4px;
  border-color: lightgrey;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
`

export default function BriefingInfo({
  briefingInfo,
  onInputChange,
  flightInfo,
}) {
  return (
    <StyledBriefingInfo
      name="briefinginfo"
      onChange={e => onInputChange(e, briefingInfo)}
      rows="12"
      placeholder="type in briefing details such as weather, routing, specials."
      value={(flightInfo && flightInfo.briefinginfo) || ''}
    />
  )
}
