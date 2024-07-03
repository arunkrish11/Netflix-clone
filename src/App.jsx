import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import {originals, trending,actions,romance } from './urls'
import Banner from './Components/Banner/Banner'
import RowPoster from './Components/RowPoster/RowPoster'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      {/* Reusing the Component */}
      <RowPoster title="NETFLIX ORIGINALS" url={originals} />
      <RowPoster isSmall title="TRENDING" url={trending} />
      <RowPoster isSmall title="ACTION" url={actions} />
      <RowPoster isSmall title="ROMANCE" url={romance} />

    </div>
  )
}

export default App
