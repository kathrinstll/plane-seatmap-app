import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.section`
  display: grid;
  grid-template-rows: 100px auto auto auto;
  grid-template-columns: 2fr 1fr;
  grid-gap: 12px;
  border-radius: 41px;
  border: 1px solid grey;
  margin: 20px;
`

const StyledText = styled.p`
  grid-row-start: 3;
  font-size: 16px;
  padding: 8px;
  grid-column-start: 1;
  grid-column-end: 3;
`

const StyledImage = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 40px 40px 0 0;
  grid-column-start: 1;
  grid-column-end: 3;
`

const StyledDishName = styled.h1`
  color: cornflowerblue;
  grid-row-start: 2;
  grid-row-end: 3;
  text-align: center;
`

const StyledPrizeTag = styled.div`
  color: white;
  font-size: 16px;
  border-radius: 50%;
  background-color: darkblue;
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
`

const StyledStockCountInput = styled.input`
  border: 3px;
  border-radius: 50%;
  height: 20px;
  border-color: lightgrey;
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
      <StyledStockCountInput />
      <StyledText>{description}</StyledText>
      <StyledPrizeTag>{prize}</StyledPrizeTag>
    </StyledCard>
  )
}
