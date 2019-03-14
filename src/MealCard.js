import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.section`
  display: grid;
  grid-template-rows: 100px auto auto;
  grid-gap: 12px;
  border-radius: 41px;
  border: 1px solid grey;
  margin: 20px;
`

const StyledText = styled.p`
  grid-row-start: 3;
  font-size: 16px;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
`

const StyledImage = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 40px 40px 0 0;
`

const StyledDishName = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  color: cornflowerblue;
  grid-row-start: 2;
  grid-row-end: 3;
`

const StyledPrizeTag = styled.div`
  color: white;
  font-size: 16px;
  border-radius: 50%;
  background-color: darkblue;
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
`

export default function MealCard({ name, description, prize, image }) {
  return (
    <StyledCard>
      <StyledImage
        style={{
          backgroundImage: 'url(' + image + ')',
        }}
      />
      <StyledDishName>{name}</StyledDishName>
      <StyledText>{description}</StyledText>
      <StyledPrizeTag>{prize}</StyledPrizeTag>
    </StyledCard>
  )
}
