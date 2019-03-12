import React from 'react'
import styled from 'styled-components'

const StyledPlane = styled.div`
  .plane {
    margin: 20px auto;
    max-width: 300px;
  }
`

export default function Plane({ name }) {
  return (
    <StyledPlane>
      <div class="plane" />
    </StyledPlane>
  )
}
