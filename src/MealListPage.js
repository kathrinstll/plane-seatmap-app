import React from 'react'
import styled from 'styled-components'
import MealCard from './MealCard'
import chickencurry from './images/chickencurry.jpg'

const meals = [
  {
    name: 'Chicken Curry',
    description:
      'Lorem ipsum dolor sit amet, id latine gubergren his, alia munere te nam, his ut mediocrem euripidis. Ei sea modo epicurei, quo mucius fastidii no. Ad mutat viderer admodum eam, has in percipit democritum. Cu sed vivendo epicuri, eirmod sanctus argumentum eu pro.',
    price: '6.90',
    image: chickencurry,
  },
  {
    name: 'Chickpea Curry',
    description:
      'Lorem ipsum dolor sit amet, id latine gubergren his, alia munere te nam, his ut mediocrem euripidis. Ei sea modo epicurei, quo mucius fastidii no. Ad mutat viderer admodum eam, has in percipit democritum. Cu sed vivendo epicuri, eirmod sanctus argumentum eu pro.',
    price: '6.90',
    image: chickencurry,
  },
  {
    name: 'Chickpea Curry',
    description:
      'Lorem ipsum dolor sit amet, id latine gubergren his, alia munere te nam, his ut mediocrem euripidis. Ei sea modo epicurei, quo mucius fastidii no. Ad mutat viderer admodum eam, has in percipit democritum. Cu sed vivendo epicuri, eirmod sanctus argumentum eu pro.',
    price: '6.90',
    image: chickencurry,
  },
  {
    name: 'Chickpea Curry',
    description:
      'Lorem ipsum dolor sit amet, id latine gubergren his, alia munere te nam, his ut mediocrem euripidis. Ei sea modo epicurei, quo mucius fastidii no. Ad mutat viderer admodum eam, has in percipit democritum. Cu sed vivendo epicuri, eirmod sanctus argumentum eu pro.',
    price: '6.90',
    image: chickencurry,
  },
]
const StyledMealList = styled.div`
  display: flex;
  flex-direction: column;
  /* grid-template-rows: repeat(4, 25vw); */
  /* @media screen and (min-width: 568px) {
    grid-template-rows: repeat(4, 25vw);
  } */
`

export default function MealListPage() {
  return (
    <StyledMealList>
      {meals.map(meal => (
        <MealCard
          name={meal.name}
          prize={meal.prize}
          description={meal.description}
          image={meal.image}
        />
      ))}
    </StyledMealList>
  )
}
