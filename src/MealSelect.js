import React from 'react'
import styled from 'styled-components'

const StyledMealSelect = styled.select`
  position: relative;
`

export default function MealSelect() {
  const [meals, setMeals] = () => [
    { mealName: 'ChickenCurry' },
    { mealName: 'PizzaWrap' },
    { mealName: 'Pommes Frites' },
    { mealName: 'Chickpea Curry' },
    { mealName: 'Pasta Bolognese' },
  ]
  return (
    <StyledMealSelect>
      {meals.map(meal => (
        <option>{meal.mealName}</option>
      ))}
    </StyledMealSelect>
  )
}
