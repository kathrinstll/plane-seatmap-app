import React, { useState } from 'react'
import Cabin from '../Cabin'
import styled from 'styled-components'
import Header from '../Header'
import MealList from '../MealList'

const Grid = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 10% auto;
`

export default function App() {
  const [activePage, setActivePage] = useState('stockcount')
  let activePageElement
  if (activePage === 'seatmap') {
    activePageElement = <Cabin />
  } else {
    activePageElement = <MealList />
  }
  return (
    <Grid>
      <Header activePageTitle={activePage} activePageSetter={setActivePage} />
      {activePageElement}
    </Grid>
  )
}
