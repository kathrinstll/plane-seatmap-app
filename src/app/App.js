import React, { useState } from 'react'
import Cabin from '../Cabin'
import styled from 'styled-components'
import Header from '../Header'
import MealListPage from '../MealListPage'
import Footer from '../Footer'
import FlightInfo from '../FlightInfo'
import GlobalStyles from './GlobalStyle'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 73px auto 73px;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
`

const ActivePage = styled.section`
  display: grid;
  grid-template-rows: auto;
  overflow: scroll;
`

export default function App() {
  const [activePage, setActivePage] = useState('stockcount')
  /*let activePageElement
  if (activePage === 'seatmap') {
    activePageElement = <Cabin />
  } else {
    activePageElement = <MealListPage />
  }*/

  function ActivePageElement() {
    if (activePage === 'seatmap') {
      return <Cabin />
    } else if (activePage === 'flightinfo') {
      return <FlightInfo />
    } else {
      return <MealListPage />
    }
  }
  return (
    <Grid>
      <GlobalStyles />
      <Header activePageTitle={activePage} />
      <ActivePage>
        <ActivePageElement />
      </ActivePage>
      <Footer activePageSetter={setActivePage} />
    </Grid>
  )
}
